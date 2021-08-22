import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//React-Router-Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//Views
import Home from "./views/Home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar
          link1="Nosotros"
          link2="Productos"
          link3="Ofertas"
          link4="Carrito de compras"
        />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
