import React, { useMemo } from "react"
import Inventory from "./Inventory"
import {
  AdsClick,
  Category,
  Gite,
  Hardware,
  MonetizationOn,
  Money,
  Payment,
  PriceChange,
  Upgrade,
} from "@mui/icons-material"
import { plural, cents, round1 } from "../utils/utils"

const Stats = ({
  coins,
  clickAmount,
  items,
  upgradeCount,
  upgradeStrength,
  clickMultiplier,
  coinsPerSec,
  buildingCount,
  cityLevel,
  cities,
  selectedCity,
  setSelectedCity,
}) => {
  return (
    <div className="p-6 bg-slate-100">
      <div className="grid grid-cols-1 gap-2">
        <div className="font-semibold icon-text text-2xl">
          <Payment />
          <span>{cents(coins)}</span>
        </div>
        <div className="icon-text">
          <AdsClick />
          Clicking power: {cents(clickAmount)}{" "}
          {items.length < 1 ? null : (
            <span className="text-xs">
              ($1 base + (
              {cents(upgradeCount * upgradeStrength)}
              /click from upgrades x
              {round1(clickMultiplier)} from items))
            </span>
          )}
        </div>
        <div className="icon-text">
          <PriceChange />
          Income: {cents(coinsPerSec)}/s
        </div>
        <div className="icon-text">
          <Gite /> {buildingCount}{" "}
          {plural("building", buildingCount)}
        </div>
        <div className="icon-text">
          <Hardware />
          {upgradeCount} {plural("upgrade", upgradeCount)}
        </div>
        <div className="icon-text">
          <Category />
          {items?.length} {plural("item", items?.length)}
        </div>
      </div>
    </div>
  )
}

export default Stats
