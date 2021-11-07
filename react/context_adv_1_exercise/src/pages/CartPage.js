import React, { useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { state, dispatch } = useContext(CartContext);

  const totalQty = useMemo(() => {
    return state?.checkout
      ? {
          totalCart: state?.checkout?.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.qty;
          }, 0),
        }
      : { totalCart: 0 };
  }, [state.checkout]);

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {state &&
            state?.checkout.map((product, index) => {
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
                      })
                    }
                    disabled={
                      product.qty === product.defaultValue ? true : false
                    }
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

export default CartPage;
