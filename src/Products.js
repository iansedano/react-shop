import React from "react";
import { ProductContainer } from "./ProductContainer";

export function ProductGrid({ productList }) {
  const style = {
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={style}>
      {productList.map((product, i) => {
        return <ProductContainer key={i} product={product} />;
      })}
    </div>
  );
}
