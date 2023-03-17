import React from "react";
import { BrowserRouter } from "react-router-dom";
import Brands from "../brands/Brands";
import Contact from "../contact/contact";
import Detail from "../detail/detail";
import Discount from "../Discount/discount";
import Footer from "../footer/footer";
import Header from "../header/header";
import Login from "../login/login";
import Product from "../products/product";
import Topsale from "../topsale/Topsale";
const Mainpage = () => {
    return(
        <>
        <BrowserRouter>
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
    </div>
    
        </BrowserRouter>
        </>
    )
}
export default Mainpage;