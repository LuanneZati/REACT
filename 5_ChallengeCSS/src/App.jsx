import './App.css'
import CarDetails from './Components/CarDetails'

function App() {
  const details = [
    {id: 1, color: "black", year: 2010},
    {id: 2, color: "red", year: 2015},
    {id: 3, color: "white", year: 2020},
  ]
  return (
    <>
      <div className='MyProject'>
        {details.map((detail) => (
          <CarDetails
            key={detail.id}
            color={detail.color}
            year={detail.year}
          />
        ))}
      </div>
    </>
  )
}

export default App
