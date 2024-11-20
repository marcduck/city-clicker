import React from "react"
import TextButton from "./TextButton"
import { shortCents } from "../utils/utils"
import { useBearStore } from "../utils/store"

const ButtonGroup = () => {
  const { coins, clickAmount, handleCollect, autoClickerAmount, buyBuilding, buildingPrice, upgradeStrength, clickMultiplier, buyUpgrade, upgradePrice } = useBearStore()

  const buttonColors = {
    collect: "bg-emerald-700 border-emerald-800",
    build: "bg-blue-700 border-blue-800",
    upgrade: "bg-purple-800 border-purple-900",
  };

  return (
    <div className="buttons">
      <div className="text-center grid-cols-3 grid md:gap-6">
        <TextButton
          text="Collect"
          label={`Collect ${shortCents(clickAmount)}`}
          func={handleCollect}
          color={buttonColors.collect}
          clickerButton
          key="Collect"
          coins={coins}
        />
        <TextButton
          text="Build"
          label={`Earn +${shortCents(autoClickerAmount)}/s`}
          func={buyBuilding}
          color={buttonColors.build}
          price={buildingPrice}
          coins={coins}
          key="build"
        />
        <TextButton
          text="Upgrade"
          label={`Gain +${shortCents(
            upgradeStrength * clickMultiplier
          )}/click`}
          func={buyUpgrade}
          color={buttonColors.upgrade}
          price={upgradePrice}
          coins={coins}
          key="upgrade"
        />
      </div>
    </div>
  )
}

export default ButtonGroup
