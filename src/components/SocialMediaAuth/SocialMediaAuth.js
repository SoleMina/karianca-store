import React from "react";
import { useHistory } from "react-router-dom";

import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

//Import context
import { useItemsContext } from "../../CartContext";

import { facebookProvider } from "../SocialMediaAuth/Auth";

const SocialMediaAuthComponent = () => {
  const history = useHistory();
  const {
    totalPrice,
    addProduct,
    cartItems,
    removeItem,
    orderTrue,
    lastOrder
  } = useItemsContext();

  const SocialMediaAuth = (provider) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("FACEBOOK", result);
        console.log("NAME", result.user.displayName);
        addProduct(
          result.user.displayName,
          null,
          result.user.email,
          cartItems,
          totalPrice
        );

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  const loginSocial = (provider) => {
    SocialMediaAuth(provider);
    orderTrue();
    removeItem();
    lastOrder();
    history.push("/orders");
  };
  return (
    <>
      <p>Log In with your Facebook Profile: </p>
      <button
        className="btn"
        style={{ backgroundColor: "#3b5998", color: "white" }}
        type="submit"
        onClick={() => loginSocial(facebookProvider)}
      >
        Facebook
      </button>
    </>
  );
};

export default SocialMediaAuthComponent;
