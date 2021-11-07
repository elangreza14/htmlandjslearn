import React, { useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { state, dispatch, counter } = useContext(CartContext);

  const totalQty = useMemo(() => {
    return state?.products && state?.products
      ? {
          totalProduct: state?.products?.reduce(
            (previousValue, currentValue) => {
              return previousValue + currentValue.qty;
            },
            0
          ),
          totalCart: state?.checkout?.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.qty;
          }, 0),
        }
      : { totalProduct: 0, totalCart: 0 };
  }, [state.checkout, state.products]);

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
          {counter}
          <h3>Product ({totalQty.totalProduct})</h3>
          <h3>
            <Link to="/cart" style={{ color: "white" }}>
              Checkout ({totalQty.totalCart})
            </Link>
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {state &&
            state?.products?.map((product, index) => {
              return (
                <div key={index} style={{ width: 300, margin: 10 }}>
                  <div>
                    <img
                      src={product.link}
                      alt={product.link}
                      style={{ width: 200, height: 200 }}
                    />
                  </div>
                  <div>{product.name}</div>
                  <button
                    style={{ width: 30, height: 30 }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        stuff: product.name,
                      })
                    }
                    disabled={
                      product.qty === product.defaultValue ? true : false
                    }
                  >
                    -
                  </button>
                  {product.qty}{" "}
                  <button
                    style={{ width: 30, height: 30 }}
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        stuff: product.name,
                        link: product.link,
                        defaultValue: product.defaultValue,
                      })
                    }
                    disabled={product.qty === 0 ? true : false}
                  >
                    +
                  </button>
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
};

export default ProductPage;
