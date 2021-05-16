import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const products = require('./products.json')

function ProductDescription(props){
  return(
    <p>{props.description}</p>
  )
}

function ProductContainer(props){
  return (
    <div>
    <h2>{props.product.title}</h2>
    <ProductDescription description = {props.product.description}/>
    </div>
  )
}

function App(){
  return <ProductContainer product = {products[0]}/>

}


ReactDOM.render(<App />,document.getElementById('root'));
