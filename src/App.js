import React, { useRef, Fragment, useState, useCallback } from 'react';
import './App.css'
import logo from './images/saz-infotech-w-removebg-preview.png'
import banner from './images/Untitled design.png'
import code from './images/icons8-code-50.png'
import maintaion from './images/icons8-development-50.png'
import design from './images/icons8-design-50.png'
import upgrade from './images/icons8-update-50.png'
import saz_pg from './images/S.png'
import instagram from './images/instagram_logo.png'
import dropment from './images/Dropment (2).png'
const Service = ({ title, price, initialFeatures }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const featuresToDisplay = showAllFeatures ? initialFeatures : initialFeatures.slice(0, 3);
  const phoneNumber = '917760372901'; // Your WhatsApp number with country code

  const openWhatsAppChat = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className='section-5-service'>
      <h3>{title}</h3>
      <p>Starting only at<br/>Rs <b>{price}</b></p>
      <h4>Features</h4>
      <ul>
        {featuresToDisplay.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {initialFeatures.length > 3 && (
        <div>
        <button onClick={() => setShowAllFeatures(!showAllFeatures)}>
          {showAllFeatures ? 'Less' : 'More'} <span>&#9660;</span>
        </button><br/>
        <button onClick={openWhatsAppChat}>Contact Us</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const phoneNumber = '917760372901'; // Your WhatsApp number with country code

  const openWhatsAppChat = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
    window.open(whatsappUrl, '_blank');
  };
  const section2Ref = useRef(null);

  const scrollToSection2 = () => {
    section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const sectionabtusRef = useRef(null);

  const scrollToSectionabtus = () => {
    sectionabtusRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const sectionservicesRef = useRef(null);

  const scrollToSectionservices = () => {
    sectionservicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const services = [
    {
      title: 'basic Website',
      price: '499',
      features: ['1 page', 'Domain not included', 'SEO Friendly', 'Call button', 'Free SSL', 'WhatsApp Button Integration', 'Hosting not included', 'Annual Hosting Rs 7299'],
    },
    {
      title: 'Business Website',
      price: '3499',
      features: ['5 pages', 'Domain included', 'SEO Friendly', '3 months free maintenance', 'Call button', 'Email form', 'Free SSL', '100% Responsive Website', 'WhatsApp Button Integration', 'Hosting not included', 'Annual Hosting Rs 7299'],
    },
    {
      title: 'Service-based Business Website',
      price: '8999',
      features: ['8 pages', 'Domain included', 'SEO Friendly', '3 months free maintenance', 'Call button', 'Admin Panel', 'Email form', 'Free SSL', 'Dynamic Website (Premium Design)', '100% Responsive Website', 'WhatsApp Button Integration', 'Annual Hosting Rs 7299'],
    },
    {
      title: 'E-commerce Website',
      price: '19999',
      features: ['15 pages', 'Domain included', 'SEO Friendly', '12 months free maintenance', 'Call button', 'Payment Gateway', 'Admin Panel', '3 months free Hosting', 'Email form', 'Free SSL', 'Dynamic Website (Premium Design)', '100% Responsive Website', 'WhatsApp Button Integration', 'Annual Hosting Rs 7299'],
    },
    {
      title: 'Custom',
      price: '??',
      features: ['Pages according to requirement', 'Domain included', 'SEO Friendly', '12 months free maintenance', 'Call button', 'Payment Gateway', 'Admin Panel', '1 Year Free Hosting (Unlimited Space)', '?? Products Categories', '?? Products Listing from our side', 'Email form', 'Free SSL', 'Dynamic Website (Premium Design)', 'Product Variation Features', '100% Responsive Website', 'WhatsApp Button Integration', 'Annual Hosting Rs 7299'],
    },
  ];
   return(
   <Fragment>
     <div className='main-div'>
      <div className='header'>
        <header>
          <div className='logo-header'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='header-btns'>
            <button onClick={scrollToSectionabtus}>About us</button>
            <button onClick={scrollToSection2}>Our work</button>
            <button onClick={scrollToSectionservices}>Services</button>
            <button onClick={openWhatsAppChat} className="contact-button" style={{border: '1px solid #9E73DA', borderRadius: '25px', padding: '10px 20px'}}>Contact us</button>
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
          <button onClick={scrollToSection2}>Our Work</button>
          <button onClick={scrollToSectionservices}>Our Services</button>
        </div>
      </section>
      <section className='hero-section-img'></section>
    </div>
    <div className='section-1'>
        <section className='section-1-textarea'>
            <h2>Our Work<br/> Offers</h2>
            <button onClick={openWhatsAppChat}>Contact us</button>
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
    <div className='section-3' ref={sectionabtusRef}>
    <div className='text-section-3'>
        <h2>Build Website And Grow Online Presence For Your Business</h2>
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
        <button onClick={openWhatsAppChat}>Contact Us</button>
    </div>
    <div className='img-section-3'></div>
</div>
<div className='section-4'>
<section className='section-4-img'></section>
  <section className='section-4-text'>
    <h2>Why choose us</h2>
    <p>Elevate your digital presence with our expert 
      website development solutions. At Saz infotech,
       we craft transformative online experiences through
        tailored, high-performing websites that not only 
        embody your brand but also drive tangible growth. 
        Our emphasis on innovative design, seamless user 
        experience, and scalable functionality ensures your 
        website stands out in the competitive digital 
        landscape. Ready to build something extraordinary?
         Choose us as your partner in propelling your business
          to new heights.</p>
          <button onClick={openWhatsAppChat}>Contact Us</button>
  </section>
</div>
<div className='section-5' ref={sectionservicesRef}>
      <h2>Our Services</h2>
      <div className='section-5-services'>
        {services.map((service, index) => (
          <Service key={index} title={service.title} price={service.price} initialFeatures={service.features} />
        ))}
      </div>
    </div>
    <div className='section-2' ref={section2Ref}>
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
<div className="dropment-main-blog-page-footer">
         <footer>
              <section className="dropment-main-blog-page-footer-links-section">
                <h2 style={{color: 'black'}}>Links</h2>
                <p onClick={scrollToSectionabtus}>About us</p>
                <p onClick={scrollToSectionservices}>Our Services</p>
                <p onClick={scrollToSection2}>Our Work</p>
              </section>
              <section className="dropment-main-blog-page-footer-follow-section">
                <h2 style={{color: 'black'}}>Social media</h2>
                <a href="https://www.instagram.com/saz_infotech/">
                <img src={instagram}/>
                </a>
              </section>
              <section className="dropment-main-blog-page-footer-contact-section">
                <h2 style={{color: 'black'}}>contact</h2>
                <p>Email: dropment.saz@gmail.com</p>
                <p onClick={openWhatsAppChat}>Phone no: 7760372901</p>
              </section>
              <section className="dropment-main-blog-page-footer-follow-section">
                <h2 style={{color: 'black'}}>Other businesses</h2>
                <a href="https://dropment.online/" style={{textDecoration: 'none'}}>
                <p>Dropment</p>
                </a>
                <a href="https://saz-pg.vercel.app/" style={{textDecoration: 'none'}}>
                <p>Saz PG</p>
                </a>
              </section>
         </footer>
        </div>
        <div className='copyrights' style={{textAlign: 'center'}}>
        &copy; {new Date().getFullYear()} Saz. All rights reserved.
        </div>
    </div>
   </Fragment>
   )
};

export default App