import React from 'react';
import './App.css';
import  Header  from './components/header/header';
import Discount from './components/Discount/discount';
import Product from './components/products/product';
import Brands from './components/brands/Brands';
import Login from './components/login/login';
import Topsale from './components/topsale/Topsale';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Detail from './components/detail/detail';


const App = () => {
  return (
    <div>
      {/* Main Visual */}
      <Header />
      {/* Discount Items */}
      <div className='discount-sec'>
        <div className='dis-card'>
        <Discount title=''/>
        </div>
      </div>
      {/* Products Page */}
      <div className='product-sec scrollmargin' id="product-id">
        <Product />
      </div>
      {/* Brand Lists */}
      <div className='brands-sec scrollmargin' id="brands-id">
        <div className='inner-wrap'>
          <h2>Brand Lists</h2>
          <Brands />
        </div>
      </div>
      {/* Top Sale Page */}
      <div className='top-sale-sec scrollmargin' id="topsale-id">
        <div className='inner-wrap'>
          
          <Topsale/>
        </div>
      </div>
      {/* Contact Us */}
      <div className='contact-sec scrollmargin' id='c-id' >
        <div className='inner-wrap'>
          <Contact />
        </div>
      </div>

      {/* Login Page */}
      <div className='login-sec scrollmargin' id="login-id">
        <Login />
      </div>
      {/* Detail Page */}
      <div>
        <Detail />
      </div>
      {/* Footer */}
      <div className='footer-sec'>
        <Footer />
      </div>

    
      {/* <img src={require('./components/products/img/p04.jpeg')} alt="" />
      <img src={require('./components/products/img/p05.jpeg')} alt="" />
      <img src={require('./components/products/img/p06.jpeg')} alt="" />
      <img src={require('./components/products/img/p07.jpeg')} alt="" />
      <img src={require('./components/products/img/p08.jpeg')} alt="" />
      <img src={require('./components/products/img/p09.jpeg')} alt="" />
      <img src={require('./components/products/img/p10.jpeg')} alt="" />
      <img src={require('./components/products/img/p11.jpeg')} alt="" />
      <img src={require('./components/products/img/p12.jpeg')} alt="" />
      <img src={require('./components/products/img/p13.jpeg')} alt="" />
      <img src={require('./components/products/img/p14.jpeg')} alt="" />
       */}
      {/* <img src={require('./components/brands/img/adidas-logo.png')} alt="" /> */}
      {/* <img src={require('./components/Discount/img/discount-item02.png')} alt="Discount Products" />
      <img src={require('./components/Discount/img/discount-item03.png')} alt="Discount Products" /> */}
      {/* <img src={require('./components/brands/img/chanel.png')} alt="" /> */}
      {/* <img src={require('./components/brands/img/FILA.png')} alt="" /> */}
    </div>
    
  );
}

export default App;
