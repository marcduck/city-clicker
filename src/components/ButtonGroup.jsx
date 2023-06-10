import React from "react"
import { cents } from "../Clicker"
import TextButton from "./TextButton"
const ButtonGroup = ({
  clickAmount,
  handleCollect,
  buttonColors,
  autoClickerAmount,
  buyBuilding,
  buildingPrice,
  coins,
  upgradeStrength,
  clickMultiplier,
  buyUpgrade,
  upgradePrice,
}) => {
  return (
    <div className="buttons">
      <div className="text-center grid-cols-3 grid border-slate-400 border md:border-none md:gap-6">
        <TextButton
          text="Collect"
          label={`Collect ${cents(clickAmount)}`}
          func={handleCollect}
          color={buttonColors.collect}
          clickerButton
          key="Collect"
        />
        <TextButton
          text="Build"
          label={`Earn +${cents(autoClickerAmount)}/s`}
          func={buyBuilding}
          color={buttonColors.build}
          price={buildingPrice}
          coins={coins}
          key="build"
        />
        <TextButton
          text="Upgrade"
          label={`Gain +${cents(
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
