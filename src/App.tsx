import { useGameContext } from './context/GameContext'


import './App.css'
import Fork from './components/fork/fork'
import ScoreBoard from './components/scoreboard/ScoreBoard'
import { useEffect } from 'react';
import useGameLogic from './hooks/useGameLogic';

function App() {
    const {
        registerPlayerHit,
        changeGameRunningState
    } = useGameContext();

    const {
        currentKey
    } = useGameLogic();

    useEffect(() => {
        changeGameRunningState(true)
    }, [])
    
  return (
    <>
        <Fork />
        <ScoreBoard />
    </>
  )
}

export default App
