import React from "react"
import { clearLocalStorage } from "../utils/utils"

function Footer() {
  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-slate-300">
      <span className="text-sm border-l-slate-800 text-slate-700 sm:text-center dark:text-slate-400">
        © {new Date().getFullYear()} Marc Trudelle. All
        Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-slate-600 dark:text-slate-400 sm:mt-0">
        <button onClick={() => clearLocalStorage()}>
          Clear saved data
        </button>
      </ul>
    </footer>
  )
}

export default Footer
