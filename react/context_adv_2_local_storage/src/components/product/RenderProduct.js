import React, { useMemo } from "react";
import { useCartStateContext } from "../../context/CartContext";
import ActionProductCard from "./ActionProductCard";

const RenderProduct = () => {
  const state = useCartStateContext();
  return useMemo(() => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {state.products.map((product, index) => {
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
              <ActionProductCard product={product} />
            </div>
          );
        })}
      </div>
    );
  }, [state.products]);
};

export default RenderProduct;
