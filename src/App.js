import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import laptop1 from "./images/laptop-2.jpg";
//import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [loading, setloading] = useState(true);
  const [users, setUsers] = useState([]);
  //const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
                  name={user.name}
                  text={user.email}
                  imagenUrl={laptop1}
                  stock={10}
                />
              );
            })}
          </div>
          <div>
            <p>loremmmm</p>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
