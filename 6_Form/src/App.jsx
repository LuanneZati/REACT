import { useState } from 'react'
import MyForm from './Components/MyForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm />
      </div>
    </>
  )
}

export default App
