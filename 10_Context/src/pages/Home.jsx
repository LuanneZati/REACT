import './Home.css'
import {Link} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import ChangeCounter from '../components/ChangeCounter'
// import { CounterContext } from '../context/CounterContext'
// import { useContext } from 'react'
import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {
  const url = "http://localhost:3000/products"
  const { counter } = useCounterContext();
  const {data: items, loading, error} = useFetch(url)
  return (
    <div>
      <h1>Home</h1>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>R${item.price}</p>
            {/* dynamic Route  */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
      <p>Valor do contador {counter}</p>
      {/* alter context value */}
      <ChangeCounter></ChangeCounter>
    </div>
  )
}

export default Home