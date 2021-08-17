import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <NavBar
          link1="Nosotros"
          link2="Productos"
          link3="Ofertas"
          link4="Carrito de compras"
        />
        <div className="row">
          <ItemListContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
