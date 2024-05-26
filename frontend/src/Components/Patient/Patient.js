import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Link } from "react-router-dom";
import './Patient.css'
import { BrowserRouter as Router } from 'react-router-dom';
const Patient = () => {
  const [Patients, setPatient] = useState([]);
  // Define formRef using useRef
  const [newPatient, setNewPatient] = useState({ pid: '', fn: '', ln: '' ,age: '',gen: '',adds: '',pn: '',email: '',insucomp: '',policyNum: '',contname: '',contpno: ''});
  const [thankYouMessage, setThankYouMessage] = useState('');

  useEffect(() => {
    fetchPatient();
  }, []);

  const fetchPatient = () => {
    axios.get('http://localhost:5000/api/patient')
      .then(response => {
        console.log('Fetched Patient:', response.data);
        setPatient(response.data);
      })
      .catch(error => console.error('Error fetching Patient:', error));
  };

  const handleAddPatient = () => {
    axios.post('http://localhost:5000/api/patient', newPatient)
      .then(response => {
        console.log(response.data);
        fetchPatient();
        setNewPatient({ pid: '', fn: '', ln: '' ,age: '',gen: '',adds: '',pn: '',email: '',insucomp: '',policyNum: '',contname: '',contpno: ''});
        setThankYouMessage(`Thank you, ${newPatient.fn}!`); // Set the thank you message
      })
      .catch(error => console.error('Error adding donor:', error));
  };

  return (<>
<div className="nav1">
              <div className="cc">
                
                <i id="aa" class="bi bi-envelope"></i>&nbsp;&nbsp;healthcare@gmail.com&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <i id="bb" class="bi bi-clock"></i>Service time : 12.00 AM
<i id="cc" class="bi bi-telephone"></i>&nbsp;&nbsp;+91 08011457337&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</div></div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">HealthCare Management</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/Home"><b>Home</b></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Patient
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
            <Link className="dropdown-item" to="/Patient" style={{ fontSize: '17px' }}>Add Patient</Link>
            <Link className="dropdown-item" to="/Readpt" style={{ fontSize: '17px' }}>Access Patient</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Staff
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
            <Link className="dropdown-item" to="/MedicalStaff" style={{ fontSize: '17px' }}>Add Staff</Link>
            <Link className="dropdown-item" to="/Medread" style={{ fontSize: '17px' }}>Access Staff</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Appointment
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
            <a className="dropdown-item" href="/Appointment" style={{ fontSize: '17px' }}>Add Appointment</a>
            <a className="dropdown-item" href="/Apporead" style={{ fontSize: '17px' }}>Access Appointment</a>
          </div>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: '17px' }}>
            Prescription
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ minWidth: '120px' }}>
            <Link className="dropdown-item" to="/Pres" style={{ fontSize: '17px' }}>Add Prescription</Link>
            <Link className="dropdown-item" to="/Readpres" style={{ fontSize: '17px' }}>Access Prescription</Link>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Signin"><b>Logout</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<h1>Add Patient Details</h1>
            <div className="form-container1">
      <h2 className="s2">Patient</h2>
      <form>
        <label className="form-label" htmlFor="id">Id number</label>
        <input
          className="form-input"
          type="text"
          placeholder="pid"
          id="pid"
          name="pid"
          value={newPatient.pid}
          onChange={(e) => setNewPatient({ ...newPatient, pid: e.target.value })}
        /><br></br>

        <label className="form-label" htmlFor="fname"> firstname</label>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          id="name"
          name="firstname"
          value={newPatient.fn}
          onChange={(e) => setNewPatient({ ...newPatient, fn: e.target.value })}
        /><br></br>

        <label className="form-label" htmlFor="ln">lastname</label>
        <input
          className="form-input"
          type="text"
          placeholder="lastname"
          id="lastname"
          name="lastname"
          value={newPatient.ln}
          onChange={(e) => setNewPatient({ ...newPatient,    ln: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="age">age</label>
        <input
          className="form-input"
          type="text"
          placeholder="age"
          id="age"
          name="age"
          value={newPatient.age}
          onChange={(e) => setNewPatient({ ...newPatient,    age: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="gender">gender</label>
        <input
          className="form-input"
          type="text"
          placeholder="gender"
          id="gender"
          name="gender"
          value={newPatient.gen}
          onChange={(e) => setNewPatient({ ...newPatient,    gen: e.target.value })}
        /><br></br>
       
        <label className="form-label" htmlFor="adds">address</label>
        <input
          className="form-input"
          type="text"
          placeholder="address"
          id="address"
          name="address"
          value={newPatient.adds}
          onChange={(e) => setNewPatient({ ...newPatient,    adds: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="pn">phonenumber</label>
        <input
          className="form-input"
          type="text"
          placeholder="phonenumber"
          id="phonenumber"
          name="phonenumber"
          value={newPatient.pn}
          onChange={(e) => setNewPatient({ ...newPatient,    pn: e.target.value })}
        /><br></br>
         <label className="form-label" htmlFor="email">email</label>
        <input
          className="form-input"
          type="text"
          placeholder="email"
          id="email"
          name="email"
          value={newPatient.email}
          onChange={(e) => setNewPatient({ ...newPatient,    email: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="insucomp">InsuranceCompaney</label>
        <input
          className="form-input"
          type="text"
          placeholder="insuranceCompaney"
          id="insuranceCompaney"
          name="insuranceCompaney"
          value={newPatient.insucomp}
          onChange={(e) => setNewPatient({ ...newPatient,    insucomp: e.target.value })}
        /><br></br>
         <label className="form-label" htmlFor="policyNum">Policynumber</label>
        <input
          className="form-input"
          type="text"
          placeholder="policynumber"
          id="policynumber"
          name="policynumber"
          value={newPatient.policyNum}
          onChange={(e) => setNewPatient({ ...newPatient,    policyNum: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="contname">Emargencycontactname</label>
        <input
          className="form-input"
          type="text"
          placeholder="contactname"
          id="contactname"
          name="contactname"
          value={newPatient.contname}
          onChange={(e) => setNewPatient({ ...newPatient,    contname: e.target.value })}
        /><br></br>
         <label className="form-label" htmlFor="contpno">EmargencycontactPhonenumber</label>
        <input
          className="form-input"
          type="text"
          placeholder="contactphonenumber"
          id="contactphonenumber"
          name="contactphonenumber"
          value={newPatient.contpno}
          onChange={(e) => setNewPatient({ ...newPatient,    contpno: e.target.value })}
        /><br></br>
        


        <button className="form-button" type="button" onClick={handleAddPatient}>Add Patient</button>
      </form><br></br>

      {thankYouMessage && <h3 className="thank-you-message">{thankYouMessage}</h3>}
    </div>
    <div className="background-image">
      
    </div>


          
            </>
  );
};

export default Patient;
