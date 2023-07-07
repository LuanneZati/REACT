import './App.css'
import City from './assets/city.jpg'
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'
import ConditionalRender from './Components/ConditionalRender'
import ShowUsername from './Components/ShowUsername'
import CarDetails from './Components/CarDetails'
import Fragment from './Components/Fragment'
import Container from './Components/Container'
import ExecuteFunction from './Components/ExecuteFunction'
import Message from './Components/Message'
import ChangeMessageState from './Components/ChangeMessageState'

import { useState } from 'react'

function App() {
  const [use] = useState("Laura")

  const cars = [
    {id: 1, brand: "Ferrari", color: "black", novo:false, km:5000},
    {id: 2, brand: "BMW", color: "white", novo:true, km:0},
    {id: 3, brand: "mercedes", color: "pink", novo:true, km:100}
  ]

  const [message, setMessage] = useState("Bem vindo!");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  function showMessages() {
    console.log("Evento do componente pai")
  }
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
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          novo={car.novo} 
          />
        ))}
        {/*Fragments*/}
        <Fragment propTest="teste"/>
        {/*children*/}
        <Container myValue="teste">
          <p>Esse é o conteúdo</p>
        </Container>
        {/*Executar função*/}
        <ExecuteFunction myFunction={showMessages} />
        {/*Statelift*/}
        <Message msg={message} />
        <ChangeMessageState handleMessage={handleMessage} />

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
