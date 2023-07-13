import { useState, useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

console.log(url)

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  //Custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)
  
  //Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
    
  //   fetchData();
  // }, []);

  // Add products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }
    
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product)
    // });

    // //Carregamento dinâmico
    // const addedProduct = await res.json()
  
    // setProducts((prevProducts) => [...prevProducts, addedProduct])
    
    //Refactoring post
    console.log(product)
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  const handleDelete = async (id) => {
    items && items.map((product) => {
      if (product.id === id) {
        console.log(product);
        httpConfig(id, "DELETE");
      }
    });
  };
  

  return (
    <div className="app">
      <h1>Lista de produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R${product.price} <button key={product.id} onClick={() => handleDelete(product.id)}>Deletar</button></li>
          ))}
        </ul>)
        }
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome: <input 
              type="text" 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
              />
            </label>
            <label>
              Preço: <input 
              type="number" 
              value={price} 
              name="price" 
              onChange={(e) => setPrice(e.target.value)} 
              />
            </label>
          {/* state loading POST */}
          {loading ? <p>Aguarde!</p> : <button onClick={handleSubmit}>Criar</button>}
        </form>
      </div>
    </div>
  )
}

export default App
