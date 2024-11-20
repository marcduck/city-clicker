import React, { useMemo, useState } from "react"

import { shops } from "../utils/shops"
import Tooltip from "./Tooltip"

import { getFlagEmoji } from "../utils/utils"
import Modal from "./Modal"
import ShopItems from "./ShopItems"
import Shopkeeper from "./Shopkeeper"
import { useBearStore } from "../utils/store"
import { cities } from "../Clicker"

function Shop({
  selectedCity,
}) {
  const { coins, subtractCoins, items, setItems } = useBearStore();
  let fixedIndex = Math.min(selectedCity, shops.length - 1)
  let shop = shops[fixedIndex]
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const memoizedShop = useMemo(
    () => (
      <div className="flex gap-4 justify-around">
        <div className="grid gap-4 align-middle">
          <Tooltip />
          <Modal
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            shop={shop}
          />
          <h2 className="text-xl font-semibold">
            {getFlagEmoji(cities[selectedCity].country)}{" "}
            {shop.name}
          </h2>
          {/* Shop item container */}
          <div className="shop-items flat-outline gap-2 p-2 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2">
            {/* {console.log(shop.items)} */}
            <ShopItems
              array={shop.items}
            />
          </div>
        </div>
        <Shopkeeper shop={shop} openModal={openModal} />
      </div>
    ),
    [selectedCity, isModalOpen]
  )

  return memoizedShop
}

export default Shop
