// Home.js
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Signed.css'; // Import CSS file for styling

const Hmain = () => {
  return (<>
  <div className="nav1">
        <div className="cc">
          <i id="aa" className="bi bi-envelope"></i>&nbsp;&nbsp;healthcare@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <i id="bb" className="bi bi-clock"></i> Service time : 12.00 AM
          <i id="cc" className="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="/">Healthcare Management</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/Hmain"><b>Home</b></a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/"><b>About</b></a>
        </li>
        
       
        <li class="nav-item">
          <a class="nav-link" href="/Signup"><b>Signup</b></a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/Signin"><b>Signin</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='home'>
        <div className='container'>
          <p className='home-subtitle'>Your health, our priority.</p>

          <div className='cards'>
            <div className='card'>
              <img src='https://productimages.withfloats.com/serviceimages/actual/610372aa2e222ab2c695e0d4Cnsultation' alt='General Consultation' className='card-img' />
              <div className='card-content'>
                <h3>General Consultation</h3>
                <p>Comprehensive health check-ups and consultations.</p>
              </div>
            </div>
            <div className='card'>
              <img src='https://www.shutterstock.com/image-photo/emergency-department-doctors-nurses-paramedics-260nw-2018028392.jpg' alt='Emergency Care' className='card-img' />
              <div className='card-content'>
                <h3>Emergency Care</h3>
                <p>24/7 emergency services with experienced professionals.</p>
              </div>
            </div>
            <div className='card'>
              <img src='https://www.shutterstock.com/image-photo/young-client-cosmetic-salon-having-260nw-1112370128.jpg' alt='Specialized Treatments' className='card-img' />
              <div className='card-content'>
                <h3>Specialized Treatments</h3>
                <p>Advanced treatments and surgeries with state-of-the-art technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <section className='testimonials'>
        <div className='container'>
          <h2>Patient Testimonials</h2>
          <div className='testimonial-cards'>
            <div className='testimonial-card'>
              <p>"The care and attention I received at Healthcare Management was exceptional. The staff is compassionate and professional. Highly recommend!"</p>
              <p>- Sarah K.</p>
            </div>
            <div className='testimonial-card'>
              <p>"Excellent service and state-of-the-art facilities. I felt very well taken care of during my treatment."</p>
              <p>- Michael T.</p>
            </div>
            <div className='testimonial-card'>
              <p>"The doctors and nurses were incredibly attentive and supportive throughout my recovery process."</p>
              <p>- Linda W.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='contact'>
        <div className='container'>
          <h2>Contact Us</h2>
          <form className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' rows='4' required></textarea>
            </div>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Healthcare Management System</p>
      </footer>
    </>
  );
};

export default Hmain;
