import React from 'react'
import Shop from './Shop'

function ShopClosed() {
    return (<div>
        Please pay the membership fee to enter the shop
    </div>)
}

function ShopWindow({shopStatus, selectedCity, coins, setCoins, cities, items, setItems}) {
  return (
    <div>
        {(shopStatus===0) && <ShopClosed />}
        {(shopStatus===1) && <Shop 
            coins={coins}
            setCoins={setCoins}
            selectedCity={selectedCity}
            cities={cities}
            items={items}
            setItems={setItems}
        />}
        {/* {(shopStatus===2) && <ShoppingCenter props={props} />} */}
    </div>
  )
}

export default ShopWindow