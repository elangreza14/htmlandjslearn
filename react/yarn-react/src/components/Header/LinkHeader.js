import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// passing props

// destructuring props
const LinkHeader = ({ children, src }) => {
  return (
    <Link to={src} className="header-link">
      {children}
    </Link>
  );
};

export default LinkHeader;

// default props
// const LinkHeader = (props) => {
//   //   console.log("isi nya", props);
//   return (
//     <div onClick={() => console.log("cek log", props.src)}>
//       {props.children}
//     </div>
//   );
// };
