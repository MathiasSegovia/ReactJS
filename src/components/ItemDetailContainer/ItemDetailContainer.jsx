import { getProductoById } from "../../asynMock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    
    const {idItem} = useParams();

    useEffect(() => {
        getProductoById (idItem)
        .then(res => setProducto(res))
        .catch(error => console.error(error))
     },[idItem])

     return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
     )
}

export default ItemDetailContainer