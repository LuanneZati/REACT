const Events = () => {
    const handleyMyEvent = (e) => {
        console.log(e);
        if(true) {
            console.log("Forma correta")
        }
    };
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso</h1>
        }
        else{
            <h1>Renderizando isso também</h1>
        }
    }
    return(
        <div>
            <div>   
                <button onClick={handleyMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui também</button>
                <button onClick={handleyMyEvent}>Clique</button>
            </div>
            {renderSomething(true)}
        </div>
    );
};

export default Events;
