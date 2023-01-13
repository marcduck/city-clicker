import React, { useState } from 'react'
import { cents } from '../Clicker'

useState

function Inventory({items, }) {
  return (
    <div className='grid grid-cols-12 gap-1'>
      {items.map((item, index) => {
          const [isHovered, setIsHovered] = useState(false)

        return (<div key={index}  className='flex flex-col items-center'>


          <div 
            id='inventory-item'
            className='p-3 flat-outline aspect-square items-center relative cursor-default shadow-sm hover:bg-slate-600/20' 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={`${item.description} (${cents(item.price)})`}
          >
            <div className="flex-1">{item.emoji}</div>
            {/* <div className="text-xxs">{`+${1 + item.price* 0.001}x click modifier`}</div> */}
          </div>
          <div className={`text-xxs whitespace-nowrap  ${isHovered ? 'block' : 'invisible'} pointer-events-none`}>{item.name}</div>
        </div>
        )
      })}
    </div>
  )
}

export default Inventory