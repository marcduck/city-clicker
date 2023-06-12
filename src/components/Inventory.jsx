import React, { useEffect, useState } from "react"
import { AttachMoney, Sell } from "@mui/icons-material"
import Tooltip from "./Tooltip"
import { cents, getItemSum } from "../utils/utils"
function Inventory({ items }) {
  const [itemSum, setItemSum] = useState(0)
  const [hoveredItemId, setHoveredItemId] = useState(null)

  useEffect(() => {
    setItemSum(getItemSum(items))
  }, [items])

  let hoveredItem = items[hoveredItemId] || null

  return (
    <div className="flex flex-col gap-4">
      <div className="border p-4 max-h-80 overflow-y-scroll overflow-x-clip bg-slate-50">
        <div
          className=" flex flex-wrap justify-center
         gap-4"
        >
          {items.map((item, index) => {
            return (
              <div
                onMouseEnter={() => setHoveredItemId(index)}
                // onMouseLeave={() => setHoveredItemId(null)}
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
      <div className="bottom grid grid-cols-5 items-end gap-4">
        <div className="flex gap-2 items-center col-span-2">
          <Sell className="text-slate-700" fontSize="" />
          <p>
            Total value:{" "}
            <span className="font-bold">
              {cents(itemSum)}
            </span>
          </p>
        </div>
        <div className="flex col-span-3">
          {hoveredItem && (
            <div className="flex flex-col gap-1 item-desc text-xs">
              <span className="flex gap-2 font-bold">
                <span>{hoveredItem.emoji}</span>
                {hoveredItem.name}
              </span>
              <span className="min-h-[2rem] text-xxs">
                {hoveredItem.description}
              </span>
              <span className="">
                {cents(hoveredItem.price)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Inventory
