import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({id, nombre, img, stock}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="nombreArticulo">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg"/>
            </picture>
            <section>
               
                <p className="info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link className="Detalle" to={`/Item/${id}`}>
                    Detalle del producto
                </Link>
            </footer>

        </article>
    )
}

export default Item