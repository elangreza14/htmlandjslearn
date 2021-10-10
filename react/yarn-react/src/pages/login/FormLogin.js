import React from "react";
import { useHistory } from "react-router-dom";

const FormLogin = () => {
  const history = useHistory();

  return (
    <form
      onSubmit={(e) => {
        // e => event
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
        <label htmlFor="password" style={{ width: "100px", color: "white" }}>
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
        <button
          style={{ width: "100%", height: 40, fontSize: 20 }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormLogin;
