import React, { useState, useContext, createContext, useEffect } from "react";

//Import firebase
import {
  collection,
  query,
  getDocs,
  setDoc,
  doc,
  orderBy,
  limit,
  Timestamp,
  updateDoc,
  increment
} from "firebase/firestore";

//Import db
import { db } from "./firebase";

//.- Create context
export const ItemsContext = createContext({});
//export const ItemsContext =  createContext();

//.- Create component provider
export const useItemsContext = () => useContext(ItemsContext);

//- Pass props inside provider component
export const CartContext = ({ children }) => {
  //Add localstore
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
  //Item
  const [item, setItem] = useState([]);
  //Order
  const [order, setOrders] = useState(false);
  //OrderiD (TicketId)
  const [orderId, setOrderId] = useState([]);

  const ordersPurchase = () => {
    if (order === false) {
      setOrders(true);
      setTotalProducts(0);
    } else {
      setOrders(false);
      setTotalProducts(0);
    }
  };

  //Check if an element have the same id
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

  //Change order state
  const orderTrue = () => setOrders(true);
  const orderFalse = () => setOrders(false);
  //const orderChange = () => setOrders(!order);

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

  //Add Product to firebase with Form
  const addProduct = async (
    buyerName,
    buyerPhone,
    buyerEmail,
    cartItems,
    totalPrice
  ) => {
    const comprasRef = collection(db, "comprar");
    const object = {
      buyer: {
        name: buyerName,
        phone: buyerPhone,
        email: buyerEmail
      },
      item: cartItems,
      date: Timestamp.fromDate(new Date()),
      total: totalPrice
    };

    await setDoc(doc(comprasRef), object);
    console.log("Producto agregado!!!!");

    const updateStock = () => {
      cartItems.forEach((element) => {
        const elementRef = doc(db, "products", element.id);
        updateDoc(elementRef, { stock: increment(element.quantity * -1) });
      });
    };
    updateStock();
  };
  const lastOrder = async () => {
    const arrayComprar = [];
    const q = query(
      collection(db, "comprar"),
      orderBy("date", "desc"),
      limit(1)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      arrayComprar.push(doc.id);
    });
    setOrderId([...arrayComprar]);
    return orderId;
  };

  //REETURNCONTEXT WITH A .PROVIDER
  return (
    <ItemsContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeItem,
        clear,
        itemsInLocal,
        totalPrice,
        addProduct,
        item,
        setItem,
        totalProducts,
        setTotalProducts,
        ordersPurchase,
        order,
        orderTrue,
        orderFalse,
        isInCart,
        lastOrder,
        orderId
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
