
const Challenge = () => {
    const num1 = 10
    const num2 = 20
    return(
        <div>
            <h3>Primeiro numero: {num1} <br /> Segundo numero: {num2}</h3>
            <button onClick={() => {console.log(num1 + num2)}}>Soma</button>
        </div>
    )
}

export default Challenge;