import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

   function App() {
      return (
        <>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting= {"Bienvenido, vestite con la ropa del rey de copas"}/> } />
              <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
              <Route path='/Item/:idItem' element={ <ItemDetailContainer/> }/>
            </Routes>
          
          </BrowserRouter>
    
    </>
 );
}

export default App;
