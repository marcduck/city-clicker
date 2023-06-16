import {
  Games,
  PointOfSale,
  Score,
  Token,
} from "@mui/icons-material"
import React, { useState, useEffect, useMemo } from "react"
import { plural } from "../../utils/utils"

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

function MemoryGame({ tokens, setTokens, ownedSouvenirs }) {
  const [gridRows, setGridRows] = useState(4) // Number of rows
  const [gridCols, setGridCols] = useState(4) // Number of columns
  const [reward, setReward] = useState(
    getRewards(ownedSouvenirs)
  )

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
      setTokens(tokens + 1)
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
    <div>
      <div className="grid-cols-4 grid gap-2 max-w-sm mx-auto justify-center">
        {shuffledEmojis.map((emoji, index) => (
          <div
            className={` rounded aspect-square flex select-none cursor-pointer 
              items-center justify-center text-2xl shadow transition duration-300  ${
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
      <div className="flex flex-col md:flex-row md:gap-6 text-sm justify-center mt-4 ">
        <p className="icon-text gap-1">
          <Games fontSize="1rem" /> Moves remaining:{" "}
          <span className="font-bold">
            {maxMoves - moves}
          </span>
        </p>
        <p className="icon-text">
          <Score fontSize="1rem" />
          Score:{" "}
          <span className="font-bold">
            {score}/{gridSize}
          </span>
        </p>
        <p className="icon-text">
          <PointOfSale fontSize="1rem" />
          Reward amount:{" "}
          <span>
            <span className="font-bold">{reward}</span>{" "}
            {plural("token", reward)}
          </span>
        </p>
        {tokens && (
          <p className="icon-text transition">
            <Token fontSize="1rem" />
            Tokens:{" "}
            <span className="font-bold">{tokens}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default MemoryGame
