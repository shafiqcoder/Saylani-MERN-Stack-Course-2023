import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import CenterContent from './centercontent';
import Product from './product';
import Footer from './footer';
import'./index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CenterContent/>
    <Product/>
    <Footer/>
  </React.StrictMode>
);