import { Link } from "react-router-dom"

const Item = ({ id, name, img, category, price}) => {
    return (
        <div className="card-item">
            <h3>{name}</h3>
            <img src={img} style={{ width: 100 }}/>
            <p>Categoria: {category}</p>
            <h4>${price}</h4>
            <Link className="ver-detalle" to={`/detail/${id}`}>Ver detalle</Link>
        </div>  
    )
}

export default Item