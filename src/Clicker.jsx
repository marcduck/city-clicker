import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
} from "react"
import "flowbite"
import { gsap } from "gsap"

// Components
import Graphic from "./components/Graphic"
import ShopWindow from "./components/ShopWindow"
import SouvenirShop from "./components/SouvenirShop"
import Toast from "./components/Toast"
import ButtonGroup from "./components/ButtonGroup"
import Stats from "./components/Stats"
import { HolidayVillage } from "@mui/icons-material"
import Inventory from "./components/Inventory"
import Properties from "./components/Properties"

import {
  initializeObjectFromStorage,
  initializeFromStorage,
  getPropertyIncome,
  canAfford,
} from "./utils/utils"
import {
  DragDropContext,
  Draggable,
  Droppable,
} from "react-beautiful-dnd"
import Window from "./components/Window"
import GameComponent from "./components/Minigames/Alpine"
import Alpine from "./components/Minigames/Alpine"
import Lakeview from "./components/Minigames/Lakeview"
import MemoryGame from "./components/Minigames/MemoryGame"

// Game  variables
const M = 1.15
const clickPriceMultiplier = 0.00004

export let baseCosts = {
  upgrade: 8,
  building: 35,
}

let cities = [
  {
    name: "Lucerne",
    img: "city-swiss",
    buildingsRequired: 0,
    country: "CH",
  },
  {
    name: "Columbus",
    img: "city-ohio",
    buildingsRequired: 15,
    country: "US",
  },
  {
    name: "Bonn",
    img: "city-bonn",
    buildingsRequired: 50,
    country: "DE",
  },
  {
    name: "Suzhou",
    img: "city-suzhou",
    buildingsRequired: 75,
    country: "CN",
  },
  {
    name: "Lima",
    img: "city-lima",
    buildingsRequired: 110,
    country: "PE",
  },
  {
    name: "Flores",
    img: "city-flores",
    buildingsRequired: 200,
    country: "GT",
  },
]

function Clicker() {
  function buyBuilding() {
    if (!canAfford(coins, buildingPrice)) {
      return
    }

    setCoins((coins) => coins - buildingPrice)
    setBuildingCount((buildingCount) => buildingCount + 1)
  }

  function buyUpgrade() {
    if (!canAfford(coins, upgradePrice)) {
      return
    }

    setCoins((coins) => coins - upgradePrice)
    setUpgradeCount((upgradeCount) => upgradeCount + 1)
  }

  // Game variables

  const [elapsedTime, setElapsedTime] =
    initializeFromStorage("elapsedTime", 0)
  const [coins, setCoins] = initializeFromStorage(
    "coins",
    0
  )
  const [tokens, setTokens] = initializeFromStorage(
    "tokens",
    0
  )
  const [coinsPerSec, setCoinsPerSec] =
    initializeFromStorage("coinsPerSec", 0)
  const [clickAmount, setClickAmount] =
    initializeFromStorage("clickAmount", 1)
  const [upgradeStrength, setUpgradeStrength] =
    initializeFromStorage("upgradeStrength", 0.5)
  const [autoClickerAmount, setAutoClickerAmount] =
    initializeFromStorage("autoClickerAmount", 1.5)
  const [upgradeCount, setUpgradeCount] =
    initializeFromStorage("upgradeCount", 0)
  const [upgradePrice, setUpgradePrice] =
    initializeFromStorage("upgradePrice", baseCosts.upgrade)
  const [buildingCount, setBuildingCount] =
    initializeFromStorage("buildingCount", 0)
  const [buildingPrice, setBuildingPrice] =
    initializeFromStorage(
      "buildingPrice",
      baseCosts.building
    )
  const [cityLevel, setCityLevel] = initializeFromStorage(
    "cityLevel",
    0
  )
  const [shopStatus, setShopStatus] = initializeFromStorage(
    "shopStatus",
    1
  )
  const [selectedCity, setSelectedCity] = useState(0)
  const [items, setItems] = initializeObjectFromStorage(
    "items",
    []
  )
  const [clickMultiplier, setClickMultiplier] =
    initializeFromStorage("clickMultiplier", 1)
  const [ownedProperties, setOwnedProperties] =
    initializeObjectFromStorage("ownedProperties", {})
  const [ownedSouvenirs, setOwnedSouvenirs] =
    initializeObjectFromStorage("ownedSouvenirs", {})

  useMemo(() => {
    const totalPrice = items
      .map((item) => item.price)
      .reduce((a, b) => a + b, 0)
    const newMultiplier =
      1 + totalPrice * clickPriceMultiplier
    setClickMultiplier(newMultiplier)
  }, [items])

  // Animate toast
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  function getAdjustedPrice(baseCost, count) {
    return baseCost * Math.pow(M, count)
  }

  // Calculated values

  // Coins per Sec / buildings
  useMemo(() => {
    const propertyTotalValue = Object.values(
      ownedProperties
    ).reduce((a, b) => a + b, 0)
    const propertyIncome = getPropertyIncome(
      propertyTotalValue
    )
    setCoinsPerSec(
      autoClickerAmount * buildingCount + propertyIncome
    )
    setBuildingPrice(
      getAdjustedPrice(baseCosts.building, buildingCount)
    )
  }, [autoClickerAmount, buildingCount, ownedProperties])

  // Click amount / upgrades
  useMemo(() => {
    setClickAmount(
      1 + upgradeCount * upgradeStrength * clickMultiplier
    )
    setUpgradePrice(
      getAdjustedPrice(baseCosts.upgrade, upgradeCount)
    )
  }, [
    upgradeCount,
    upgradeStrength,
    clickMultiplier,
    items,
  ])

  // City level / city unlock
  useMemo(() => {
    let nextCityBuildingsRequired =
      cities[Math.min(cityLevel + 1, cities.length)]
        .buildingsRequired
    if (
      cityLevel + 1 < cities.length &&
      nextCityBuildingsRequired === buildingCount
    ) {
      setToastMessage(
        `New city unlocked: ${cities[cityLevel + 1].name}!`
      )
      setShowToast(true)
      setCityLevel((cityLevel) => cityLevel + 1)
    }
  }, [buildingCount])

  // Localstorage saving

  useMemo(() => {
    localStorage.setItem("elapsedTime", elapsedTime)
  }, [elapsedTime])
  useMemo(() => {
    localStorage.setItem("coins", coins)
  }, [coins])
  useMemo(() => {
    localStorage.setItem("tokens", tokens)
  }, [tokens])
  useMemo(() => {
    localStorage.setItem("coinsPerSec", coinsPerSec)
  }, [coinsPerSec])
  useMemo(() => {
    localStorage.setItem("clickAmount", clickAmount)
  }, [clickAmount])
  useMemo(() => {
    localStorage.setItem("upgradeStrength", upgradeStrength)
  }, [upgradeStrength])
  useMemo(() => {
    localStorage.setItem(
      "autoClickerAmount",
      autoClickerAmount
    )
  }, [autoClickerAmount])
  useMemo(() => {
    localStorage.setItem("upgradeCount", upgradeCount)
  }, [upgradeCount])
  useMemo(() => {
    localStorage.setItem("upgradePrice", upgradePrice)
  }, [upgradePrice])
  useMemo(() => {
    localStorage.setItem("buildingCount", buildingCount)
  }, [buildingCount])
  useMemo(() => {
    localStorage.setItem("buildingPrice", buildingPrice)
  }, [buildingPrice])
  useMemo(() => {
    localStorage.setItem("cityLevel", cityLevel)
  }, [cityLevel])
  useMemo(() => {
    localStorage.setItem("shopStatus", shopStatus)
  }, [shopStatus])
  useMemo(() => {
    localStorage.setItem("clickMultiplier", clickMultiplier)
  }, [clickMultiplier])
  useMemo(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  // --
  // Game loop
  // --

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(coins)

      setCoins((coins) => coins + coinsPerSec)
      setElapsedTime((elapsedTime) => elapsedTime + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [elapsedTime])

  // Event handlers
  function handleCollect() {
    setCoins(coins + clickAmount)
  }

  const buttonColors = {
    collect: "bg-emerald-700 border-emerald-800",
    build: "bg-blue-700 border-blue-800",
    upgrade: "bg-purple-800 border-purple-900",
  }

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return
    const updatedList = [...itemList]
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(
      droppedItem.source.index,
      1
    )
    // Add dropped item
    updatedList.splice(
      droppedItem.destination.index,
      0,
      reorderedItem
    )
    // Update State
    setItemList(updatedList)
  }

  const dashboardComponents = [
    {
      name: "Cities",
      noPadding: true,
      component: (
        <Graphic
          cityLevel={cityLevel}
          highestCity={cities[cityLevel]}
          buildingCount={buildingCount}
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      ),
    },
    {
      name: "Stats",
      component: (
        <Stats
          coins={coins}
          clickAmount={clickAmount}
          items={items}
          cities={cities}
          upgradeCount={upgradeCount}
          upgradeStrength={upgradeStrength}
          clickMultiplier={clickMultiplier}
          coinsPerSec={coinsPerSec}
          buildingCount={buildingCount}
        />
      ),
    },
    {
      name: "Buttons",
      hideTitle: true,
      noPadding: true,
      component: (
        <ButtonGroup
          clickAmount={clickAmount}
          handleCollect={handleCollect}
          buttonColors={buttonColors}
          autoClickerAmount={autoClickerAmount}
          buyBuilding={buyBuilding}
          buildingPrice={buildingPrice}
          coins={coins}
          upgradeStrength={upgradeStrength}
          clickMultiplier={clickMultiplier}
          buyUpgrade={buyUpgrade}
          upgradePrice={upgradePrice}
        />
      ),
    },
    {
      name: "Shop",
      component: (
        <div className="shop">
          <ShopWindow
            coins={coins}
            setCoins={setCoins}
            selectedCity={selectedCity}
            cities={cities}
            items={items}
            setItems={setItems}
            shopStatus={shopStatus}
            setShopStatus={setShopStatus}
          />
        </div>
      ),
    },
    {
      name: "Properties",
      component: (
        <Properties
          coins={coins}
          setCoins={setCoins}
          selectedCity={selectedCity}
          ownedProperties={ownedProperties}
          setOwnedProperties={setOwnedProperties}
        />
      ),
    },
    {
      name: "Souvenir Shop",
      noPadding: true,
      component: (
        <SouvenirShop
          setOwnedSouvenirs={setOwnedSouvenirs}
          ownedSouvenirs={ownedSouvenirs}
          selectedCity={selectedCity}
          tokens={tokens}
          setTokens={setTokens}
        />
      ),
    },
    // {
    //   name: "Alpine",
    //   noPadding: true,
    //   component: <Alpine />,
    // },
    // {
    //   name: "Lakeview",
    //   noPadding: true,
    //   component: <Lakeview />,
    // },
    {
      name: "Memory Game",
      component: (
        <MemoryGame
          tokens={tokens}
          setTokens={setTokens}
          ownedSouvenirs={ownedSouvenirs}
        />
      ),
    },
    {
      name: "Inventory",
      component: <Inventory items={items} />,
    },
  ]

  const [itemList, setItemList] = useState(
    dashboardComponents.map((component) => component.name)
  )

  return (
    <section className=" bg-slate-200 flex-grow">
      <h1 className="flex gap-2 items-center text-4xl font-bold mb-4">
        <HolidayVillage
          fontSize="auto"
          className="text-slate-700"
        />
        <span className="text-slate-800">City Clicker</span>
      </h1>
      <Toast
        setShowToast={setShowToast}
        showToast={showToast}
        toastMessage={toastMessage}
      />
      <div>
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="list-container">
            {(provided) => (
              <div
                className="columns-1 lg:columns-2 interface"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {itemList.map((itemName, index) => {
                  const component =
                    dashboardComponents.find(
                      (component) =>
                        component.name === itemName
                    )
                  return (
                    <Draggable
                      key={itemName}
                      draggableId={itemName}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-container"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <Window
                            title={itemName}
                            hideTitle={component.hideTitle}
                            noPadding={component.noPadding}
                            provided={provided}
                          >
                            {component.component}
                          </Window>
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* Toast message - New city notification */}
      </div>

      <div className="bottom gap-4 flex">
        {/* <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => window.localStorage.clear()}>Clear save</button> */}
        {/* <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => setCoins(coins + 1_000_000)}>Add money</button> */}
        {/* <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => {setShowToast(true), setToastMessage(`New city unlocked: ${cities[cityLevel].name}!`)}}>Show toast</button> */}
        {/* <TagToPrompt /> */}
      </div>
    </section>
  )
}

export default Clicker
