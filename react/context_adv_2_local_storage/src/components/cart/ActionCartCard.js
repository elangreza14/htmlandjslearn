import React, { useMemo } from "react";
import { useCartDispatchContext } from "../../context/CartContext";

const ActionCartCard = ({ product }) => {
  const dispatch = useCartDispatchContext();
  return useMemo(() => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 50px",
        }}
      >
        <button
          style={{
            width: 30,
            height: 30,
            fontSize: 25,
            fontWeight: "bolder",
          }}
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              stuff: product.name,
            })
          }
        >
          -
        </button>
        {product.qty}{" "}
        <button
          style={{
            width: 30,
            height: 30,
            fontSize: 25,
            fontWeight: "bolder",
          }}
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              stuff: product.name,
              link: product.link,
            })
          }
          disabled={product.qty === product.defaultValue ? true : false}
        >
          +
        </button>
      </div>
    );
  }, [dispatch, product.defaultValue, product.link, product.name, product.qty]);
};

export default ActionCartCard;
