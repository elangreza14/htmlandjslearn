import { useReducer } from "react";
import "./App.css";

const initialState = {
  products: [
    { name: "indomie", qty: 5 },
    { name: "kopi", qty: 3 },
  ],
  checkout: [],
};

// state is callback state
// action is function / rules
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        checkout:
          state.checkout.findIndex((x) => x.name === action.stuff) === -1
            ? [...state.checkout, { qty: 1, name: action.stuff }]
            : state.checkout.map((x) => {
                if (x.name === action.stuff) {
                  return { ...x, qty: x.qty + 1 };
                } else {
                  return x;
                }
              }),
        products: state.products.map((x) => {
          if (x.name === action.stuff) {
            return { ...x, qty: x.qty - 1 };
          } else {
            return x;
          }
        }),
      };
    case "REMOVE_FROM_CART":
      return state;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div>{JSON.stringify(state)}</div> */}
        <div style={{ margin: 10 }} />
        <h3>Product</h3>
        <div style={{ width: 300 }}>
          {state.products.map((product, index) => {
            return (
              <div key={index}>
                {product.name} -
                <button
                  // TODO implement REMOVE_FROM_CART RULES
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART" })}
                >
                  -
                </button>
                {product.qty}{" "}
                {product.qty > 0 ? (
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", stuff: product.name })
                    }
                  >
                    +
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
        <div style={{ margin: 10 }} />
        <h3>Checkout</h3>
        <div style={{ display: "flex", flexDirection: "row", color: "white" }}>
          {state.checkout.map((stuff, index) => {
            return (
              <div key={index}>
                {stuff.name} - {stuff.qty}
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default App;
