// components
import FirstComponent from '../components/FirstComponent'
import TemplateExpressions from '../components/TemplateExpressions'

//styles / CSS
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
