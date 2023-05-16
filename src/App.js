import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { CarritoProvider } from "./components/Context/CarritoContext";
import Cart from "./components/Cart/Cart";

   function App() {
      return (
        <>
          <BrowserRouter>
            <CarritoProvider>
              <NavBar />
              <Routes>
                <Route path='/' element={ <ItemListContainer greeting= {"Bienvenido, vestite con la ropa del rey de copas"}/> } />
                <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
                <Route path='/Item/:idItem' element={ <ItemDetailContainer/> }/>
                <Route path="/Cart" element={<Cart/>} />
                <Route path="*" element={<h2> Sitio en Construccion </h2>} />
              </Routes>
            </CarritoProvider>
          </BrowserRouter>
    
    </>
 );
}

export default App;
