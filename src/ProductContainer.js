import React from "react";

function ProductDescription({ description }) {
  const style = {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    margin: "20px"
  };
  return <p style={style}>{description}</p>;
}

function ProductTitle({ title }) {
  const containerStyle = {
    height: "11em",
    width: "90%",
    margin: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headerStyle = {};

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>{title}</h2>
    </div>
  );
}

function ProductImage({ src }) {
  const containerStyle = {
    height: "40%",
    width: "90%",
    margin: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <img
        src={src}
        style={{
          maxHeight: "150px",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      ></img>
    </div>
  );
}

export function ProductContainer({ product }) {
  const style = {
    margin: "20px",
    background: "white",
    border: "2px solid blue",
    borderRadius: "5px",
    textAlign: "center",
    width: "300px",
    height: "500px",
  };
  return (
    <div style={style}>
      <ProductTitle title={product.title} />
      <ProductDescription description={product.description} />
      <ProductImage src={product.image} />
    </div>
  );
}
