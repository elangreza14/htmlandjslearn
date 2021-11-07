import React, { useMemo } from "react";
import { useCartStateContext } from "../../context/CartContext";
import ActionCartCard from "./ActionCartCard";

const RenderCart = () => {
  const state = useCartStateContext();
  return useMemo(() => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {state.checkout.map((product, index) => {
          return (
            <div key={index} style={{ width: 300, margin: 10 }}>
              <div>
                <img
                  src={product.link}
                  alt={product.link}
                  style={{ width: 200, height: 200 }}
                />
              </div>
              <div>{product.name}</div>
              <ActionCartCard product={product} />
            </div>
          );
        })}
      </div>
    );
  }, [state.checkout]);
};

export default RenderCart;
