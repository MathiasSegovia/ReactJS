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
        <div>
            <h2 className="subTitulo">{greeting}</h2>
            <ItemList productos={productos}/>
        </div>
            

    )
} 

export default ItemListContainer