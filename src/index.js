import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const products = require('./products.json')

function ProductDescription({description}){
  return(
    <p>{description}</p>
  )
}

function ProductContainer({ product }){
  return (
    <div>
    <h2>{product.title}</h2>
    <ProductDescription description = {product.description}/>
    </div>
  )
}

function App(){
  return products.map((product, i) => {
    return <ProductContainer key={i} product = {product}/>
  })
}


ReactDOM.render(<App />,document.getElementById('root'));
