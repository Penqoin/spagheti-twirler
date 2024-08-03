import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fork from './components/fork/fork'
import useSpaghettiGameLogic from './hooks/useSpaghettiGameLogic'
import ScoreBoard from './components/scoreboard/ScoreBoard'

function App() {
    const {
        changeGameRunning,
    } = useSpaghettiGameLogic();

    useEffect(() => {
        changeGameRunning();
    }, [])
  return (
    <>
        <Fork />
        <ScoreBoard player1Score={23} player2Score={2} />
    </>
  )
}

export default App
