import React, { useEffect, useState } from "react"
import { cents } from "../Clicker"
import { AttachMoney, Sell } from "@mui/icons-material"

function Inventory({ items }) {
  const [itemSum, setItemSum] = useState(0)
  const [hoveredItemId, setHoveredItemId] = useState(null)

  function getItemSum(items) {
    return items.reduce((sum, item) => {
      return sum + item.price
    }, 0)
  }

  useEffect(() => {
    setItemSum(getItemSum(items))
  }, [items])

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="border p-4 max-h-80 overflow-y-auto bg-slate-50">
        <div
          className=" flex flex-wrap justify-center
         gap-4"
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div
                  id="inventory-item"
                  className=" flex items-center justify-center w-10 h-10 p-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-100"
                >
                  <div className="text-sm">
                    {item.emoji}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Sell className="text-slate-700" fontSize="" />
        <p>
          Total value:{" "}
          <span className="font-bold">
            {cents(itemSum)}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Inventory
