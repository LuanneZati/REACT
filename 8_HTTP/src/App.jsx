import { useState, useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/products"

console.log(url)

function App() {
  const [products, setProducts] = useState([])
  
  //Resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
