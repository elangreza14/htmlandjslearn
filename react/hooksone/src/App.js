import "./App.css";
import { Accordion } from "./components";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

// const SearchTest = "Leanne";

// useState
function App() {
  const [auth, setAuth] = useState({
    name: "kondisi awal",
    login: true,
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // 404
      .then((result) => {
        setResults(result.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  console.log(results);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const searchList = useMemo(() => {
    // const searchIndicators = ["name", "username", "email", "website"];
    const searchIndicatorsNew = [
      { indicator: ["name"] },
      { indicator: ["address", "city"] },
    ];
    return results.filter((result) => {
      let find = false;
      // eslint-disable-next-line array-callback-return
      searchIndicatorsNew.map((searchIndicators) => {
        const res =
          searchIndicators.indicator.length > 1
            ? result[searchIndicators.indicator[0]][
                searchIndicators.indicator[1]
              ]
                .toLowerCase()
                .includes(search.toLowerCase())
            : result[searchIndicators.indicator[0]]
                .toLowerCase()
                .includes(search.toLowerCase());

        if (res === true) {
          find = true;
        }
      });
      return find;

      // return (
      //   result.name.toLowerCase().includes(search.toLowerCase()) ||
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      //   result.username.toLowerCase().includes(search.toLowerCase())
      // );
    });
  }, [search, results]);

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
        <div>
          <input
            style={{
              height: 50,
              fontSize: 24,
              margin: 10,
              width: 500,
              padding: 10,
            }}
            value={search}
            onChange={handleSearch}
          />
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
          ) : results.length === 0 ? (
            <div>Loading</div>
          ) : (
            searchList?.map((data, index) => {
              return (
                <Accordion
                  header={data.name + " | " + data.username}
                  key={index}
                >
                  <p className="App-p">{data.phone}</p>
                  <p className="App-p">{data.website}</p>
                  <p className="App-p">{data.username}</p>
                  <p className="App-p">{data.email}</p>
                  <p className="App-p">{data.address.city}</p>
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
