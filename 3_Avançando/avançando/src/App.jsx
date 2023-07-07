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

  const cars = [
    {id: 1, brand: "Ferrari", color: "black", novo:false, km:5000},
    {id: 2, brand: "BMW", color: "white", novo:true, km:0},
    {id: 3, brand: "mercedes", color: "pink", novo:true, km:100}
  ]
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
        {/*loop em array de objetos*/}
        {cars.map((car) => (
          <CarDetails 
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          novo={car.novo} 
          />
        ))}
        
        
        
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
