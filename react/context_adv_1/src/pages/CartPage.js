import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import RenderCart from "../components/cart/RenderCart";
import { useCartStateContext } from "../context/CartContext";

const CartPage = () => {
  const state = useCartStateContext();

  const totalQty = useMemo(() => {
    return {
      totalCart: state.checkout.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.qty;
      }, 0),
    };
  }, [state.checkout]);

  return useMemo(() => {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 50px",
            }}
          >
            <h3>Cart ({totalQty.totalCart})</h3>
            <h3>
              <Link to="/" style={{ color: "white" }}>
                Back to Home
              </Link>
            </h3>
          </div>
          <RenderCart />
        </header>
      </div>
    );
  }, [totalQty.totalCart]);
};

export default CartPage;
