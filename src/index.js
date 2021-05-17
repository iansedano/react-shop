import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const products = require('./products.json')

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
  const style = {
    "lineHeight": "1.5em",
    "height": "9em",
    "margin": "auto"
  }
  return <h2 style={style}>{title}</h2>
}

function ProductContainer({ product }){
  const style = {
    "margin": "20px",
    "background": "grey",
    "textAlign": "center",
    "width": "300px",
    "height": "500px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center"
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

function Products(){
  const style = {
    "display": "flex",
    "flexWrap": "wrap"
  }
  return (
    <div style={style}>
      {
        products.map((product, i) => {
          return <ProductContainer key={i} product = {product}/>
        })
      }
    </div>
  )
}


ReactDOM.render(<Products/>,document.getElementById('root'));
