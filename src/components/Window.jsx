import {
  Close,
  DesktopWindows,
  Expand,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material"
import React, { useState } from "react"

function Window({
  children,
  title,
  icon = <DesktopWindows />,
  hideTitle = false,
  // provided,
  noPadding,
}) {
  const [minimized, setMinimized] = useState(false)

  return (
    <div>
      <div
        // {...provided.dragHandleProps}
        className={`bg-slate-300 text-sm items-center 
        flex px-6 py-2 h-8 font-bold`}
      >
        <div className="left flex items-center gap-2">
          <div className="text-slate-600 flex items-center h-4 w-4">
            {React.cloneElement(icon, { fontSize: "1rem" })}
          </div>
          <div>{title}</div>
        </div>
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
