import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Parent/>
    </>
  )
}

export default App
