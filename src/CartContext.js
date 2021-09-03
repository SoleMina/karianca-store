import React, { useState, useContext, createContext } from "react";

//.- CREAR EL CONTEXTO
export const ItemsContext = createContext({});
//export const ItemsContext =  createContext();

//.- CREATE COMPONENT PROVIDER
export const useItemsContext = () => useContext(ItemsContext);

//- PASAR PROPS DENTRO DEL COMPONENTE PROVIDER
export const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
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

  //REETURNCONTEXT WITH A .PROVIDER
  return (
    <ItemsContext.Provider value={{ cartItems, addToCart, removeItem, clear }}>
      {children}
    </ItemsContext.Provider>
  );
};
