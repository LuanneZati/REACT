import {useState} from "react";
const ConditionalRender = () => {
    const[x] = useState(true);
    const [name] = useState("João");
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true sim</p>}
        <h1>IF ternário</h1>
        {name == "João" ? (
          <div>
            <p>Nome: {name}</p>
          </div>
          ) : (
            <div>
              <p>O nome não é João</p>
            </div>
          )}
    </div>
  );
};

export default ConditionalRender