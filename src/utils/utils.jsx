import React, { useState } from "react"

export function TagToPrompt() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  function modifyString(inputString) {
    // Split the input string on '?'
    const splitString = inputString.split("?")

    // Remove the first element from the list, as it is empty
    splitString.shift()

    // Delete the last word and leading/trailing whitespace from each element
    const modifiedList = splitString.map((s) =>
      s.replace(/\s*\S+$/, "").trim()
    )

    // Join the modified elements with a comma and return the result
    return modifiedList.join(", ")
  }

  const handlePaste = (event) => {
    event.preventDefault()
    const paste = event.clipboardData.getData("text")
    setInput(paste)
    setOutput(modifyString(paste))
  }

  return (
    <div>
      <label htmlFor="input-area">
        Input GB tags here:
      </label>
      <textarea
        id="input-area"
        value={input}
        onChange={handleChange}
        onPaste={handlePaste}
      />
      <div>{output}</div>
    </div>
  )
}

export function plural(word, count, suffix = "s") {
  return `${word}${count !== 1 ? suffix : ""}`
}

export function initializeObjectFromStorage(
  item,
  initialValue
) {
  return useState(() => {
    const storedValue = localStorage.getItem(item)
      ? JSON.parse(localStorage.getItem(item))
      : initialValue
    return storedValue
  })
}

export function initializeFromStorage(item, initialValue) {
  return useState(() => {
    const storedValue = localStorage.getItem(item)
    // console.log(item, initialValue, typeof initialValue)
    if (storedValue) {
      if (storedValue.includes(".")) {
        // If the stored value is a float, parse it into a float
        return parseFloat(storedValue)
      } else {
        // If the stored value is an integer, parse it into an integer
        return parseInt(storedValue)
      }
    } else {
      // If there is no stored value, return the initial value
      return initialValue
    }
  })
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function cents(n) {
  return "$" + round1(n, 2)
}
export function round1(n, decimals = 1) {
  return numberWithCommas(n.toFixed(decimals))
}

export function roundTo(n, d = 10) {
  return Math.floor(n / d) * d
}

export function canAfford(coins, price) {
  return price <= coins ? true : false
}

export function getFlagEmoji(countryCode) {
  // SVG flag
  // return <Flag code={countryCode} />
  // Emoji flag
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    )
}

export function getNextArrayItem(array, index) {
  return index + 1 < array.length
    ? array[index + 1]
    : array[array.length - 1]
}

export function getItemSum(items) {
  return items.reduce((sum, item) => {
    return sum + item.price
  }, 0)
}

export function isAffordableText(price, coins) {
  return canAfford(coins, price)
    ? "text-emerald-800"
    : "text-slate-400"
}

export function isAffordableDiv(price, coins) {
  return canAfford(coins, price)
    ? "bg-slate-200 border border-emerald-700 hover:cursor-pointer hover:bg-emerald-700/[.20]" // Can afford
    : "bg-neutral-300 border border-neutral-400" // Can't afford
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getPropertyIncome(
  price,
  percentage = 0.003
) {
  return roundTo(price * percentage)
}

export function clearLocalStorage() {
  var proceed = confirm(
    "Are you REALLY sure you want to reset your save?"
  )
  if (proceed) {
    //proceed
    localStorage.clear()
  } else {
    //don't proceed
    return
  }
}

export function shortNum(n, decimals = 1, min = 1_000_000) {
  if (n > min) {
    return Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: decimals,
    }).format(n)
  }
  return round1(n, decimals)
}

export function shortCents(n) {
  return `$${shortNum(n, 2, 500_000)}`
}
