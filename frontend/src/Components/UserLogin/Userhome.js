// Home.js
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
 // Import CSS file for styling

const Home = () => {
  return (<>
 <div className="nav1">
              <div className="cc">
                
                <i id="aa" class="bi bi-envelope"></i>&nbsp;&nbsp;healthcare@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" class="bi bi-clock"></i>Service time : 12.00 AM
<i id="cc" class="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</div></div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">HealthCare</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/Userhome"><b>Home</b></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Patient
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
            <Link className="dropdown-item" to="/Patientreg" style={{ fontSize: '17px' }}>Add Patient</Link>
            <Link className="dropdown-item" to="/Readpatient" style={{ fontSize: '17px' }}>Access Patient</Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Appointment
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
            <a className="dropdown-item" href="/Addappo" style={{ fontSize: '17px' }}>Add Appointment</a>
            <a className="dropdown-item" href="/Apptread" style={{ fontSize: '17px' }}>Access Appointment</a>
          </div>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Prescription
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
           
            <Link className="dropdown-item" to="/Presread" style={{ fontSize: '17px' }}>Access Prescription</Link>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signin"><b>Logout</b></a>
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

export default Home;
