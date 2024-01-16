import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)

        setQuantity(quantity)
    }

    return (
        <article className='articulo-detalle'>
            <header>
                <h2> {name} </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 230}}/>
            </picture>
            <section className='seccion-detalle'>
                <p> Categoria: {category} </p>
                <p> Descripción: {description} </p>
                <p> Precio: $ {price} </p>
            </section>           
            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link className='finalizar' to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail