import React from "react"
import { useEffect, Fragment } from "react"
import { Tab } from "@headlessui/react"
import {
  getFlagEmoji,
  getNextArrayItem,
} from "../utils/utils"
import { useBearStore } from "../utils/store"
import { cities } from "../Clicker"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function getTab(label, disabled, title = null, cityName) {
  return (
    <Tab
      className={({ selected }) =>
        classNames(
          "w-full py-1.5 md:py-2.5 text-xs md:text-sm font-semibold text-slate-900",
          selected
            ? "bg-white flat-outline shadow outline-none"
            : "text-slate-600 border  border-slate-100 disabled:text-slate-400"
        )
      }
      key={cityName}
      disabled={disabled}
      title={title}
    >
      {label}
    </Tab>
  )
}

function Graphic({
  selectedCity,
  setSelectedCity,
}) {
  const { cityLevel, buildingCount } = useBearStore();
  function handleTabChange(index) {
    setSelectedCity(index)
  }

  function getGraphicSubtitle(i) {
    if (
      getNextArrayItem(cities, i).buildingsRequired -
        buildingCount <=
      0
    ) {
      return (
        <>
          <span className="font-medium"></span>
        </>
      )
    }
    return (
      <>
        <span className="font-medium">
          {getNextArrayItem(cities, i).buildingsRequired -
            buildingCount}
        </span>{" "}
        additional buildings required to unlock the next
        city
      </>
    )
  }

  return (
    <div className="">
      <Tab.Group onChange={(i) => handleTabChange(i)}>
        <Tab.List className="border-b border-slate-400 select-none flex space-x-1 px-6 py-2 bg-slate-100">
          {cities.map((c, i) => {
            let nextBuildingsRequired =
              i - 1 >= 0 ? cities[i].buildingsRequired : 0
            let titleStr = `${nextBuildingsRequired} buildings required`
            // Display the cities that are cityLevel or lower
            if (i <= cityLevel) {
              return getTab(
                <div>
                  {c.name} {getFlagEmoji(c.country)}
                </div>,
                false,
                null,
                c.name
              )
            }
            // Show ??? for the city one level ahead
            if (i == cityLevel + 1) {
              return getTab(c.name, true, titleStr, c.name)
            } else {
              return getTab("???", true, null, c.name)
            }
          })}
        </Tab.List>
        <Tab.Panels>
          {cities.map((c, i) => {
            return (
              <Tab.Panel key={c.name}>
                <div className="plain-box">
                  <img
                    className="h-44 sm:h-52 md:h-60 object-cover shadow-sm flat-outline"
                    src={`assets/img/clicker/${c.img}.jpg`}
                    alt={c.name}
                  />
                  <div className="flex justify-between items-center -mb-3">
                    <div className="text-sm">
                      {getGraphicSubtitle(i)}
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Graphic
