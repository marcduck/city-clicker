import React from 'react'
import { useEffect, useState } from 'react'
import { cents, canAfford } from '../Clicker'

function TextButton({text, label, func, color, price=0, clickerButton, coins}) {

  function buttonColor(){
    if (!canAfford(coins, price) && !clickerButton) {
      return 'bg-neutral-400 border-neutral-500'
    }
    return color
  }

  return (
    <div 
      className={`
        text-center bg-slate-100
        flex flex-col 
        py-1 px-2 gap-1 sm:py-2 sm:px-4 sm:gap-2 
        border-slate-100 md:border-slate-400 border
        ${clickerButton && 'select-none'} `}
    >
        <p className='text-xs text-slate-700'>
          {clickerButton ? 'Collect' : `Buy 1: ${cents(price)}`}
        </p>
        <button 
            className={`button-physical ${buttonColor()}`}
            onClick={() => func()}
        >
            {text}
        </button>
        <p className='text-xs text-slate-700'>{label}</p>
    </div>
  )
}

export default TextButton