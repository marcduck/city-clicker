import React, { useState } from 'react'

import { shops } from '../utils/shops'
import Tooltip from './Tooltip'


import { getFlagEmoji, cents, canAfford } from '../Clicker'
import Modal from './Modal'

function Shop({selectedCity, coins, setCoins, cities, items, setItems}) {

    let fixedIndex = Math.min(selectedCity, shops.length - 1)
    let shop = shops[fixedIndex]
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    function isAffordableText(price) {
        return canAfford(coins, price) ? 'text-emerald-800' : 'text-slate-400'
    }
    function isAffordableDiv(price) {
        return canAfford(coins, price) 
            ? 'bg-slate-200 border border-emerald-700 hover:cursor-pointer hover:bg-emerald-700/[.20]' // Can afford
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
                    <div className={`order-first md:order-none ${!canAfford(coins, item.price) && 'grayscale' }`} >{item.emoji}</div>
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

    function ShopImage() {return <img 
        onClick={openModal}
        className={`w-40 h-40 rounded-xl object-cover object-top shadow-md hover:shadow-lg cursor-pointer`}
        src={`./assets/img/clicker/shop/${shop.shopkeeper.img}.png`} 
        alt={shop.shopkeeper.name}
    />}

    function ModalContent() {
        // Shopkeeper dialogue window
        return <div className='grid grid-cols-2 gap-6'>
            <div className="flat-outline"></div>
            <div className="flex flex-col items-center gap-3">
                <ShopImage />
                <div className="flex gap-2 items-center ">
                    <div className="font-bold">{shop.shopkeeper.name}</div>
                    <div className="text-xs ">({shop.shopkeeper.age})</div>
                </div>
                <div className="text-sm text-justify max-w-sm">{shop.shopkeeper.description || shop.shopkeeper.personalDescription}</div>
            </div>
        </div>
    }

    return (
        <div className='flex gap-4 justify-around'>
            <div className='grid gap-4 align-middle'>
                <h2 className='text-xl font-semibold'>{getFlagEmoji(cities[selectedCity].country)} {shop.name}</h2>
                {/* Shop item container */}
                <div className="shop-items flat-outline gap-2 p-2 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2">
                    {listShopItems()}
                </div>
            </div>
            <div className="shopkeeper text-center flex flex-col justify-center gap-2">
                {/* <div className="info flat-outline">
                    <div className="text-xs font-semibold">{shop.shopkeeper.name}</div>
                </div> */}
                <ShopImage/>
                <div className="tracking-widest text-xxs sm:text-xs -mb-2">Shopkeeper</div>
                <div className="font-bold text-xs sm:text-sm">{shop.shopkeeper.name}</div>
                <Modal 
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    modalContent={<ModalContent />}
                />
                
            </div>
        </div>
    )
}

export default Shop