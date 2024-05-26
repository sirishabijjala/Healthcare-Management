import './Signed.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Signup() {
  const [Signup, setSignup] = useState([]);
  const [newSignup, setNewSignup] = useState({
    name: '',
    phone: '',
    email: '',
    p: '',
    cp: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false); // To track the checkbox

  useEffect(() => {
    fetchSignup();
  }, []);

  const fetchSignup = () => {
    fetch('http://localhost:5000/api/signup')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched signup:', data);
        setSignup(data);
      })
      .catch((error) => console.error('Error fetching signup:', error));
  };

  const handleAddSignup = async () => {
    var name = newSignup.name;
    var phone = newSignup.phone;
    var email = newSignup.email;
    var password = newSignup.p;
    var confirmPassword = newSignup.cp;

    var errorMessage = "";

    if (name.trim() === "") {
        errorMessage += "Name is required.\n";
    }

    if (phone.trim() === "") {
        errorMessage += "Phone number is required.\n";
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        errorMessage += "Invalid email format.\n";
    }

    if (password.trim().length < 8) {
      errorMessage += "Password must be at least 8 characters long.\n";
    }

    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
    }

    if (!termsAccepted) {
      errorMessage += "You must accept the terms and conditions.\n";
    }

    if (errorMessage !== "") {
        setErrorMessage(errorMessage);
        return; // Prevent further execution
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSignup),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('User signup successfully');
      fetchSignup();
      setNewSignup({
        name: '',
        phone: '',
        email: '',
        p: '',
        cp: '',
      });
      setSuccessMessage(`You Registered Successfully ${newSignup.name}!`);
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error.message);
      setSuccessMessage('');
      setErrorMessage('Error: ' + error.message);
    }
  };

  return (
    <><div className="nav1">
    <div className="cc">
      <i id="aa" className="bi bi-envelope"></i>&nbsp;&nbsp;healthcare@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <i id="bb" className="bi bi-clock"></i> Service time : 12.00 AM
      <i id="cc" className="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    </div>
  </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">HealthCare Management</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Hmain"><b>Home</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><b>About</b></a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/Signup"><b>Signup</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Signin"><b>Signin</b></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2 className='sl'>Sign Up</h2><br />
      <p className="hr-line"></p>

      <div className='contain1 su1'>
        <div className='content1'>
          <div className="right-side1">
            <form action="#">
              <div className="input-box1" style={{ height: "33px" }}><i className="fa-solid fa-user" style={{ color: "#de1f26" }}></i>
                <input type="text" placeholder="Enter your name" value={newSignup.name}
                  onChange={(e) => setNewSignup({ ...newSignup, name: e.target.value })} />
              </div><br />
              <div className="input-box1" style={{ height: "33px" }}><i className="fa-solid fa-phone" style={{ color: "#de1f26" }}></i>
                <input type="text" placeholder="Enter your mobile no" value={newSignup.phone}
                  onChange={(e) => setNewSignup({ ...newSignup, phone: e.target.value })} />
              </div><br />
              <div className="input-box1" style={{ height: "33px" }}><i className="fa-solid fa-envelope" style={{ color: "#de1f26" }}></i>
                <input type="text" placeholder="Enter your email" value={newSignup.email}
                  onChange={(e) => setNewSignup({ ...newSignup, email: e.target.value })} />
              </div><br />
              <div className="input-box1" style={{ height: "33px" }}><i className="fa-solid fa-lock" style={{ color: "#de1f26" }}></i>
                <input type="password" placeholder="Enter your password" value={newSignup.p}
                  onChange={(e) => setNewSignup({ ...newSignup, p: e.target.value })} />
              </div><br />
              <div className="input-box1" style={{ height: "33px" }}><i className="fa-solid fa-lock" style={{ color: "#de1f26" }}></i>
                <input type="password" placeholder="Re-enter your password" value={newSignup.cp}
                  onChange={(e) => setNewSignup({ ...newSignup, cp: e.target.value })} />
              </div><br />
              <div className="form-check"><input className="form-check-input" type="checkbox" id="termsCheck"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)} />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree to the <a href="/terms">terms and conditions</a>
                </label>
              </div><br />
              <div className="button1">
                <input type="button" className="btn btn-primary" value="Sign Up" onClick={handleAddSignup} />
              </div>
              <br /><br /><br />
              {successMessage && (
                <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>{successMessage} <i className="fa-solid fa-thumbs-up fa-xl" style={{ color: '#151647' }}></i></p>
              )}
              {errorMessage && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>}
            </form><br />
          </div>
        </div>
        <p style={{ padding: "2px 2px 1px 0px" }}>If you have an account <Link to='/Signin'>SignIn</Link></p>
      </div>
      <motion.img
        src="https://www.allen.ac.in/ace2324/assets/images/register.png"
        style={{ height: '450px', width: '730px', float: 'right', margin: '-600px 100px 20px 0' }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
}
