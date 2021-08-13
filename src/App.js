import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import laptop1 from "./images/laptop-2.jpg";

const App = () => {
  const [loading, setloading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/karianca-store/main/src/components/DataList/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setloading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-content-center align-items-center h-100 bg-dark text-white">
          <Spinner animation="border" role="status"></Spinner>
          <span className="visually-hidden  mr-auto" size="lg">
            Loading...
          </span>
        </div>
      ) : (
        <div>
          <NavBar
            link1="Nosotros"
            link2="Productos"
            link3="Ofertas"
            link4="Carrito de compras"
          />
          <div className="row">
            {users.map((user) => {
              return (
                <ItemListContainer
                  key={user.id}
                  name={user.title}
                  text="this is a description text"
                  imagenUrl={laptop1}
                  stock={10}
                />
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default App;
