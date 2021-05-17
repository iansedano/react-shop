import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const products = require('./products.json')

function ProductDescription({description}){
  const style = {
    "height": "5.5ex",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  }
  return(
    <p style={style}>{description}</p>
  )
}

function ProductContainer({ product }){
  const style = {
    "padding": "20px",
    "textAlign": "center",
    "width": "300px",
    "height": "500px"
  }
  return (
    <div style={style}>
      <h2>{product.title}</h2>
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
