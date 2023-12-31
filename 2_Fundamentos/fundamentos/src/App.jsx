// components
import FirstComponent from '../components/FirstComponent'
import TemplateExpressions from '../components/TemplateExpressions'
import Events from '../components/Events'
import Challenge from '../components/Challenge'

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
        <Events/>
        <Challenge/>
      </div>
    </>
  )
}

export default App
