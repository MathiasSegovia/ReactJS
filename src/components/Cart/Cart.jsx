import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, prodcuto) => total + prodcuto.cantidad, 0);

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0) {
        return (
            <>
                <h2> No hay producto en el carrito </h2>
                <Link to='/'> Productos </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3> Total: ${total} </h3>
            <button onClick={() => vaciarCarrito()}> Vaciar carrito </button>
            <Link to='/checkout'>Finalizar Compra </Link>


        </div>
    )
}

export default Cart
