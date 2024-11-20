import React from "react"
import {
  canAfford,
  cents,
  isAffordableDiv,
  isAffordableText,
} from "../utils/utils"
import { useBearStore } from "../utils/store"

export default function ShopItems({
  array,
}) {
  const { coins, items, subtractCoins, setItems } = useBearStore()
  function buyItem(coins, item, items, subtractCoins, setItems) {
    if (!canAfford(coins, item.price)) {
      return
    }
    subtractCoins(item.price)
    setItems(items.concat(item))
  }

  return array.map((item) => {
    return (
      // Individual shop items, click to buy
      // <Tooltip content={<TooltipContent item={item} />} key={item.name}>
      <div
        key={item.name}
        className={`
          select-none 
          flex-row sm:flex-col  
          items-center justify-between flex text-center
          gap-0.5 sm:gap-1 p-1 
          ${isAffordableDiv(item.price, coins)}`}
        title={item.description}
        onClick={() =>
          buyItem(coins, item, items, subtractCoins, setItems)
        }
      >
        <div
          className={`order-first md:order-none ${
            !canAfford(coins, item.price) && "grayscale"
          }`}
        >
          {item.emoji}
        </div>
        <div
          className={`font-semibold flex-grow-0 text-xxs sm:text-xs ${isAffordableText(
            item.price,
            coins
          )}`}
        >
          {item.name}
        </div>
        <div
          className={`text-xxs font-mono ${isAffordableText(
            item.price,
            coins
          )}`}
        >
          {cents(item.price)}
        </div>
      </div>
      // </Tooltip>
    )
  })
}
