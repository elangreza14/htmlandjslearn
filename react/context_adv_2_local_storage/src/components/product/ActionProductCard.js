import React, { useMemo } from "react";
import { useCartDispatchContext } from "../../context/CartContext";

const ActionProductCard = ({ product }) => {
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
          style={{ width: 30, height: 30 }}
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              stuff: product.name,
            })
          }
          disabled={product.qty === product.defaultValue ? true : false}
        >
          -
        </button>
        {product.qty}{" "}
        <button
          style={{ width: 30, height: 30 }}
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              stuff: product.name,
              link: product.link,
              defaultValue: product.defaultValue,
            })
          }
          disabled={product.qty === 0 ? true : false}
        >
          +
        </button>
      </div>
    );
  }, [dispatch, product.defaultValue, product.link, product.name, product.qty]);
};

export default ActionProductCard;
