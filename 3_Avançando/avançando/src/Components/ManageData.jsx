import{ useState } from "react";

const ManageData = () => {
    let someData = 0;
    const [number, setNumber] = useState(0);
    console.log(number)
    return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = someData + 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => (setNumber(number+1))}>Mudar variavel</button>
        </div>
    </div>
  )
}

export default ManageData