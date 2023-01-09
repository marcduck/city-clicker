import React from 'react'

import { shops } from '../utils/shops'
import Tooltip from './Tooltip'


import { getFlagEmoji, cents, canAfford } from '../Clicker'

function Shop({selectedCity, coins, setCoins, cities, items, setItems}) {

    let fixedIndex = Math.min(selectedCity, shops.length - 1)
    let shop = shops[fixedIndex]

    function isAffordableText(price) {
        return canAfford(coins, price) ? 'text-emerald-700' : 'text-slate-400'
    }
    function isAffordableDiv(price) {
        return canAfford(coins, price) 
            ? 'bg-slate-200 border border-emerald-700 hover:cursor-pointer' // Can afford
            : 'bg-neutral-300 border border-neutral-400'                    // Can't afford
    }

    function listShopItems() {
        return shop.items.map(item => {
            return (
                // Individual shop items, click to buy
                <div 
                    className={`
                        flex-row sm:flex-col  
                        items-center justify-between flex text-center
                        gap-0.5 sm:gap-1 p-1 
                        ${isAffordableDiv(item.price)}`}
                    title={item.description} 
                    key={item.name}
                    onClick={() => buyItem(item)}
                >
                    <div className={`font-semibold text-xs ${isAffordableText(item.price)}`}>{item.name}</div>
                    <div className='order-first md:order-none' >{item.emoji}</div>
                    <div className={`text-xs font-mono ${isAffordableText(item.price)}`}>{cents(item.price)}</div>
                </div>
            )
        })
    }

    function buyItem(item) {
        if (!canAfford(coins, item.price)) { return }
        setCoins(coins => coins - item.price)
        setItems(items.concat(item))
    }

    return (
        <div className='flex gap-4 '>
            <div className='grid gap-4 align-middle'>
                <h2 className='text-xl font-semibold'>{getFlagEmoji(cities[selectedCity].country)} {shop.name}</h2>
                {/* Shop item container */}
                <div className="shop-items flat-outline gap-2 p-2 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2">
                    {listShopItems()}
                </div>
            </div>
            <div className="shopkeeper ">
                {/* <div className="info flat-outline">
                    <div className="text-xs font-semibold">{shop.shopkeeper.name}</div>
                </div> */}
                <img 
                    className='h-40 md:h-60 w-full object-cover' 
                    src={`./assets/img/clicker/shop/${shop.shopkeeper.img}.png`} 
                    alt={shop.shopkeeper.name}
                    title={shop.shopkeeper.description}
                />
            </div>
        </div>
    )
}

export default Shop