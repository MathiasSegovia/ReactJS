import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../../asynMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {idCategoria} = useParams();




     useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos (idCategoria)
            .then(res =>  setProductos(res))
            .catch(error => console.error(error))
    }, [idCategoria]) 


    return (

        <>
            <h2 style={{textAlign: "center"}}>{greeting}</h2>
            <ItemList productos={productos}/>
        </>
            

    )
} 

export default ItemListContainer