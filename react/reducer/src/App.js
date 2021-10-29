import { useReducer } from "react";
import "./App.css";

const initialState = { counter: 1, name: "elangreza" };

// state is callback state
// action is function / rules
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify(state)}</div>
        <div style={{ margin: 10 }} />
        <div style={{ display: "flex", flexDirection: "row", color: "white" }}>
          <input
            value={state.name}
            onChange={(event) =>
              dispatch({ type: "CHANGE_NAME", name: event.target.value })
            }
          />
        </div>
        <div style={{ margin: 10 }} />
        <div style={{ display: "flex", flexDirection: "row", color: "white" }}>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>dec</button>
          <div style={{ margin: 20 }}>{state.counter}</div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>inc</button>
        </div>
      </header>
    </div>
  );
};

export default App;
