import React, { useEffect, useRef } from "react"
import { riseUp } from "../utils/animations"
import ModalContent from "./ModalContent"

const Modal = ({ closeModal, isModalOpen, shop }) => {
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keydown", close)
    return () =>
      window.removeEventListener("keydown", close)
  }, [])

  const modalRef = useRef(null)
  riseUp(isModalOpen, modalRef)

  return (
    <>
      {isModalOpen && (
        <div
          onClick={closeModal}
          className={`fixed top-0 left-0 w-full h-full z-20
            bg-black bg-opacity-50 flex items-center justify-center
          `}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className={` m-4
              relative bg-slate-100 border border-slate-400 
              p-4 `}
          >
            <ModalContent shop={shop} />
            <button
              className="absolute top-1 right-2"
              onClick={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
