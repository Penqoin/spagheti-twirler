import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fork from './components/fork/fork'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Fork /> 
    </>
  )
}

export default App
