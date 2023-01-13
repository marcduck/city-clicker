import { useState, useEffect } from 'react'
import { Popper, Manager, Reference } from 'react-popper'

const Tooltip = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  
  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <span
            className="relative inline-block text-gray-700"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            ref={ref}
          >
            {children}
          </span>
        )}
      </Reference>
      {isOpen && (
        <Popper placement="top" style={{ left: mousePosition.x, top: mousePosition.y }}>
          {({ ref, style, placement, arrowProps }) => (
            <div
              className="bg-gray-800 p-2 rounded-md text-white shadow-md"
              ref={ref}
              style={style}
              data-placement={placement}
            >
              {content}
              <div ref={arrowProps.ref} style={arrowProps.style} />
            </div>
          )}
        </Popper>
      )}
    </Manager>
  )
}

export default Tooltip