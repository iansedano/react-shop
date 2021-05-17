import React from 'react';

function ProductDescription({description}){
  const style = {
    "overflow": "hidden",
    "display": "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical"
  }
  return(
    <p style={style}>{description}</p>
  )
}

function ProductTitle({ title }){
  const containerStyle = {
    "height": "11em",
    "width": "90%",
    "margin": "5%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  }

  const headerStyle = {
  }

  return <div style={containerStyle}>
      <h2 style={headerStyle}>{title}</h2>
    </div>
}

function ProductContainer({ product }){
  const style = {
    "margin": "20px",
    "background": "grey",
    "textAlign": "center",
    "width": "300px",
    "height": "500px",
  }
  return (
    <div style={style}>
      <ProductTitle title={product.title}/>
      <ProductDescription description = {product.description}/>
      <img
        src={product.image}
        style={{
          maxHeight:"150px",
          maxWidth:"100%",
          objectFit: "contain"
        }}>
      </img>
    </div>
  )
}

export function ProductGrid({productList}){
  const style = {
    "display": "flex",
    "flexWrap": "wrap"
  }
  return (
    <div style={style}>
      {
        productList.map((product, i) => {
          return <ProductContainer key={i} product = {product}/>
        })
      }
    </div>
  )
}