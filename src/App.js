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
                    <img src={logo}/>
                </div>
                <div className='header-btns'>
                    <button>About us</button>
                    <button>Our work</button>
                    <button>services</button>
                    <button>Contact us</button>
                </div>
            </header>
        </div>
    </div>
   </Fragment>
   )
};

export default App