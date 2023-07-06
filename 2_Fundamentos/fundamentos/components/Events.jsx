const Events = () => {
    const handleyMyEvent = (e) => {
        console.log(e);
        if(true) {
            console.log("Forma correta")
        }
    };
    return(
        <div>
            <div>   
                <button onClick={handleyMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou")}>Clique aqui também</button>
                <button onClick={handleyMyEvent}>Clique</button>
            </div>
        </div>
    );
};

export default Events;
