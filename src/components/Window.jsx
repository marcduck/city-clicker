import {
  Close,
  Expand,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material"
import React, { useState } from "react"

function Window({
  children,
  title,
  hideTitle = false,
  provided,
  noPadding,
}) {
  const [minimized, setMinimized] = useState(false)

  return (
    <div>
      <div
        {...provided.dragHandleProps}
        className={`bg-slate-300 text-sm items-center 
        flex px-6 py-2 h-8 font-bold`}
      >
        <div className="left">{title}</div>
        <div className="right ml-auto">
          <button
            title={`${minimized ? "Hide" : "Show"}`}
            onClick={() => setMinimized(!minimized)}
            className={`
            ${minimized ? "rotate-180" : ""}
            `}
          >
            <ExpandLess />
          </button>
        </div>
      </div>
      <div
        className={`bg-slate-100
        ${noPadding ? "p-0" : "p-6"}
        ${minimized ? "hidden" : "block"}
      `}
      >
        {children}
      </div>
    </div>
  )
}

export default Window
