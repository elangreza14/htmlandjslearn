import React from "react";
import FormLogin from "./FormLogin";

const LoginPage = () => {
  // {/* posisi di tengah */}
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
        <h2 style={{ color: "white" }}>Igracias Login Page NEw</h2>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
