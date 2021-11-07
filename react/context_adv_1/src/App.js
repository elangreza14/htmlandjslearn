import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContextProvider from "./context/CartContext";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
