import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world - Vite</h1>
        <h2>Tutorial</h2>
        <h3>
          - npm create vite@latest <br></br>
          - Insert name <br/>
          - React <br></br>
          - JavaScript <br></br>
          - Muda para a pasta criada <br />
          - npm i <br /> 
          - npm run dev <br />
        </h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
