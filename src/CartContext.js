import React, { useState, useContext, createContext, useEffect } from "react";

//.- CREAR EL CONTEXTO
export const ItemsContext = createContext({});
//export const ItemsContext =  createContext();

//.- CREATE COMPONENT PROVIDER
export const useItemsContext = () => useContext(ItemsContext);

//- PASAR PROPS DENTRO DEL COMPONENTE PROVIDER
export const CartContext = ({ children }) => {
  //Añadir localstore
  const itemsInLocal = () => {
    if (localStorage.getItem("cartItems") !== null) {
      return JSON.parse(localStorage.getItem("cartItems"));
    } else {
      return [];
    }
  };

  //const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(itemsInLocal);
  console.log("CART ITEMS", cartItems);
  const isInCart = (id) => cartItems.some((e) => e.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCartItem = cartItems.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCartItems(newCartItem);
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clear = () => setCartItems([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });

  //REETURNCONTEXT WITH A .PROVIDER
  return (
    <ItemsContext.Provider
      value={{ cartItems, addToCart, removeItem, clear, itemsInLocal }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
