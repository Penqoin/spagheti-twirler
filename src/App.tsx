import { useEffect, useState } from 'react'

import { useGameContext } from './context/GameContext'


import './App.css'
import Fork from './components/fork/fork'
import ScoreBoard from './components/scoreboard/ScoreBoard'

function App() {
    const {
        players,
        registerPlayerHit
    } = useGameContext();
    
  return (
    <>
        <Fork />
        <ScoreBoard />
        <button onClick={() => registerPlayerHit(0)}>+</button>
    </>
  )
}

export default App
