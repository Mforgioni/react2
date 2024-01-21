import cart from './assets/carrito2.png'

import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <div className='numeroCarrito'>
            <img className='logo-carrito' src={cart} alt='cart.carrito' />
            {totalQuantity}
        </div>
    )
}

export default CartWidget