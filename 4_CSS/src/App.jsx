import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/MyComponent'

function App() {
  return (
    <>
      <div>
        {/*Css global*/}
        <h1>React com CSS</h1>
        {/*CSS de componente*/}
        <MyComponent/>
        <p>Parágrafo do App.jsx</p>
        {/*Inline CSS*/}
        <p style={{color: "red", padding:"25px", borderTop:"2px solid green"}}>Esse elemento foi estilizado de forma inline</p>
      </div>
    </>
  )
}

export default App
