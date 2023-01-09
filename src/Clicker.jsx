import React, { useEffect, useState } from 'react'

import Graphic from './components/Graphic'
import Shop from './components/Shop'
import Stat from './components/Stat'
import TextButton from './components/TextButton'
import TagToPrompt from './components/TagToPrompt'
import ShopWindow from './components/ShopWindow'


const SectionHeading = ({ children }) => <h2 className='text-4xl font-bold mb-4'>{children}</h2>

// Game  variables
const M = 1.15

let baseCosts = {
    upgrade: 8,
    building: 35
}



let cities = [
    {name: 'Lucerne', img: 'city-swiss', buildingsRequired: 0, country: 'CH'},
    {name: 'Columbus', img: 'city-ohio', buildingsRequired: 10, country: 'US'},
    {name: 'Bonn', img: 'city-bonn', buildingsRequired: 20, country: 'DE'},
    {name: 'Suzhou', img: 'city-suzhou', buildingsRequired: 30, country: 'CN'},
    {name: 'Lima', img: 'city-lima', buildingsRequired: 40, country: 'PE'},
    {name: 'Flores', img: 'city-flores', buildingsRequired: 50, country: 'GT'},
]

console.log(cities)

// Utility functions

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function cents(n){
    return '$' + numberWithCommas(n.toFixed(2))
}

export function canAfford(coins, price) {
    return price <= coins ? true : false
}

export function getFlagEmoji(countryCode) {
    // SVG flag
    // return <Flag code={countryCode} />
    // Emoji flag
    return countryCode.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt())
    );
}

export function getNextArrayItem(array, index) {
    return (index + 1 < array.length) ? array[index + 1] : array[array.length - 1]
}


// ---
// Main App
// ---

function Clicker() {

    function buyBuilding() {
        if (!canAfford(coins, buildingPrice)) { return }
        
        setCoins(coins => coins - buildingPrice)
        setBuildingCount(buildingCount => buildingCount+1)

    }

    function buyUpgrade(){
        if (!canAfford(coins, upgradePrice)) { return }

        setCoins(coins => coins - upgradePrice)
        setUpgradeCount(upgradeCount => upgradeCount+1)
    }

    // Game variables

    function initializeFromStorage(item, initialValue) {
        return useState(() => {
            const storedValue = localStorage.getItem(item);
            console.log(item, initialValue, typeof initialValue)
            if (storedValue) {
              if (storedValue.includes('.')) {
                // If the stored value is a float, parse it into a float
                return parseFloat(storedValue);
              } else {
                // If the stored value is an integer, parse it into an integer
                return parseInt(storedValue);
              }
            } else {
              // If there is no stored value, return the initial value
              return initialValue;
            }
          });
    }

    function initializeObjectFromStorage(item, initialValue) {
        return useState(() => {
            const storedValue = localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : initialValue
            return storedValue

        })
    }

    const [elapsedTime, setElapsedTime] = initializeFromStorage('elapsedTime', 0)
    const [coins, setCoins] = initializeFromStorage('coins', 0)
    const [coinsPerSec, setCoinsPerSec] = initializeFromStorage('coinsPerSec', 0)
    const [clickAmount, setClickAmount] = initializeFromStorage('clickAmount', 1)
    const [upgradeStrength, setUpgradeStrength] = initializeFromStorage('upgradeStrength', 0.5)
    const [autoClickerAmount, setAutoClickerAmount] = initializeFromStorage('autoClickerAmount', 1.5)
    const [upgradeCount, setUpgradeCount] = initializeFromStorage('upgradeCount', 0)
    const [upgradePrice, setUpgradePrice] = initializeFromStorage('upgradePrice', baseCosts.upgrade)
    const [buildingCount, setBuildingCount] = initializeFromStorage('buildingCount', 0)
    const [buildingPrice, setBuildingPrice] = initializeFromStorage('buildingPrice', baseCosts.building)
    const [cityLevel, setCityLevel] = initializeFromStorage('cityLevel', 0)    
    const [shopStatus, setShopStatus] = initializeFromStorage('shopStatus', 1)    
    const [selectedCity, setSelectedCity] = useState(0);
    const [items, setItems] = initializeObjectFromStorage('items', [])


    function getAdjustedPrice(baseCost, count) {
        return (baseCost * Math.pow(M, count))
    }
 
    // Calculated values

    // Clicks per Sec / buildings
    useEffect(() => { 
        setCoinsPerSec(autoClickerAmount * buildingCount) 
        setBuildingPrice(getAdjustedPrice(baseCosts.building, buildingCount))
    }, [autoClickerAmount, buildingCount])

    // Click amount / upgrades
    useEffect(() => { 
        setClickAmount(1 + upgradeCount * upgradeStrength) 
        setUpgradePrice(getAdjustedPrice(baseCosts.upgrade, upgradeCount))
    }, [upgradeCount, upgradeStrength])

    // City level / city unlock
    useEffect(() => { 
        let nextCityBuildingsRequired = cities[Math.min(cityLevel+1, cities.length)].buildingsRequired
        if (cityLevel < cities.length && nextCityBuildingsRequired === buildingCount) {
            console.log(`New city unlocked: ${cities[cityLevel].name}! City level: ${cityLevel}`)
            setCityLevel(cityLevel => cityLevel+1)
        }
    }, [buildingCount])


    // Localstorage saving
      
    useEffect(() => {
        localStorage.setItem('elapsedTime', elapsedTime)
        localStorage.setItem('coins', coins)
        localStorage.setItem('coinsPerSec', coinsPerSec)
        localStorage.setItem('clickAmount', clickAmount)
        localStorage.setItem('upgradeStrength', upgradeStrength)
        localStorage.setItem('autoClickerAmount', autoClickerAmount)
        localStorage.setItem('upgradeCount', upgradeCount)
        localStorage.setItem('upgradePrice', upgradePrice)
        localStorage.setItem('buildingCount', buildingCount)
        localStorage.setItem('buildingPrice', buildingPrice)
        localStorage.setItem('cityLevel', cityLevel)
        localStorage.setItem('shopStatus', shopStatus)
        }, 
        [elapsedTime,
        coins,
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
])

useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
}, [items])


    function clearLocalStorage() {
        var proceed = confirm("Are you sure you want to reset your save?");
        if (proceed) {
        //proceed
            localStorage.clear()
        } else {
        //don't proceed
            return
        }
    }
    
    // --
    // Game loop
    // --

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(coins, coinsPerSec)

            setCoins(coins => coins + coinsPerSec)
            setElapsedTime(elapsedTime => elapsedTime + 1)
        }, 1000)

        return () => clearInterval(interval)

    }, [coinsPerSec] )

    // Event handlers
    function handleCollect() {
        setCoins(coins + clickAmount)
    }

    const buttonColors = {
        collect: 'bg-emerald-700 border-emerald-800',
        build: 'bg-blue-700 border-blue-800',
        upgrade: 'bg-purple-800 border-purple-900'
    }

    return (
        <section className='flex-1 bg-slate-200'>
            <SectionHeading>City Clicker</SectionHeading>
            <div className="grid interface grid-cols-1 gap-6 lg:grid-cols-2">

            <div className="stats outlined-box">
                <h3 className='text-2xl font-semibold'>Stats:</h3>
                <div className="grid">
                    <div>{`Cash: `} <span  className='font-semibold'>{cents(coins)}</span></div>
                    <Stat children={`Clicking power: ${cents(clickAmount)}`} />
                    <Stat children={`Income per sec: ${cents(coinsPerSec)}/s`} />
                    {/* <Stat children={`Elapsed time: ${elapsedTime}s`} /> */}
                    <br />
                    {/* <Stat children={`City level: ${cityLevel}`} /> */}
                    <div className=''>Buildings: {buildingCount}</div>
                    <div className=''>Upgrades: {upgradeCount}</div>
                    <br />
                    <Stat children={`Items: ${items.map(i => {return i.emoji+''})}`} />
                </div>
            </div>
            <div className="graphic order-first md:order-none flat-outline shadow-lg">
                <Graphic 
                    cityLevel={cityLevel}
                    highestCity={cities[cityLevel]}
                    buildingCount={buildingCount} 
                    cities={cities}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                />
            </div>

            <div className='buttons'>
                <div className='text-center grid-cols-3 grid border-slate-400 border md:border-none md:gap-6'>
                    <TextButton 
                        text='Collect' 
                        label={`Collect ${cents(clickAmount)}`} 
                        func={handleCollect} 
                        color={buttonColors.collect} 
                        clickerButton
                        key='Collect' 
                    />
                    <TextButton 
                        text='Build' 
                        label={`Earn +${cents(autoClickerAmount)}/s`} 
                        func={buyBuilding} 
                        color={buttonColors.build} 
                        price={buildingPrice}
                        coins={coins}
                        key='build'
                    />
                    <TextButton 
                        text='Upgrade' 
                        label={`Gain +${cents(upgradeStrength)}/click`} 
                        func={buyUpgrade} 
                        color={buttonColors.upgrade} 
                        price={upgradePrice}
                        coins={coins}
                        key='upgrade'
                    />
                </div>
            </div>



            <div className="shop">
                <div className='outlined-box'>
                    <ShopWindow
                        coins={coins}
                        setCoins={setCoins}
                        selectedCity={selectedCity}
                        cities={cities}
                        items={items}
                        setItems={setItems}
                        shopStatus={shopStatus}
                    />
                </div>
            </div>
            </div>
            <div className="bottom gap-4 flex">
                {/* <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => window.localStorage.clear()}>Clear save</button> */}
                {/* <button className='bg-slate-400 py-0.5 px-1.5' onClick={() => setCoins(coins + 1_000_000)}>Add money</button> */}
                {/* <TagToPrompt /> */}
            </div>



        </section>
    )
}

export default Clicker