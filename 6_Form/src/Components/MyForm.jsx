import { useState } from 'react'
import './MyForm.css'
const MyForm = () => {
  {/**Gerenciamento de dados */}
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  //console.log(name);
  //console.log(email);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name, email)
  }
  return (
    <div>
      {/**envio de form */}
        {/*Criação de form */}
        <form onSubmit={handleSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
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