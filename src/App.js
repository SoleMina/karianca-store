import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";

//Views
import Home from "./views/Home/Home";

//Importar Provider y envolver nuestra app
import { CartContext } from "./CartContext";

const App = () => {
  return (
    <CartContext>
      <Router>
        <div>
          <NavBar link1="Nosotros" link2="Ofertas" link3="Carrito de compras" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </CartContext>
  );
};

export default App;
