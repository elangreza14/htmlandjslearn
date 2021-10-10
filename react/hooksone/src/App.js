import "./App.css";
import { Accordion } from "./components";
import { FaBeer } from "react-icons/fa";
import { useCallback, useState } from "react";

// useState
function App() {
  const [auth, setAuth] = useState({
    name: "Muhammad Reza Elang",
    login: true,
  });

  const authLoginLogout = useCallback(() => {
    if (auth.login === true) {
      setAuth((previousValue) => {
        return { ...previousValue, name: "", login: !previousValue.login };
      });
    } else {
      setAuth((previousValue) => {
        return {
          ...previousValue,
          name: "Muhammad Reza Elang",
          login: !previousValue.login,
        };
      });
    }
  }, [auth.login]);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 25px",
          }}
        >
          <div>{auth.login === true ? auth.name : "Header"} </div>
          <div onClick={authLoginLogout}>
            {auth.login === true ? "Log Out" : "Log in"}{" "}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* dua state yang berbeda state yang pertama */}
          <Accordion header="Lorem Ipsum">
            <p className="App-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Accordion>
          {/* dua state yang berbeda state yang kedua*/}
          <Accordion header="Jangan Lupa minum air putih">
            <FaBeer />
          </Accordion>
        </div>
      </header>
    </div>
  );
}

export default App;
