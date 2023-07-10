import { useState } from 'react'
import './MyForm.css'
const MyForm = () => {
  {/**Gerenciamento de dados */}
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name)
  
  return (
    <div>
        {/*Criação de form */}
        <form action="">
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                name="name" 
                placeholder='Digite o seu nome' 
                onChange={handleName}
                />
            </div>
            <input
             type="submit" 
             value="Enviar"
             />
            {/**label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input 
                type="email" 
                name='email' 
                placeholder='Digite o seu email' 
                />
            </label>
            <input 
            type="submit" 
            value="Enviar" 
            />
        </form>
    </div>
  )
}

export default MyForm