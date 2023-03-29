
import { Navbar } from "./components/navBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeContainer } from "./components/homeContainer/HomeContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categorias from "./components/categorias/Categorias";
import Form from "./components/form/form"
import Cart from "./components/cartWidget/Cart";
import CartContextProvider from "./context/CartContext";
import ItemDetailContainerLog from "./components/itemDetailContainer/ItemDetailContainerLog";
import { FormikFormulario } from "./components/formik/FormikFormulario";



function App() {

  //crear enrutamiento

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <HomeContainer />

        <Routes>
          <Route path="/" element={<Categorias />} />
          <Route path="/Category/" element={<Categorias />} />
          <Route path="/Category/:categoryName" element={<Categorias />} />
          <Route path="/checkout" element={<Form />} />

          <Route path="/itemDetail/:id" element={<ItemDetailContainerLog/>}></Route>
          <Route path="/itemDetail" element={<ItemDetailContainer />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/formik" element={<FormikFormulario/>} />
          <Route path="*" element={<h1>No existe esta ruta</h1>} />

        </Routes>

      </CartContextProvider>

    </BrowserRouter>

  );
}

export default App;
