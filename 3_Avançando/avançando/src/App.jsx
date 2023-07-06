import './App.css'
import City from './assets/city.jpg'
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'
import ConditionalRender from './Components/ConditionalRender'
import ShowUsername from './Components/ShowUsername'
import CarDetails from './Components/CarDetails'
import { useState } from 'react'

function App() {
  const [use] = useState("Laura")
  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        {/* useState */}
        <ManageData/>
        <ListRender/>
        {/* conditions */}
        <ConditionalRender/>
        {/* props */}
        <ShowUsername name={use} age='20'/>
        {/*Destructing*/}
        <CarDetails brand="VW" km={100000} color="prata" novo={false}/>
        {/*Reaproveitando*/}
        <h1 className='TituloCarrosNovos'>Carros novos</h1>
        <CarDetails brand="honda" km={1000} color="preto" novo={true}/>
        <CarDetails brand="mercedes" km={5000} color="preto" novo={true}/>
        <CarDetails brand="tesla" km={50000} color="preto" novo={false}/>
        {/*Imagem em public */}
        <div> 
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/*Imagem em assets */}
        <div> 
          <img src={City} alt="Cidade " />
        </div>
      </div>
    </>
  )
}

export default App
