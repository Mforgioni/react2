import { useState  } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification('info', `Se agregaron correctamente ${quantity} ${name}`)
        setQuantity(quantity)
    }

    return (
        <article className='detalleContenedor'>
            <header>
                <h2> {name} </h2>
                <picture>
                <img src={img} alt={name} style={{ width: 400}}/>
            </picture>
            </header>

            
            <div className='detalleDescripcion'>
            <section className='detalleparrafos'>
                <p> Categoria: {category} </p>
                <p> Descripción: {description} </p>
                <p> Precio: {price} </p>
            </section> 

            <footer>
                {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
            </div>
        </article>
    )
}

export default ItemDetail