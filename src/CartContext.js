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

  //Array of products
  const [cartItems, setCartItems] = useState(itemsInLocal);
  //Sum price of all the products in the cart
  const [totalPrice, setTotalPrice] = useState(0);
  //Sum of products in the cart
  const [totalProducts, setTotalProducts] = useState(0);

  const [user, setUser] = useState("");

  console.log("CART ITEMS", cartItems);
  const isInCart = (id) => cartItems.some((e) => e.id === id);

  //Add product to array
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

  //Delete item from array
  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  //Clear all the array to empty
  const clear = () => setCartItems([]);

  //Update the ammount of Products in the cart
  const updateItems = () => {
    let sumaProductos = cartItems.reduce((a, item) => a + item.quantity, 0);
    setTotalProducts(sumaProductos);
  };

  //Get price from a especific item of the array
  const getPrice = () => {
    const total = cartItems.reduce(
      (a, item) => a + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  //Keep items updated
  useEffect(() => {
    updateItems();
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    getPrice();
  });

  //REETURNCONTEXT WITH A .PROVIDER
  return (
    <ItemsContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        clear,
        itemsInLocal,
        totalPrice,
        totalProducts,
        user,
        setUser
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
