import './App.css'
import City from './assets/city.jpg'
import ManageData from './Components/ManageData'
import ListRender from './Components/ListRender'

function App() {
  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <ManageData/>
        <ListRender/>
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
