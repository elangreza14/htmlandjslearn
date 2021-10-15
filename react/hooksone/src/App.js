import "./App.css";
import { Accordion } from "./components";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

// useState
function App() {
  const [auth, setAuth] = useState({
    name: "kondisi awal",
    login: true,
  });
  const [result, setResult] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // 404
      .then((res) => {
        console.log(res);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  console.log(error);

  const authLoginLogout = useCallback(() => {
    if (auth.login === true) {
      setAuth((previousValue) => {
        return { ...previousValue, name: "", login: !previousValue.login };
      });
    } else {
      setAuth((previousValue) => {
        return {
          ...previousValue,
          name: "di trigger oleh useEffect",
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
          {error === true ? (
            <div>Error Server</div>
          ) : result.length === 0 ? (
            <div>Loading</div>
          ) : (
            result?.map((data, index) => {
              return (
                <Accordion header={data.name} key={index}>
                  <p className="App-p">{data.phone}</p>
                  <p className="App-p">{data.website}</p>
                  <p className="App-p">{data.username}</p>
                </Accordion>
              );
            })
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
