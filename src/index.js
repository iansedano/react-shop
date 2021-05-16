import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function ProductDescription(){
  return(
    <p>100GB of RAM and 500TB HD for 300$</p>
  )
}

function ProductContainer(){
  return (
    <div>
    <h2>Laptop</h2>
    <ProductDescription/>
    </div>
  )
}

function App(){
  return <ProductContainer/>

}


ReactDOM.render(<App />,document.getElementById('root'));
