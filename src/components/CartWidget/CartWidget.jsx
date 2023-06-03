import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';

const CartWidget = () => {
    const {carrito} = useContext(CarritoContext);

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const imgCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png" 
    return (
        <Link to='/Cart'>
            <img className="imgCarrito" src = {imgCarrito} alt="Carrito"/>
            {
                totalCantidad
            }
            
        </Link>
    )
}

export default CartWidget
