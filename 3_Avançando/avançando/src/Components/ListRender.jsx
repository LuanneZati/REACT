import {useState} from "react"

const ListRender = () => {
    const [list] = useState(["A", "B", "C"]);
    const[users, setUsers] = useState([
        { id: 1, name: "A", age: 15 },
        { id: 2, name: "B", age: 17 },
        { id: 3, name: "C", age: 19 },
    ]);
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id); 
        });

    };
    //é como se fosse um for para imprimir cada item da lista
    return (
    <div>
        <ul>
           {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
           {users.map((user) => (
                <li key={user.id}> {user.name} - {user.age} anos</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender