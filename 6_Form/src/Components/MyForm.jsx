import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/*Criação de form */}
        <form action="">
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder='Digite o seu nome' />
            </div>
            <input type="submit" value="Enviar"/>
            {/**label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name='email' placeholder='Digite o seu email' />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm