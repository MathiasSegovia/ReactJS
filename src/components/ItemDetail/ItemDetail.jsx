import { useState } from "react";
import "./ItemDetail.css"

const ItemDetail = ({nombre, img, precio, descripcion, stock}) => {

    let inicial = 1;
    const [ contador, setContador ] = useState(inicial);
    const aumentarContador = () => {
        if(contador < stock) {
            setContador (contador + 1)
        }
    }
    const disminuirContador = () => {
        if(contador > inicial) {
            setContador (contador - 1)
        }
    }

    return (
        <div className="contenedorItem">
            <h2>{nombre} </h2>
            <h3>Precio: ${precio}</h3>
            <p> {descripcion} </p>
            <img src={img} alt={nombre} /> 
            <div>
                <button onClick={disminuirContador}>-</button>
                <strong>{contador}</strong>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button>Agregar Carrito</button>
        </div>
     )
}




export default ItemDetail 