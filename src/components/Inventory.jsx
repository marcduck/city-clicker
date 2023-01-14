import React, { useState } from 'react'
import { cents } from '../Clicker'


function Inventory({items, }) {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  return (
    <div className='grid grid-cols-6 md:grid-cols-8'>
      {items.map((item, index) => {

          return (<div key={index}  className='flex flex-col items-center'>


          <div 
            id='inventory-item'
            className='p-3 flat-outline aspect-square items-center relative cursor-default shadow-sm hover:bg-slate-600/20' 
            onMouseEnter={() => setHoveredItemId(index)}
            onMouseLeave={() => setHoveredItemId(null)}
            title={`${item.description} (${cents(item.price)})`}
          >
            <div className="flex-1">{item.emoji}</div>
            {/* <div className="text-xxs">{`+${1 + item.price* 0.001}x click modifier`}</div> */}
          </div>
          <div className={`text-xxs whitespace-nowrap  ${hoveredItemId === index ? 'block' : 'invisible'} pointer-events-none`}>{item.name}</div>
        </div>
        )
      })}
    </div>
  )
}

export default Inventory