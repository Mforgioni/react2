
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import './App.css'
import OrderForm from './components/OrderForm/OrderForm'
import OrderSelect from './components/OrderSelect/OrderSelect'

function App() {
  return (
    <>
       <BrowserRouter>
          <NotificationProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Listado de productos disponibles'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de los productos tipo: '}/>}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartView />} />
                <Route path='/checkout' element={<OrderForm/>} />
                <Route path='/OrderSelect' element={<OrderSelect/>} />
              </Routes>
            </CartProvider>
          </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App