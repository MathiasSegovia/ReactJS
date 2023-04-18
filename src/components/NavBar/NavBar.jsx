import React, { useEffect, useState } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const [categoria, setCategoria] = useState ("");
  useEffect( () =>{
    document.title =`${categoria}`
  },[categoria])

  const handlerClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <header>
        <Link className='categoria' to ={"/"}>
          <h1>Tienda del Rey de Copas</h1>
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink onClick={() => handlerClick ('Camiseta')} className="Camiseta categoria" to={`/categoria/1`}>
                    Camisetas
                  </NavLink></li>
                <li>
                  <NavLink onClick={() => handlerClick ('Shorts')} className="Shorts categoria" to={`/categoria/2`}> 
                    Shorts
                  </NavLink></li>
                <li>
                  <NavLink onClick={() => handlerClick ('Ropa de Entrenamiento')} className="Ropa de Entrenamiento categoria" to={`/categoria/3`}> 
                    Ropa de Entrenamiento
                  </NavLink></li>
            </ul>
        </nav>
      

        <CartWidget/>

    </header>


  )
}

export default NavBar
        
        
        /* 
        /* <header>
        <h1>Tienda del Rey de Copas</h1>

        <nav>
            <ul>
                <li>Camisetas</li>
                <li>Short</li>
                <li>Ropa de Entrenamiento</li>
                <li>Ropa tiempo libre</li>
                <li>Medias</li>

            </ul>
        </nav>
      

        <CartWidget/

    </header> */ 
