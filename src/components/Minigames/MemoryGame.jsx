import {
  Games,
  PointOfSale,
  Score,
  Token,
} from "@mui/icons-material"
import React, { useState, useEffect, useMemo } from "react"
import { plural } from "../../utils/utils"
import { useBearStore } from "../../utils/store";

// Define all available emojis
const allEmojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🦟",
  "🦗",
  "🕷",
]

function MemoryGame({  }) {
  const { tokens, ownedSouvenirs, increaseTokens } = useBearStore();

  const [gridRows, setGridRows] = useState(4) // Number of rows
  const [gridCols, setGridCols] = useState(4) // Number of columns
  const reward = useMemo(() => getRewards(ownedSouvenirs), [ownedSouvenirs]);


  let gridSize = gridRows * gridCols

  // Create a subset of emojis based on grid size
  const emojis = allEmojis.slice(
    0,
    (gridRows * gridCols) / 2
  )

  const maxMoves = Math.round(gridSize * 0.8)

  // Define other state variables
  let [shuffledEmojis, setShuffledEmojis] = useState([])
  let [currentCards, setCurrentCards] = useState([])
  let [completed, setCompleted] = useState([])
  let [block, setBlock] = useState(false)
  let [moves, setMoves] = useState(0)
  let [score, setScore] = useState(0)
  let [gameOver, setGameOver] = useState("")

  useEffect(() => {
    let shuffledEmojis = [...emojis, ...emojis].sort(
      () => Math.random() - 0.5
    )
    setShuffledEmojis(shuffledEmojis)
  }, [])

  function flipCard(index) {
    if (block) return
    if (currentCards.length === 0) {
      setCurrentCards([index])
      return
    }
    if (currentCards.length === 1) {
      setBlock(true)
      setCurrentCards([...currentCards, index])
      setMoves(moves + 1)
    }
  }

  function getRewards(ownedSouvenirs) {
    console.log(ownedSouvenirs)
  }

  function resetGame() {
    setShuffledEmojis(
      [...emojis, ...emojis].sort(() => Math.random() - 0.5)
    )
    setCurrentCards([])
    setCompleted([])
    setBlock(false)
    setMoves(0)
    setScore(0)
    setGameOver(false)
  }

  useMemo(() => {
    if (gameOver === "lose") {
      alert("Game Over!")
      resetGame()
    }
  }, [gameOver])

  useMemo(() => {
    if (score >= gridSize) {
      setGameOver("win")
      const payout = Math.max(1, ownedSouvenirs?.length || 0)
      increaseTokens(payout)
      resetGame()
    }

    if (currentCards < 2) return

    const firstMatch = shuffledEmojis[currentCards[0]]
    const secondMatch = shuffledEmojis[currentCards[1]]

    if (secondMatch && firstMatch === secondMatch) {
      setMoves(moves - 1)
      setScore(score + 2)
      setCompleted([...completed, firstMatch])
    }

    if (currentCards.length === 2)
      setTimeout(() => {
        setCurrentCards([])
        setBlock(false)
      }, 1000)

    if (moves >= maxMoves) {
      setGameOver("lose")
    }
  }, [currentCards])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`grid gap-2 w-full max-w-sm`} 
           style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}>
        {shuffledEmojis.map((emoji, index) => (
          <div
            className={`rounded aspect-square flex select-none cursor-pointer 
              items-center justify-center text-2xl shadow transition duration-300 ${
                completed.includes(emoji)
                  ? "bg-emerald-100"
                  : currentCards.includes(index)
                  ? "bg-blue-100"
                  : "bg-slate-500"
              }`}
            onClick={() =>
              !currentCards.includes(index) &&
              flipCard(index)
            }
            key={index}
          >
            {(currentCards.includes(index) ||
              completed.includes(emoji)) &&
              emoji}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-sm items-center">
        <p className="icon-text flex items-center gap-1">
          <Games fontSize="small" /> 
          Moves remaining: <span className="font-bold">{maxMoves - moves}</span>
        </p>
        <p className="icon-text flex items-center gap-1">
          <Score fontSize="small" />
          Score: <span className="font-bold">{score}/{gridSize}</span>
        </p>
        <p className="icon-text flex items-center gap-1">
          <PointOfSale fontSize="small" />
          Reward amount: <span className="font-bold">{reward}</span> {plural("token", reward)}
        </p>
        {tokens >= 1 && (
          <p className="icon-text flex items-center gap-1">
            <Token fontSize="small" />
            Tokens: <span className="font-bold">{tokens}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default MemoryGame
