const TemplateExpressions = () => {
    const name = "Luanne"
    const data = {
        nome: "Joao",
        job: "Programmer"
    }
    return (
        <div>   
            <h3>Olá {name}, Tudo bem?</h3>
            <p>{data.nome} é {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;