import React, { useState, useEffect } from "react"

const Lakeview = () => {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentCustomer, setCurrentCustomer] =
    useState(null)
  const [selectedIngredients, setSelectedIngredients] =
    useState([])
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timerId = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
      return () => clearTimeout(timerId)
    } else {
      setGameOver(true)
    }
  }, [timeLeft, gameOver])

  const menu = [
    {
      id: 1,
      name: "Cappuccino",
      ingredients: ["Espresso", "Milk"],
    },
    {
      id: 2,
      name: "Croissant",
      ingredients: ["Flour", "Butter"],
    },
    {
      id: 3,
      name: "Salad",
      ingredients: ["Lettuce", "Tomato", "Cucumber"],
    },
    {
      id: 4,
      name: "Ice Cream",
      ingredients: ["Milk", "Sugar"],
    },
    {
      id: 5,
      name: "Cheeseburger",
      ingredients: ["Bun", "Cheese", "Beef Patty"],
    },
  ]

  const startNewOrder = () => {
    if (!currentCustomer) {
      const randomItem =
        menu[Math.floor(Math.random() * menu.length)]
      setCurrentCustomer(randomItem)
      setSelectedIngredients([])
    }
  }

  const selectIngredient = (ingredient) => {
    setSelectedIngredients((prevIngredients) => [
      ...prevIngredients,
      ingredient,
    ])
  }

  const serveFood = () => {
    if (currentCustomer && !gameOver) {
      const isOrderCorrect =
        JSON.stringify(selectedIngredients) ===
        JSON.stringify(currentCustomer.ingredients)
      if (isOrderCorrect) {
        setScore((prevScore) => prevScore + 1)
      } else {
        setScore((prevScore) => Math.max(prevScore - 1, 0))
      }
      setCurrentCustomer(null)
    }
  }

  const handleGameOver = () => {
    setGameOver(true)
  }

  return (
    <div className="w-full h-screen bg-blue-200 flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 p-4">
        <div className="bg-white px-4 py-2 rounded-lg shadow">
          <h2 className="text-gray-700 font-semibold text-lg">
            Lakeview Pavilion
          </h2>
          <div className="flex items-center mt-1">
            <span
              role="img"
              aria-label="Money Bag"
              className="text-2xl"
            >
              💰
            </span>
            <p className="text-gray-600 ml-1">
              ${"95,000.00"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-gray-700 font-semibold text-2xl mb-4">
          Lake Bistro
        </h2>
        {!gameOver ? (
          <div>
            <p className="text-gray-600 mb-2">
              Time Left: {timeLeft} seconds
            </p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded mb-2"
              onClick={startNewOrder}
            >
              New Order
            </button>
            {currentCustomer && (
              <div>
                <h3 className="text-gray-700 font-semibold text-lg mb-2">
                  Customer: {currentCustomer.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  Order:{" "}
                  {currentCustomer.ingredients.join(", ")}
                </p>
                <div className="flex flex-wrap">
                  {menu.map((item) => (
                    <button
                      key={item.id}
                      className={`${
                        selectedIngredients.includes(
                          item.name
                        )
                          ? "bg-green-500"
                          : "bg-gray-500"
                      } hover:bg-green-700 text-white font-semibold py-2 px-4 rounded m-1`}
                      onClick={() =>
                        selectIngredient(item.name)
                      }
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="absolute flex flex-col items-center">
            <h3 className="text-gray-700 font-semibold text-xl mb-2">
              Game Over!
            </h3>
            <p className="text-gray-600">
              Final Score: {score}
            </p>
          </div>
        )}
        {timeLeft <= 0 && !gameOver && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={handleGameOver}
          >
            End Game
          </button>
        )}
        {currentCustomer && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={serveFood}
          >
            Serve Food
          </button>
        )}
      </div>
    </div>
  )
}

export default Lakeview
