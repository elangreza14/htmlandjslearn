import React, { useEffect, createContext, useReducer, useContext } from "react";
import { initialStateProduct, productReducer } from "../reducer/productReducer";

export const CartStateContext = createContext(null);
export const CartDispatchContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialStateProduct,
    () =>
      window.localStorage.getItem("frd-software")
        ? JSON.parse(window.localStorage.getItem("frd-software"))
        : initialStateProduct
  );

  useEffect(() => {
    window.localStorage.setItem("frd-software", JSON.stringify(state));
  }, [state]);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartStateContext = () => {
  const state = useContext(CartStateContext);
  return state;
};

export const useCartDispatchContext = () => {
  const dispatch = useContext(CartDispatchContext);
  return dispatch;
};

export default CartContextProvider;
