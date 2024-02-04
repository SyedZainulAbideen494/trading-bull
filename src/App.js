import React, { useRef, Fragment, useState, useCallback } from 'react';
import './App.css'
import logo from './images/saz-infotech-w-removebg-preview.png'
import banner from './images/Untitled design.png'
import code from './images/icons8-code-50.png'
import maintaion from './images/icons8-development-50.png'
import design from './images/icons8-design-50.png'
import upgrade from './images/icons8-update-50.png'

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
      <div className='hero-section'>
      <section className='hero-section-text'>
        <h1>
          Crafting <span style={{color: '#9E73DA'}}>Websites</span><br/>
          & Digital Excellence
        </h1>
        <div className="button-container-hero-section">
          <button>Our Work</button>
          <button>Our Services</button>
        </div>
      </section>
      <section className='hero-section-img'></section>
    </div>
    <div className='section-1'>
        <section className='section-1-textarea'>
            <h2>Our Work Offers</h2>
            <button>Services</button>
        </section>
        <section className='section-1-offers'>
            <div className='offer-section-1'>
                <img src={design}/>
                <h3>Design</h3>
                <p>We design your website from scratch</p>
            </div>
            <div className='offer-section-1'>
                <img src={code}/>
                <h3>Development</h3>
                <p>We develop your website from scratch</p>
            </div>
            <div className='offer-section-1'>
                <img src={maintaion}/>
                <h3>manage</h3>
                <p>We manage and maintane your website after development</p>
            </div>
            <div className='offer-section-1'>
                <img src={upgrade}/>
                <h3>Update</h3>
                <p>We update your website from time to time</p>
            </div>
        </section>
    </div>
    </div>
   </Fragment>
   )
};

export default App