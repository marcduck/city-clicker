import { useState } from "react"
import "./utils/App.scss"
import Footer from "./components/Footer"
import Clicker from "./Clicker"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Clicker />
      <Footer />
    </div>
  )
}

export default App
