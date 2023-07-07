import './App.css'
import MyComponent from './Components/MyComponent'
import Title from './Components/Title'

function App() {
  const n = 15
  const redTitle = true

  return (
    <>
      <div>
        {/*Css global*/}
        <h1>React com CSS</h1>
        {/*CSS de componente*/}
        <MyComponent/>
        <p>Parágrafo do App.jsx</p>
        {/*Inline CSS*/}
        <p style={{color: "red", padding:"25px", borderTop:"2px solid green"}}>Esse elemento foi estilizado de forma inline</p>
        {/*Inline dinamico*/}
        <p style={n<10 ? ({color: "purple"}) : ({color:"pink"})}>CSS dinâmico</p>
        <p style={name === "Luanne" ? {color: "green", backgroundColor: "#000"} : null}>Nome dinâmico</p>
        {/*Classe dinâmica*/}
        <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
        {/*CSS modules*/}
        <Title/>
        <h2 className="myTitle">Teste</h2>
        
      </div>
    </>
  )
}

export default App
