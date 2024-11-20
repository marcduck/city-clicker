import React, { useEffect, useState, useRef, useMemo } from "react";
import "flowbite";
import { gsap } from "gsap";

// Components
import Graphic from "./components/Graphic";
import ShopWindow from "./components/ShopWindow";
import SouvenirShop from "./components/SouvenirShop";
import Toast from "./components/Toast";
import ButtonGroup from "./components/ButtonGroup";
import Stats from "./components/Stats";
import { HolidayVillage } from "@mui/icons-material";
import Inventory from "./components/Inventory";
import Properties from "./components/Properties";

import {
  initializeObjectFromStorage,
  initializeFromStorage,
  getPropertyIncome,
  canAfford,
  TagToPrompt,
} from "./utils/utils";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Window from "./components/Window";
import GameComponent from "./components/Minigames/Alpine";
import Alpine from "./components/Minigames/Alpine";
import Lakeview from "./components/Minigames/Lakeview";
import MemoryGame from "./components/Minigames/MemoryGame";

import { baseCosts, clickPriceMultiplier, M, useBearStore } from "./utils/store";







export const cities = [
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
];

function Clicker() {


  // Zustand state
  const {
  coins,
  increaseCoins,
  subtractCoins,
  tokens,
  increaseTokens, 
  subtractTokens,
  elapsedTime,
  coinsPerSec,
  clickAmount,
  upgradeStrength,
  autoClickerAmount,
  upgradeCount,
  upgradePrice,
  buildingCount,
  buildingPrice,
  cityLevel,
  shopStatus,
  clickMultiplier,
  items,
  ownedProperties,
  ownedSouvenirs,
  setElapsedTime,
  setCoinsPerSec,
  setClickAmount,
  setUpgradeStrength,
  setAutoClickerAmount,
  setUpgradeCount,
  setUpgradePrice,
  setBuildingCount,
  setBuildingPrice,
  setCityLevel,
  setShopStatus,
  setClickMultiplier,
  setItems,
  setOwnedProperties,
  setOwnedSouvenirs,
  buyBuilding,
  buyUpgrade,
  handleCollect,
  updateCoinsPerSec,
  updateClickAmount,
  updateClickMultiplier
} = useBearStore();

const [selectedCity, setSelectedCity] = useState(0);




  useMemo(() => {
    const totalPrice = items
      .map((item) => item.price)
      .reduce((a, b) => a + b, 0);
    const newMultiplier = 1 + totalPrice * clickPriceMultiplier;
    setClickMultiplier(newMultiplier);
  }, [items]);

  // Animate toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function getAdjustedPrice(baseCost, count) {
    return baseCost * Math.pow(M, count);
  }

  // Calculated values

  // Coins per Sec / buildings
  useMemo(() => {
    const propertyTotalValue = Object.values(ownedProperties).reduce(
      (a, b) => a + b,
      0
    );
    const propertyIncome = getPropertyIncome(propertyTotalValue);
    setCoinsPerSec(autoClickerAmount * buildingCount + propertyIncome);
    setBuildingPrice(getAdjustedPrice(baseCosts.building, buildingCount));
  }, [autoClickerAmount, buildingCount, ownedProperties]);

  // Click amount / upgrades
  useMemo(() => {
    setClickAmount(1 + upgradeCount * upgradeStrength * clickMultiplier);
    setUpgradePrice(getAdjustedPrice(baseCosts.upgrade, upgradeCount));
  }, [upgradeCount, upgradeStrength, clickMultiplier, items]);



  // Localstorage saving


  // --
  // Game loop
  // --

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(coins)

      increaseCoins(coinsPerSec);
      setElapsedTime((elapsedTime) => elapsedTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [elapsedTime]);

  // Event handlers




  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    const updatedList = [...itemList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setItemList(updatedList);
  };

  const dashboardComponents = [
    {
      name: "Cities",
      noPadding: true,
      component: (
        <Graphic
          highestCity={cities[cityLevel]}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      ),
    },
    {
      name: "Stats",
      component: (
        <Stats
          clickAmount={clickAmount}
          items={items}
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
        />
      ),
    },
    {
      name: "Shop",
      component: (
        <div className="shop">
          <ShopWindow
            selectedCity={selectedCity}
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
          selectedCity={selectedCity}
        />
      ),
    },
    {
      name: "Souvenir Shop",
      noPadding: true,
      component: (
        <SouvenirShop
          selectedCity={selectedCity}
        />
      ),
    },

    {
      name: "Memory Game",
      component: (
        <MemoryGame
        />
      ),
    },
    {
      name: "Inventory",
      component: <Inventory />,
    },
  ];

  const [itemList, setItemList] = useState(
    dashboardComponents.map((component) => component.name)
  );

  // Add new state for active section
  const [activeSection, setActiveSection] = useState("");
  
  // Add refs for sections
  const sectionRefs = useRef({});

  // Update the intersection observer setup
  useEffect(() => {
    const observerOptions = {
      threshold: 1.0, // Only trigger when section is fully visible
      rootMargin: "-45% 0px -45% 0px" // This creates a band in the middle of the viewport
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [itemList]);

  // Update the scroll behavior
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      
      // Calculate position to center the element
      const offset = (windowHeight - elementHeight) / 2;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update the Sidebar component
  const Sidebar = () => (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
      <nav>
        <ul className="space-y-2">
          {itemList.map((itemName) => (
            <li key={`nav-${itemName}`}>
              <button
                onClick={() => scrollToSection(itemName)}
                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                  activeSection === itemName
                    ? "bg-slate-200 text-slate-900"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {itemName}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  function BearCounter() {
    const bears = useBearStore((state) => state.bears);
    return <h1>{bears} around here ...</h1>;
  }

  function Controls() {
    const increasePopulation = useBearStore(
      (state) => state.increasePopulation
    );
    return <button onClick={increasePopulation}>one up</button>;
  }

  return (
    <section className=" bg-slate-200 flex-grow">
      <Sidebar />
      <h1 className="flex gap-2 items-center text-4xl font-bold mb-4">
        <HolidayVillage fontSize="auto" className="text-slate-700" />
        <span className="text-slate-800">City Clicker</span>
      </h1>
      {/* <div>
        <BearCounter />
        <Controls />
      </div> */}
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
                className="flex flex-col space-y-2 max-w-[600px] mx-auto interface" // Add left padding for sidebar
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {itemList.map((itemName, index) => {
                  const component = dashboardComponents.find(
                    (component) => component.name === itemName
                  );
                  return (
                    <Draggable
                      key={itemName}
                      draggableId={itemName}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="item-container"
                          ref={(el) => {
                            provided.innerRef(el);
                            sectionRefs.current[itemName] = el;
                          }}
                          data-section={itemName}
                          id={itemName}
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
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* Toast message - New city notification */}
      </div>

      {/* <div className="bottom gap-4 flex">
        <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => window.localStorage.clear()}>Clear save</button>
        <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => increaseCoins(1_000_000)}>Add money</button>
        <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => {setShowToast(true), setToastMessage(`New city unlocked: ${cities[cityLevel].name}!`)}}>Show toast</button>
        <TagToPrompt />
      </div> */}
    </section>
  );
}

export default Clicker;
