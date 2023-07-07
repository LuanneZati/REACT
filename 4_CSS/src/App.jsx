import { useState } from 'react'
import './App.css'
import MyComponent from './Components/MyComponent'

function App() {
  const n = 15
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
        {/*Inline dinamico*/}
        <p style={n<10 ? ({color: "purple"}) : ({color:"pink"})}>CSS dinâmico</p>
        <p style={name === "Luanne" ? {color: "green", backgroundColor: "#000"} : null}>Nome dinâmico</p>
      </div>
    </>
  )
}

export default App
