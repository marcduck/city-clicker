import React from "react"
import { shops } from "../utils/shops"
import { ShoppingCart } from "@mui/icons-material"

function SouvenirShop({
  selectedCity,
  ownedSouvenirs,
  setOwnedSouvenirs,
}) {
  function buySouvenir(souvenir) {
    setOwnedSouvenirs({
      ...ownedSouvenirs,
      [souvenir.name]: souvenir,
    })
  }

  return (
    <div className="grid-cols-2 grid gap-3 bg-red-800/20 p-6">
      {shops[selectedCity].souvenirs.map((souvenir) => (
        <div
          key={souvenir.name}
          className={`select-none bg-slate-200 p-2 shadow-md h-min 
          flex flex-col gap-2
          shadow-slate-800/30 hover:shadow-sm transition-shadow`}
        >
          <h5 className="font-bold text-md flex gap-2 font-mono">
            <div>{souvenir.emoji}</div>
            {souvenir.name || souvenir.productName}
          </h5>
          <p className="text-xs text-justify">
            {souvenir.description}
          </p>
          <div className="bottom">
            <button
              onClick={() => buySouvenir(souvenir)}
              className="w-min text-slate-50 bg-blue-900 hover:bg-blue-900/70 py-0.5 px-3 flex items-center gap-1 justify-center"
            >
              <ShoppingCart fontSize={"1rem"} />

              <span className="font-bold">
                {souvenir.price}
              </span>
              <span> tokens</span>
            </button>
            <div className="tags">{souvenir.type}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SouvenirShop
