import React from 'react'
import { useEffect, useState } from 'react'
import { cents, canAfford } from '../Clicker'

function TextButton({text, label, func, color, price, clickerButton, coins}) {

  function buttonColor(){
    if (!canAfford(coins, price)) {
      return 'bg-neutral-400 border-neutral-500'
    }
    return color
  }

  if (clickerButton) {
    return (
      <div 
        className="button-container outlined-box min-w-max flex-grow -mr-0.5 select-none"
      >
          <p className='text-xs text-center text-slate-700'>
            {`Collect`}
          </p>
          <button 
              className={`button-physical ${color}`}
              onClick={() => func()}
          >
              {text}
          </button>
          <p className='text-xs text-center text-slate-700'>{label}</p>
      </div>
    )
  }

  return (
    <div 
      className="button-container outlined-box min-w-max flex-grow"
    >
        <p className='text-xs text-center text-slate-700'>
          {`Buy 1: ${cents(price)}`}
        </p>
        <button 
            className={`button-physical ${buttonColor()}`}
            onClick={() => func()}
        >
            {text}
        </button>
        <p className='text-xs text-center text-slate-700'>{label}</p>
    </div>
  )
}

export default TextButton