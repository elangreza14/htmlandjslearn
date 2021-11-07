import React, { createContext, useReducer, useEffect } from "react";
import { useCookies } from "react-cookie";
import { initialStateProduct, productReducer } from "../reducer/productReducer";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(
  //   productReducer,
  //   initialStateProduct,
  //   () =>
  //     window.localStorage.getItem
  //       ? JSON.parse(window.localStorage.getItem("test"))
  //       : initialStateProduct
  // );

  // useEffect(() => {
  //   window.localStorage.setItem("test", JSON.stringify(state));
  // }, [state]);
  const [cookies, setCookie] = useCookies(["name"]);
  const [state, dispatch] = useReducer(
    productReducer,
    initialStateProduct,
    () => {
      return cookies && cookies?.name?.products && cookies?.name?.checkout
        ? {
            products: cookies.name.products,
            checkout: cookies.name.checkout,
          }
        : initialStateProduct;
    }
  );

  useEffect(() => {
    setCookie("name", JSON.stringify(state), { path: "/" });
  }, [setCookie, state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
