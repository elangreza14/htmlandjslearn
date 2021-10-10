import React from "react";
import LinkHeader from "./LinkHeader";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const match = useLocation();
  // console.log(match.pathname);
  // ketika page sama dengan "/dashboard" maka ganti link menjadi logout
  // if else tapi di dalam operator return

  return (
    <div className="header">
      <LinkHeader to={"/"} className="header-link">
        IGRACIAS
      </LinkHeader>
      {match.pathname === "/dashboard" ? (
        <div className="header-right">
          <div style={{ margin: 30 }} />
          <LinkHeader src="/">LOGOUT</LinkHeader>
        </div>
      ) : (
        <div className="header-right">
          <LinkHeader src="/login">LOGIN</LinkHeader>
          <div style={{ margin: 30 }} />
          <LinkHeader src="/signup">SIGNUP</LinkHeader>
        </div>
      )}
    </div>
  );
};

export default Header;
