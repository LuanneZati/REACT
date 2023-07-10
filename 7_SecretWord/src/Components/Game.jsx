import React from 'react'
import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
        <h1>Game</h1>
        <p>Clique no botão abaixo para fim de jogo</p>
        <button onClick={verifyLetter}>Fim de jogo</button>
    </div>
  )
}

export default Game