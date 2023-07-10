import { useState } from 'react'
import MyForm from './Components/MyForm'
import './App.css'

function App() {
  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{name: "Lua", email: "lua@gmail.com"}} />
        
      </div>
    </>
  )
}

export default App
