import React from "react"

const Tooltip = ({ children, text = "Hello!", item }) => {
  return (
    <div className="relative group">
      <div className="">{children}</div>
      <div
        className="group-hover:opacity-100 group-hover:visible 
        absolute z-10 invisible 
      inline-block px-3 py-2 text-sm font-medium text-white 
      transition-opacity duration-300 bg-gray-900 rounded 
      shadow-sm opacity-0 tooltip dark:bg-gray-700 w-max max-w-xs
      "
      >
        {!item && text}
      </div>
    </div>
  )
}

export default Tooltip
