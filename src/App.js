import React from "react";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  state = { loading: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  renderContent() {
    if (this.state.loading === false) {
      return (
        <div>
          <NavBar
            link1="Nosotros"
            link2="Productos"
            link3="Ofertas"
            link4="Carrito de compras"
          />
          <ItemListContainer content="Esta es una lista del container" />
        </div>
      );
    }
    return (
      <div className="d-flex justify-content-center align-content-center align-items-center h-100 bg-dark text-white">
        <Spinner animation="border" role="status"></Spinner>
        <span className="visually-hidden  mr-auto" size="lg">
          Loading...
        </span>
      </div>
    );
  }
  render() {
    return <div className="h-100">{this.renderContent()}</div>;
  }
}

export default App;
