import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"

const Product = () => {
    const { id } = useParams()
    const url = "http://localhost:3000/products/" + id 
    const { data:product, loading, error } = useFetch(url)
    console.log(product)
    return (
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    {/* Nested route */}
                    <Link to={`/products/${product.id}/info`} >Mais informações</Link>
                </div>
            )}
        </div>
    )
}

export default Product