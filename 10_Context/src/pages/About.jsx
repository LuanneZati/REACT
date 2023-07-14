import './About.css'
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'
// Refactoring with hook
import { useCounterContext } from '../hooks/useCounterContext'

// Context more complex
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext()

  // Context more complex
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color:color}}>About</h1>
      <p>Valor do contador {counter}</p>
      {/* alter context value */}
      <ChangeCounter></ChangeCounter>
    </div>
  )
}

export default About