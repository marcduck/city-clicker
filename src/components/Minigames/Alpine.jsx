import React, { useState, useEffect } from "react"
import { Circle, Money } from "@mui/icons-material"

const Alpine = () => {
  const [score, setScore] = useState(0)
  const [coins, setCoins] = useState([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        const newCoin = {
          id: Date.now(),
          left: Math.random() * 100,
          top: -50,
        }
        setCoins((prevCoins) => [...prevCoins, newCoin])
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [gameOver])

  const handleCoinClick = (coinId) => {
    if (!gameOver) {
      setScore((prevScore) => prevScore + 1)
      setCoins((prevCoins) =>
        prevCoins.filter((coin) => coin.id !== coinId)
      )
    }
  }

  const handleGameOver = () => {
    setGameOver(true)
  }

  return (
    <div className="relative w-full h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 p-4">
        <div className="bg-white px-4 py-2 rounded-lg shadow">
          <h2 className="text-gray-700 font-semibold text-lg">
            Alpine Emporium
          </h2>
          <div className="flex items-center mt-1">
            <Circle className="text-gray-600" />
            <p className="text-gray-600 ml-1">
              ${"85,000.00"}
            </p>
          </div>
        </div>
      </div>
      {coins.map((coin) => (
        <Money
          key={coin.id}
          className="absolute text-yellow-400 text-3xl"
          style={{
            left: `${coin.left}%`,
            top: `${coin.top}px`,
          }}
          onClick={() => handleCoinClick(coin.id)}
        />
      ))}
      {gameOver && (
        <div className="absolute flex flex-col items-center">
          <h3 className="text-gray-700 font-semibold text-xl mb-2">
            Game Over!
          </h3>
          <p className="text-gray-600">
            Final Score: {score}
          </p>
        </div>
      )}
      <div className="flex flex-col items-center">
        <h2 className="text-gray-700 font-semibold text-2xl mb-4">
          Collect the Coins!
        </h2>
        <p className="text-gray-600 mb-2">Score: {score}</p>
        {!gameOver && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            onClick={handleGameOver}
          >
            End Game
          </button>
        )}
      </div>
    </div>
  )
}

export default Alpine
