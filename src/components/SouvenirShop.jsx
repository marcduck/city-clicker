import React, { useEffect, useState } from "react"
import { shops } from "../utils/shops"
import { ShoppingCart } from "@mui/icons-material"
import { useBearStore } from "../utils/store";

function SouvenirShop({
  selectedCity,
}) {

  const { tokens, subtractTokens, ownedSouvenirs, setOwnedSouvenirs } = useBearStore();

  function buySouvenir(souvenir) {
    if (tokens < souvenir.price) {
      return
    }

    if (ownedSouvenirs[souvenir.name]) {
      return
    }

    subtractTokens(souvenir.price)
    setOwnedSouvenirs({
      ...ownedSouvenirs,
      [souvenir.name]: souvenir,
    })
  }

  useEffect(() => {
    localStorage.setItem(
      "ownedSouvenirs",
      JSON.stringify(ownedSouvenirs)
    )
  }, [ownedSouvenirs])

  return (
    <div className="grid-cols-1 sm:grid-cols-2 grid gap-3 bg-red-800/20 p-6">
      {shops[selectedCity].souvenirs?.map(
        (souvenir, index) => {
          return (
            <div
              key={index}
              className={`select-none bg-slate-200 p-4 shadow-md h-min 
          flex flex-col gap-2
          shadow-slate-800/30 hover:shadow-sm transition-shadow`}
            >
              <h5 className="font-bold text-md flex gap-2 font-mono">
                <div>{souvenir.emoji}</div>
                {souvenir.name}
              </h5>
              <p className="text-xs text-justify">
                {souvenir.description}
              </p>
              <div className="bottom flex items-center gap-3">
                <button
                  onClick={() => buySouvenir(souvenir)}
                  disabled={
                    tokens < souvenir.price ||
                    ownedSouvenirs[souvenir.name]
                  }
                  className={`
                ${
                  ownedSouvenirs[souvenir.name]
                    ? "bg-slate-500 text-gray-100"
                    : tokens < souvenir.price
                    ? "bg-gray-400 text-gray-100"
                    : "bg-blue-900 hover:bg-blue-900/90 text-slate-50 "
                }
                souvenir-button`}
                >
                  {ownedSouvenirs[souvenir.name] ? (
                    <div className="flex-center">
                      <div className="font-mono">Owned</div>
                    </div>
                  ) : (
                    <div className="flex-center">
                      <ShoppingCart fontSize={"1rem"} />
                      <span className="font-bold">
                        {souvenir.price}
                      </span>
                      <span> tokens</span>
                    </div>
                  )}
                </button>
                {/* <div className="tags text-xs">
                  <span>{souvenir.type}</span>
                  <span></span>
                </div> */}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default SouvenirShop
