import React from "react"
import TextButton from "./TextButton"
import { shortCents } from "../utils/utils"

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
      <div className="text-center grid-cols-3 grid md:gap-6">
        <TextButton
          text="Collect"
          label={`Collect ${shortCents(clickAmount)}`}
          func={handleCollect}
          color={buttonColors.collect}
          clickerButton
          key="Collect"
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
