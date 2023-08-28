import React, { useRef, Fragment, useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import './App.css'
import banner from './images/Untitled design (29).png'
import star from './images/Untitled design (17).png'
import abt1 from './images/Untitled design (30).png'
import abt2 from './images/Untitled design (28).png'
import abt3 from './images/Untitled design (31).png'
import book1 from './images/book1.jpg'
import book2 from './images/book2.jpg'

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cibvbv9', 'template_tyxfx6i', form.current, 'iI7mlvSPESWOVSMob')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true); // Set the submission status to true
      }, (error) => {
        console.log(error.text);
      });
  };
  const itemsRef = useRef(null);
  const aboutusRef = useRef(null);
  const contactusRef = useRef(null);

  const scrollToItems = () => {
    if (itemsRef.current) {
      itemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToaboutus = () => {
    if (aboutusRef.current) {
      aboutusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTocontactus = () => {
    if (contactusRef.current) {
      contactusRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return<Fragment>
    <div className="maindivfortemplate3">
      <div className="header1tem3">
        <header>
          <h1>Trading Bull</h1>
          <div className="btnsheader1temp3">
            <ul>
              <li><button onClick={scrollToItems}>Our Products</button></li>
              <li><button onClick={scrollToaboutus}>About us</button></li>
              <li><button onClick={scrollTocontactus}>Contact us</button></li>
            </ul>
          </div>
        </header>
      </div>
      <div className="header2temp3">
        <section className="textsectiontemp3header2">
          <div className="salestexttemp3">
            <h1>Crafting Profits Through Patterns</h1>
          </div>
          <div className="taglinetemp3">
            <h1>Empowering Traders, One Pattern at a Time</h1>
          </div>
        </section>
        <section className="imgsectionintemp3header2">
          <img src={banner}/>
        </section>
      </div>
      <div className="ourservicestemp3" ref={itemsRef}>
        <h1>Our Products</h1>
        <div className='books'>
          <ul>
            <li onClick={scrollTocontactus}> 
            <div className='book1' >
              <div className='book1img'>
                <img src={book1}/>
                <h3>Trading price action patterns</h3>
                <h3>₹25</h3>
              </div>
            </div>
          </li>
          <div className='book1' onClick={scrollTocontactus}>
              <div className='book1img'>
                <img src={book2}/>
                <h3>Trading chart pattern (candlestick)</h3>
                <h3>₹25</h3>
              </div>
            </div>
            <li>
          </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="abttemp3part1" ref={aboutusRef}>
        <div className="abt1no1part1temp3">
          <section className="textsectemp3abt1part1">
            <h2>Expert Authors</h2>
            <p>"Trading Price Action Patterns" and "Trading Chart Patterns (Candlestick)" are penned by seasoned experts in the field of trading. Our authors bring a wealth of practical experience and deep knowledge to their works, making these books not just theoretical guides, but valuable resources based on real-world insights. They understand the challenges and opportunities traders face, and their expertise shines through in every chapter.</p>
          </section>
          <section className="imgsecabt1no1tmep3part1">
            <img src={abt1}/>
          </section>
        </div>
        <div className="abt1no1part1temp3">
        <section className="imgsecabt1no1tmep3part1">
            <img src={abt2}/>
          </section>
          <section className="textsectemp3abt1part1">
            <h2>Comprehensive Content</h2>
            <p>"Trading Price Action Patterns" delves into the art of understanding and utilizing price action to predict market movements. From analyzing trend reversals to spotting breakout opportunities, this book provides a comprehensive guide to decoding the language of price movement.</p>
          </section>          
        </div>
        <div className="abt1no1part1temp3">
          <section className="textsectemp3abt1part1">
            <h2>Practical Insights</h2>
            <p>Both books are designed to bridge the gap between theory and practice. You'll find real-life examples, case studies, and practical exercises that help you apply the concepts learned. Our goal is to ensure that you not only grasp the theories but can also confidently apply them to your trading endeavors.</p>
          </section>
          <section className="imgsecabt1no1tmep3part1">
            <img src={abt3}/>
          </section>
        </div>
      </div>
      <div className="testimonialtemp3">

        <section className="testimonial1temp3">300+<br/>Sold</section>
        <section className="testimonial1temp3">4.5<img src={star}/><br/>Rating</section>
        <section className="testimonial1temp3">3 hrs<br/> response time</section>
      </div>
      <div className="footerfortemp3" >
        <footer>
          <h2>Contact us</h2>
          <div className="form" ref={contactusRef}>
        <h2>Order</h2>
        {isSubmitted ? (
          <p className="success-message"><h3>Thank you for contacting us, we will egt in touch with you shortly!</h3></p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label><br/>
            <input type="text" name="to_name" className="normal" required/><br/>
            <label>Email</label><br/>
            <input type="email" name="from_name"  className="normal" required/><br/>
            <label>Phone number</label><br/>
            <textarea name="Phone number"  className="normal" required/><br/>
            <input type="submit" value="Send"  className="btnininput"/>
          </form>
        )}
      </div>
        </footer>
      </div>
  </Fragment>
};

export default App