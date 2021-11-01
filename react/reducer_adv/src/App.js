import React, { useMemo, useReducer } from "react";
//useReducer Advance
import "./App.css";
import { initialStateProduct, productReducer } from "./reducer/productReducer";

const App = () => {
  const [state, dispatch] = useReducer(productReducer, initialStateProduct);

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
          <h3>Checkout ({totalQty.totalCart})</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {state.products.map((product, index) => {
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
                  disabled={state.checkout.findIndex(
                    (x) => x.name === product.name
                  )}
                >
                  -
                </button>
                {product.qty}{" "}
                {product.qty > 0 ? (
                  <button
                    style={{ width: 30, height: 30 }}
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        stuff: product.name,
                        link: product.link,
                      })
                    }
                  >
                    +
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* <h3>Checkout</h3>
        <div style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          {state.checkout.map((stuff, index) => {
            if (stuff.qty > 0) {
              return (
                <div key={index} style={{ width: 300, margin: 10 }}>
                  {stuff.name} - {stuff.qty}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div> */}
      </header>
    </div>
  );
};

export default App;
