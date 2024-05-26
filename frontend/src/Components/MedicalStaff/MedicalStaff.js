import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {  Link } from "react-router-dom";
import './MedicalStaff.css'
import { BrowserRouter as Router } from 'react-router-dom';
const MedicalStaff = () => {
  const [Staff, setStaff] = useState([]);
   // Define formRef using useRef
  const [newStaff, setNewStaff] = useState({ StaffID: '', FirstName: '', LastName: '' ,Age: '',Gender: '',Address: '',PhoneNumber: '',EmailAddress: '',Specialty: ''});
  const [thankYouMessage, setThankYouMessage] = useState('');

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = () => {
    axios.get('http://localhost:4000/api/Medical_staff')
      .then(response => {
        console.log('Fetched Staff:', response.data);
        setStaff(response.data);
      })
      .catch(error => console.error('Error fetching Staff:', error));
  };

  const handleAddStaff = () => {
    axios.post('http://localhost:4000/api/Medical_staff', newStaff)
      .then(response => {
        console.log(response.data);
        fetchStaff();
        setNewStaff({ StaffID: '', FirstName: '', LastName: '' ,Age: '',Gender: '',Address: '',PhoneNumber: '',EmailAddress: '',Specialty: ''});
        setThankYouMessage(`Thank you, ${newStaff.FirstName}!`); // Set the thank you message
      })
      .catch(error => console.error('Error adding Staff:', error));
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
    <a className="navbar-brand" href="/">Healthcare Management</a>
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



            <div className="form-container1">
      <h2 className="s2">MedicalStaff</h2>
      <form>
        <label className="form-label" htmlFor="StaffID">Staff Id number</label>
        <input
          className="form-input"
          type="text"
          placeholder="StaffID"
          id="StaffID"
          name="StaffID"
          value={newStaff.StaffID}
          onChange={(e) => setNewStaff({ ...newStaff,  StaffID: e.target.value })}
        /><br></br>

        <label className="form-label" htmlFor="FirstName">firstname</label>
        <input
          className="form-input"
          type="text"
          placeholder="FirstName"
          id="Firstname"
          name="Firstname"
          value={newStaff.FirstName}
          onChange={(e) => setNewStaff({ ...newStaff, FirstName: e.target.value })}
        /><br></br>

        <label className="form-label" htmlFor="LastName">lastname</label>
        <input
          className="form-input"
          type="text"
          placeholder="Lastname"
          id="lastname"
          name="lastname"
          value={newStaff.LastName}
          onChange={(e) => setNewStaff({ ...newStaff,    LastName: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="Age">Age</label>
        <input
          className="form-input"
          type="number"
          placeholder="Age"
          id="Age"
          name="Age"
          value={newStaff.Age}
          onChange={(e) => setNewStaff({ ...newStaff,    Age: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="gender">gender</label>
        <input
          className="form-input"
          type="text"
          placeholder="gender"
          id="gender"
          name="gender"
          value={newStaff.Gender}
          onChange={(e) => setNewStaff({ ...newStaff,    Gender: e.target.value })}
        /><br></br>
       
        <label className="form-label" htmlFor="Address">Address</label>
        <input
          className="form-input"
          type="text"
          placeholder="address"
          id="address"
          name="address"
          value={newStaff.Address}
          onChange={(e) => setNewStaff({ ...newStaff,    Address: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="PhoneNumber">phonenumber</label>
        <input
          className="form-input"
          type="text"
          placeholder="phonenumber"
          id="phonenumber"
          name="phonenumber"
          value={newStaff.PhoneNumber}
          onChange={(e) => setNewStaff({ ...newStaff,    PhoneNumber: e.target.value })}
        /><br></br>
         <label className="form-label" htmlFor="EmailAddress">EmailAddress</label>
        <input
          className="form-input"
          type="text"
          placeholder="emailAddress"
          id="emailAddress"
          name="emailAddress"
          value={newStaff.EmailAddress}
          onChange={(e) => setNewStaff({ ...newStaff,    EmailAddress: e.target.value })}
        /><br></br>
        <label className="form-label" htmlFor="Specialty">Specialty</label>
        <input
          className="form-input"
          type="text"
          placeholder="Specialty"
          id="Specialty"
          name="Specialty"
          value={newStaff.Specialty}
          onChange={(e) => setNewStaff({ ...newStaff,    Specialty: e.target.value })}
        /><br></br>
        
        


        <button className="form-button" type="button" onClick={handleAddStaff}>Add Staff</button>
      </form><br></br>

      {thankYouMessage && <h3 className="thank-you-message">{thankYouMessage}</h3>}
    </div>
    <div className="background-image">
      
    </div>


          
            </>
  );
};

export default MedicalStaff;
