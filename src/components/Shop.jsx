import React, { useState } from "react"

import { shops } from "../utils/shops"
import Tooltip from "./Tooltip"

import { getFlagEmoji, cents, canAfford } from "../Clicker"
import Modal from "./Modal"

export function listShopItems(
  array,
  coins,
  items,
  setCoins,
  setItems
) {
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
                        ${isAffordableDiv(
                          item.price,
                          coins
                        )}`}
        title={item.description}
        onClick={() =>
          buyItem(coins, item, items, setCoins, setItems)
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

function isAffordableText(price, coins) {
  return canAfford(coins, price)
    ? "text-emerald-800"
    : "text-slate-400"
}

function isAffordableDiv(price, coins) {
  return canAfford(coins, price)
    ? "bg-slate-200 border border-emerald-700 hover:cursor-pointer hover:bg-emerald-700/[.20]" // Can afford
    : "bg-neutral-300 border border-neutral-400" // Can't afford
}

function TooltipContent({ item }) {
  return <div className="text-xs">{item.description}</div>
}

function buyItem(coins, item, items, setCoins, setItems) {
  if (!canAfford(coins, item.price)) {
    return
  }
  setCoins((coins) => coins - item.price)
  setItems(items.concat(item))
}

function Shop({
  selectedCity,
  coins,
  setCoins,
  cities,
  items,
  setItems,
}) {
  let fixedIndex = Math.min(selectedCity, shops.length - 1)
  let shop = shops[fixedIndex]
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  function ShopImage() {
    return (
      shop.shopkeeper.img && (
        <img
          onClick={openModal}
          className={`w-40 h-40 rounded-xl object-cover object-top shadow-md hover:shadow-lg cursor-pointer`}
          src={`./assets/img/clicker/shop/${shop.shopkeeper.img}.png`}
          alt={shop.shopkeeper.name}
        />
      )
    )
  }

  function Dialogue({ shopkeeper }) {
    return (
      <div className="">
        Dialogue with {shopkeeper.name}
      </div>
    )
  }

  function ModalContent() {
    // Shopkeeper dialogue window
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-8 py-6 md:py-16">
        <div className="flex flex-col items-center gap-3">
          <ShopImage />
          <div className="flex gap-2 items-center">
            <div className="font-bold">
              {shop.shopkeeper.name}
            </div>
            <div className="text-xs ">
              ({shop.shopkeeper.age})
            </div>
          </div>
          <div className="text-sm text-justify max-w-sm">
            {shop.shopkeeper.description ||
              shop.shopkeeper.personalDescription}
          </div>
        </div>
        <div className="flat-outline  order-second md:order-first">
          <Dialogue shopkeeper={shop.shopkeeper} />
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-4 justify-around">
      <div className="grid gap-4 align-middle">
        <Tooltip />

        <h2 className="text-xl font-semibold">
          {getFlagEmoji(cities[selectedCity].country)}{" "}
          {shop.name}
        </h2>
        {/* Shop item container */}
        <div className="shop-items flat-outline gap-2 p-2 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2">
          {/* {console.log(shop.items)} */}
          {listShopItems(
            shop.items,
            coins,
            items,
            setCoins,
            setItems
          )}
        </div>
      </div>
      <div className="shopkeeper text-center flex flex-col justify-center gap-2">
        {/* <div className="info flat-outline">
                    <div className="text-xs font-semibold">{shop.shopkeeper.name}</div>
                </div> */}
        <ShopImage />
        <div className="tracking-widest text-xxs sm:text-xs -mb-2">
          Shopkeeper
        </div>
        <div className="font-bold text-xs sm:text-sm">
          {shop.shopkeeper.name}
        </div>
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalContent={<ModalContent />}
        />
      </div>
    </div>
  )
}

export default Shop
