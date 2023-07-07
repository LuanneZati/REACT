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
      </div>
    </>
  )
}

export default App
