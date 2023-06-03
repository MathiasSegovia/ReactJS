import { useContext, useState } from 'react'
import './Checkout.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../service/firebase/config'
import { CarritoContext } from '../../Context/CarritoContext'

const Checkout = () => {
    const {carrito, vaciarCarrito} = useContext(CarritoContext)
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [email, setEmail] = useState ("");
    const [emailConfirmacion, setEmailConfirmacion] = useState ("");
    const [error, setError] = useState ("");
    const [ordenId, setOrdenId] = useState ("");



    const manejadorCheckout = (event) => {
        event.preventDefault();
    

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Complete correctamente los campos, gracias");
            return;
        }
        
        if (email !== emailConfirmacion) {
            setError("El email no coincide");
            return;

        }

        const orden = {
            items: carrito.map((producto) => ({
                id:  producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto)=> total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "usuario"), orden)
            .then((docRef)=> {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
           .catch((error)=> {
            console.error("Tiene un error en su orden", error);
            setError("Se produjo un error, vuelva a intentarlo");
           })
    } 

    return (
        <div>
            <form onSubmit={ manejadorCheckout }>
                {carrito.map((producto) => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio $: {producto.item.precio} </p>
                        <hr />
                    </div>
                ))
                }
                <hr />
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Emaikl Confirmacion</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p style={{color:"red"}}> {error} </p>}
                <button type='submit'>Finalizar compra</button>

            </form>

            {
                <strong>Gracias por tu compra. Tu numero de orden es {ordenId} </strong>
            }


        </div>
    )
}
   
export default Checkout