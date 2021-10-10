import React from "react";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: 30,
          alignItems: "center",
          width: "400px",
          height: "350px",
          backgroundColor: "#a6202a",
        }}
      >
        <h2 style={{ color: "white" }}>Igracias SignUp Page</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            history.push("/dashboard");
          }}
        >
          <div
            style={{
              width: "300px",
              margin: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="email" style={{ width: "100px", color: "white" }}>
              Email
            </label>
            <input
              className="email"
              id="email"
              type="email"
              style={{ height: 25 }}
            />
          </div>
          <div
            style={{
              width: "300px",
              margin: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label
              htmlFor="password"
              style={{ width: "100px", color: "white" }}
            >
              Password
            </label>
            <input
              className="password"
              id="password"
              type="password"
              style={{ height: 25 }}
            />
          </div>
          <div style={{ marginTop: 30 }}>
            <button style={{ width: "100%", height: 40, fontSize: 20 }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
