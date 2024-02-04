import React, { useRef, Fragment, useState, useCallback } from 'react';
import './App.css'
import logo from './images/saz-infotech-w-removebg-preview.png'


const App = () => {
   return(
   <Fragment>
     <div className='main-div'>
      <div className='header'>
        <header>
          <div className='logo-header'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='header-btns'>
            <button>About us</button>
            <button>Our work</button>
            <button>Services</button>
            <button className="contact-button" style={{border: '1px solid black', borderRadius: '25px', padding: '10px 20px'}}>Contact us</button>
          </div>
        </header>
      </div>
    </div>
   </Fragment>
   )
};

export default App