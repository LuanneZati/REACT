import './App.css'
import City from './assets/city.jpg'
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'
import ConditionalRender from './Components/ConditionalRender'
import ShowUsername from './Components/ShowUsername'
import { useState } from 'react'

function App() {
  const [use] = useState("Laura")
  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUsername name={use}age='20' />
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
