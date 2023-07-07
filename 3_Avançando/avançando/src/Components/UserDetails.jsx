import React from 'react'
const UserDetails = ({name, age, job}) => {
  return (
    <div>
        <h2 className='DataUsers'>Dados usuários</h2>
        <div className='DataUsersBody'>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>
            </ul>
            {age >= 18 && <h2>Está apto a tirar carteira!</h2>}
        </div>
    </div>
  )
}

export default UserDetails