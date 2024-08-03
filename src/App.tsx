import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fork from './components/fork/fork'
import useSpaghettiGameLogic from './hooks/useSpaghettiGameLogic'

function App() {
    const {
        changeGameRunning,
        startGame
    } = useSpaghettiGameLogic();

    useEffect(() => {
        startGame();
    }, [])
  return (
    <>
        <Fork /> 
    </>
  )
}

export default App
