import React, { createContext, useReducer } from "react";
import { initialStateProduct, productReducer } from "../reducer/productReducer";

export const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialStateProduct);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
