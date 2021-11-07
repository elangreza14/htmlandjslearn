import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import RenderProduct from "../components/product/RenderProduct";
import { useCartStateContext } from "../context/CartContext";

const ProductPage = () => {
  const state = useCartStateContext();

  const totalQty = useMemo(() => {
    return {
      totalProduct: state.products.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.qty;
      }, 0),
      totalCart: state.checkout.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.qty;
      }, 0),
    };
  }, [state.checkout, state.products]);

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
            <h3>Product ({totalQty.totalProduct})</h3>
            <h3>
              <Link to="/cart" style={{ color: "white" }}>
                Checkout ({totalQty.totalCart})
              </Link>
            </h3>
          </div>
          <RenderProduct />
        </header>
      </div>
    );
  }, [totalQty.totalCart, totalQty.totalProduct]);
};

export default ProductPage;
