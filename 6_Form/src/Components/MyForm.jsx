import { useState } from 'react'
import './MyForm.css'
const MyForm = ({user}) => {
  {/**controlled inputs */}
  {/**Gerenciamento de dados */}
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")

  const handleName = (e) => {
    setName(e.target.value)
  }

  const [bio, setBio] = useState("")
  //console.log(name);
  //console.log(email);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name, email, bio)
    setName("");
    setEmail("");
    setBio("");
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
                value= {name}
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
                value = {email}
                />
            </label>
              <span>
                <textarea 
                name="bio" 
                placeholder='Descrição do usuário' 
                onChange={(e) => setBio(e.target.value)} 
                value={bio} 
                id="" 
                cols="30" 
                rows="10">

                </textarea>

              </span>
            
              <input 
              type="submit" 
              value="Enviar" 
              />
        </form>
    </div>
  )
}

export default MyForm