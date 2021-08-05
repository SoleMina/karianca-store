import React from "react";
import NavBar from "./components/NavBar";
import Spinner from "react-bootstrap/Spinner";

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
