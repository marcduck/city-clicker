import React, { useMemo } from "react"
import { shops } from "../utils/shops"
import {
  canAfford,
  capitalizeFirstLetter,
  cents,
  getPropertyIncome,
} from "../utils/utils"
import { Sell, MonetizationOn } from "@mui/icons-material"
import { useEffect } from "react"
import ScrollContainer from "react-indiana-drag-scroll"
import { useBearStore } from "../utils/store"

function Properties({
  selectedCity,
}) {
  const { coins, subtractCoins, ownedProperties, setOwnedProperties } = useBearStore();

  function buyProperty(
    property,
    coins,
    subtractCoins,
    setOwnedProperties,
    ownedProperties
  ) {
    if (!canAfford(coins, property.price)) {
      return
    }

    if (isPropertyOwned(property)) {
      return
    }
    subtractCoins(property.price)
    const deed = {
      [property.name]: property.price,
    }
    setOwnedProperties({ ...ownedProperties, ...deed })
  }


  function isPropertyOwned(property) {
    if (ownedProperties[property.name]) {
      return true
    }
    return false
  }

  return (
    <div>
      <div className="shop-items gap-2 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2">
        {shops[selectedCity].buildings.map((property) => {
          return (
            <div
              className="flex flex-col gap-2"
              key={property.name}
            >
              <div className="flex gap-2 items-center bg-gray-200 p-2">
                <div>{property.emoji}</div>
                <div>{property.name}</div>
                {!isPropertyOwned(property) && (
                  <button
                    onClick={() =>
                      buyProperty(
                        property,
                        coins,
                        subtractCoins,
                        setOwnedProperties,
                        ownedProperties
                      )
                    }
                    className={`ml-auto text-xs flex items-center gap-1 p-1
                  ${
                    canAfford(coins, property.price)
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }
                  `}
                  >
                    <Sell fontSize="1rem" />
                    {cents(property.price)}
                  </button>
                )}

                {isPropertyOwned(property) && (
                  <button
                    disabled
                    className={`ml-auto text-xs flex items-center gap-1 p-1 bg-slate-300 text-green-600
                  `}
                  >
                    <MonetizationOn
                      fontSize="1rem"
                      className="animate-spin"
                      style={{
                        animation:
                          "slow-spin 2s linear infinite",
                        animationName: "spin",
                      }}
                    />
                    {`+${cents(
                      getPropertyIncome(property.price)
                    )}/s`}
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-700 min-h-[6rem]">
                {property.description}
              </p>
              <ScrollContainer className="tags flex gap-2 select-none">
                {property.tags.map((tag) => (
                  <div
                    key={tag}
                    className="text-xs text-slate-100 bg-sky-800 py-1 px-3 rounded-lg min-w-max"
                  >
                    {`${capitalizeFirstLetter(tag)}`}
                  </div>
                ))}
              </ScrollContainer>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Properties
