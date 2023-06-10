import React, { useState } from "react"
import { cents } from "../Clicker"

function Inventory({ items }) {
  const [hoveredItemId, setHoveredItemId] = useState(null)
  return (
    <div>
      <h1 className="text-2xl font-bold">Inventory</h1>
      <div className="border p-2 max-h-80 overflow-y-auto">
        <div
          className=" flex flex-wrap
        justify-evenly gap-4"
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div
                  id="inventory-item"
                  className="relative flex items-center justify-center w-14 h-14 p-1 border border-gray-300 rounded-lg bg-slate-50 hover:bg-gray-100"
                  onMouseEnter={() =>
                    setHoveredItemId(index)
                  }
                  onMouseLeave={() =>
                    setHoveredItemId(null)
                  }
                  title={`${item.description} (${cents(
                    item.price
                  )})`}
                >
                  <div className="text-sm">
                    {item.emoji}
                  </div>
                </div>
                <div
                  className={`text-xxs mt-1 ${
                    hoveredItemId === index
                      ? "block"
                      : "hidden"
                  } pointer-events-none absolute bg-white py-1 px-2 rounded-md shadow`}
                >
                  {item.name}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Inventory
