import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useNotification } from "../../notification/NotificationService"
import { bd } from "../../services/firebase/firebaseConfig"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        if(product) document.title = product.name
        
        return () => {
            document.title = 'Ecommerce'
        }
    })

    useEffect(() => {
        setLoading(true)

       const productDocument = doc(bd, "products", productId)

       getDoc(productDocument)
       .then(queryDocumentSnapshot => {
        const field = queryDocumentSnapshot.data()
        const productsAdapted = { id: queryDocumentSnapshot.id, ...field}
        setProduct(productsAdapted)
       })
       .catch( error => {
        showNotification("error", "error de carga")
       })
       .finally(() => {
        setLoading(false)
       })
    }, [productId])

    if(loading) {
        return <h1>Cargando el producto...</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }
    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product} />
            <div></div>
        </div>
    )
}

export default ItemDetailContainer