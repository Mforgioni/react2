import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        if(categoryId) document.title = 'Ecommerce: ' + categoryId 
        
        return () => {
            document.title = 'Ecommerce'
        }
    })

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                showNotification('error', 'Hubo un error cargando los productos')
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div>
            <h1>{greeting + (categoryId ?? '')}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer