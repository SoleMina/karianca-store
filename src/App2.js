import React from "react";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import laptop1 from "./images/laptop-2.jpg";

class App2 extends React.Component {
  state = { loading: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  /*
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          setloading(false);
        });
    }, 1000);
  }, []);
  */

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
          <div className="row">
            <ItemListContainer
              name="Laptop Chuwi"
              text="Esta es una lista del container"
              imagenUrl={laptop1}
            />
            <ItemListContainer
              name="Laptop Chuwi"
              text="Esta es una lista del container"
              imagenUrl={laptop1}
            />
            <ItemListContainer
              name="Laptop Chuwi"
              text="Esta es una lista del container"
              imagenUrl={laptop1}
            />
          </div>
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

export default App2;
