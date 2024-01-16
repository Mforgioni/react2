import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Link className='titulo' to='/'>E-COMMERCE</Link>
            <section className='contenedor-link'>
                <Link to='/category/celular'>Celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
                <Link to='/category/notebook'>Notebooks</Link>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar