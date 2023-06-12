import React from "react"

function Window({
  children,
  title,
  hideTitle = false,
  provided,
}) {
  return (
    <div>
      <div
        {...provided.dragHandleProps}
        className="bg-slate-300 h-8 text-sm items-center flex px-6 py-2"
      >
        {!hideTitle && title}
      </div>
      <div className="bg-slate-100 p-6">{children}</div>
    </div>
  )
}

export default Window
