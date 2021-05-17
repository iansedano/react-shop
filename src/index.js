import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ProductGrid } from './Products'

const productList = require('./products.json')

ReactDOM.render(<ProductGrid productList={productList}/>,document.getElementById('root'));
