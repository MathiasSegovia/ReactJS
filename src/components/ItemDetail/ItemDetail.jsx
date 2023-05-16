import { useState } from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../Context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({id, nombre, img, precio, descripcion, stock}) => {

   
    const[agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoContext);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        // console.log("productos agregados: " + cantidad);

        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);

    } 

    return (
        <div className="contenedorItem">
            <h2>{nombre} </h2>
            <h3>Precio: ${precio}</h3>
            <p> {descripcion} </p>
            <img src={img} alt={nombre} />

            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra  </Link> ) : (<ItemCount inicial={1} stock={stock}
                funcionAgregar={manejadorCantidad} />)
            }
      
        </div>
     )
}




export default ItemDetail 
