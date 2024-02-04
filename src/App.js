import React, { useRef, Fragment, useState, useCallback } from 'react';
import './App.css'
import logo from './images/saz-infotech-w-removebg-preview.png'
import banner from './images/Untitled design.png'
import code from './images/icons8-code-50.png'
import maintaion from './images/icons8-development-50.png'
import design from './images/icons8-design-50.png'
import upgrade from './images/icons8-update-50.png'
import saz_pg from './images/S.png'
import dropment from './images/Dropment (2).png'

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
            <button className="contact-button" style={{border: '1px solid #9E73DA', borderRadius: '25px', padding: '10px 20px'}}>Contact us</button>
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
            <h2>Our Work<br/> Offers</h2>
            <button>Contact us</button>
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
    <div className='section-2'>
  <div className='heading-section-2'>
    <h2>Our Projects</h2>
  </div>
  <div className='projects-section-2'>
    <section className='project-section-2'>
      <div className='text-area-section-2-project'>
        <h2>Dropment</h2>
        <p>An all-in-one solution to set up your online store and sell online with ease!.</p>
        <p>Dropment offers various tools such as a shop builder, stats about your online shop, and sales data, customer data, etc.</p>
        <p>Dropment also offers various features like linking with your friends, collaborating with others to start a new business venture, chatting with customers and friends, etc!</p>
        <a href='https://www.dropment.online/'>
        <button>Visit</button>
        </a>
      </div>
      <div className='img-section-2-project'>
        <img src={dropment} alt='Dropment Project' />
      </div>
    </section>
    <section className='project-section-2'>
      <div className='text-area-section-2-project'> 
        <h2>Saz PG</h2>
        <p>Saz PG provides sharing rooms only for men at an affordable pricing, with basic amenities such as dinner, washing machine, wifi, etc.</p>
        <p>Saz PG offers 2 sharing, 3 sharing, 4 sharing rooms for men, monthly basis and daily basis.</p>
        <a href='https://saz-pg.vercel.app/'>
        <button>Visit</button>
        </a>
      </div>
      <div className='img-section-2-project'>
        <img src={saz_pg} alt='Saz PG Project' />
      </div>
    </section>
  </div>
</div>
<div className='section-3'>
    <div className='img-section-3'></div>
    <div className='text-section-3'>
        <h2>Build Website And Grow Online Presence For Yur Business</h2>
        <p>
            Transform your business with our expert website
             development solutions. We create tailored,
              high-performing websites that not only represent
               your brand but also drive growth. Our focus 
               is on delivering a seamless user experience,
                innovative design, and scalable functionality 
                to propel your online success. Ready to elevate 
                your digital presence? Let's build something extraordinary.
        </p>
        <button>Contact Us</button>
    </div>
</div>
    </div>
   </Fragment>
   )
};

export default App