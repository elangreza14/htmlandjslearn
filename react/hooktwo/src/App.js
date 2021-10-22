import { useCallback, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([{ name: "mandi", isCompleted: true }]);
  const [result, setResult] = useState("");

  const handleAddTodos = useCallback(() => {
    setTodos((old) => [
      ...old,
      { name: inputRef.current.value, isCompleted: false },
    ]);
    setResult("");
    inputRef.current.focus();
  }, []);

  const handleDoneTodos = useCallback((e) => {
    console.log(e);
    setTodos((old) => {
      // e == 3
      // true => !true == false
      // false => !false == true
      return old.map((todo, index) =>
        index === e ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            ref={inputRef}
            style={{ width: 300, height: 50, fontSize: 25 }}
            value={result}
            onChange={(e) => setResult(e.target.value)}
          />
          <div style={{ margin: 20 }} />
          <button
            onClick={handleAddTodos}
            style={{ width: 300, height: 50, fontSize: 25 }}
            type="button"
          >
            {" "}
            Submit
          </button>
        </div>
        <div>
          {todos.length > 0 &&
            todos.map((todo, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center", margin: 20 }}
                >
                  {todo.isCompleted === true ? "sudah" : "belum"} {todo.name}
                  <button
                    style={{ margin: 10 }}
                    onClick={() => handleDoneTodos(index)}
                  >
                    {todo.isCompleted === true ? "Undone" : "Done"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
