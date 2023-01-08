import { useState } from 'react'
import './utils/App.scss'
import Footer from './components/Footer'
import Clicker from './Clicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clicker />
      <Footer />
    </>
  )
}

export default App
