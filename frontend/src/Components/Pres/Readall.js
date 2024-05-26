 
 import {  Link } from "react-router-dom";
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import './Pres.css'
 const Readall = () => {
    // State variables
    const [prescriptions, setPrescriptions] = useState([]);
    
    // State variable to store the fetched donor
    const handleDeleteDonor = (presID) => {
        axios.delete(`http://localhost:4000/api/presps/${presID}`)
          .then(response => {
            console.log(response.data);
            fetchDonors(); // Refresh the donors list
          })
          .catch(error => console.error('Error deleting donor:', error));
      };


      const fetchDonors = () => {
        axios.get('http://localhost:4000/api/presps')
          .then(response => {
            console.log('Fetched donors:', response.data);
            setPrescriptions(response.data);
          })
          .catch(error => console.error('Error fetching donors:', error));
      };
    
      useEffect(() => {
        fetchDonors();
      }, []);
    // JSX structure for the component
    return (
      <>
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



  <a href="/" class="btn btn-primary"><b>Back</b></a>



        <div class="container" style={{marginLeft: "10%"}}>
  <div class="t1">
    <table class="table table-bordered table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th class="text-center">prescriptionID</th>
          <th class="text-center">ptsid</th>
          <th class="text-center">stffid</th>
          <th class="text-center">presdate</th>
          <th class="text-center">medname</th>
          <th class="text-center">dosage</th>
          <th class="text-center">freq</th>
          <th class="text-center">dur</th>
          <th class="text-center">instrusctions</th>
        </tr>
      </thead>
      <tbody>
        {prescriptions.map((data, index) => (
          <tr key={index}>
            <td class="text-center">{data[0]}</td>
            <td>{data[1]}</td>
            <td class="text-right">{data[2]}</td>
            <td>{data[3]}</td>
            <td>{data[4]}</td>
            <td>{data[5]}</td>
            <td>{data[6]}</td>
            <td>{data[7]}</td>
            <td>{data[8]}</td>
            <td class="text-center">
              <button class="btn btn-danger btn-sm" onClick={() => handleDeleteDonor(data[0])}><b>Delete</b></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<br></br>
<br></br>

      </>
    );
  };
  
  // Export the component
  export default Readall;
  