import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'


function App() {
  return (
    <>
       <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Productos Disponibles'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de los productos filtrados: '}/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App