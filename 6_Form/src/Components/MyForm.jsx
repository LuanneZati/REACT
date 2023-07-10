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

  const [bio, setBio] = useState(user ? user.bio : "")
  //console.log(name);
  //console.log(email);
  
  const [role, setRole] = useState(user ? user.role :  "")
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name, email, bio, role)
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
                <span>E-mail </span>
                <input 
                type="email" 
                name='email' 
                placeholder='Digite o seu email' 
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
                />
            </label>
            <span>Bio </span>
            <textarea 
              name="bio" 
              placeholder='Descrição do usuário' 
              onChange={(e) => setBio(e.target.value)} 
              value={bio} 
              id="" 
              cols="30" 
              rows="10">
            </textarea>
            <label>
              <span>Função no sistema</span>
              <select name="role" id="" onChange={(e) => setRole(e.target.value)}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
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