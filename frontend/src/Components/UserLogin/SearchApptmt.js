// Import React and required modules

import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Functional component for the App
const SearchApptmt = () => {
  // State variables
  const [appointments, setAppointments] = useState([]);
  
  const [fetchId, setFetchId] = useState(''); // State variable to store the ID for fetching data
  const [fetchedAppo, setFetchedAppo] = useState(null); // State variable to store the fetched donor
  // Fetch all donors from the backend when the component mounts
  useEffect(() => {
    fetchAppos();
  }, []);

  // Function to fetch all donors
  const fetchAppos = () => {
    axios.get('http://localhost:2000/api/apptmt')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setAppointments(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };
 // Function to handle deleting a donor
  const handleDeleteAppo = (apptid) => {
    axios.delete(`http://localhost:2000/api/apptmt/${apptid}`)
      .then(response => {
        console.log(response.data);
        fetchAppos(); // Refresh the donors list
      })
      .catch(error => console.error('Error deleting donor:', error));
  };

  // Function to fetch data for a specific donor based on ID
  const handleFetchData = () => {
    axios.get(`http://localhost:2000/api/apptmt/${fetchId}`)
      .then(response => {
        console.log('Fetched donor:', response.data);
        setFetchedAppo(response.data);
      })
      .catch(error => {
        console.error('Error fetching donor:', error);
        setFetchedAppo(null);
      });
  };
// JSX structure for the component
  return (
    <>
 {/* Form to fetch data for a specific donor */}
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
<div className="container" style={{ marginTop: '50px', maxWidth: '400px' }}>
  <div className='card'>
    <div className='card-body'>
      <h2 className='card-title'>Fetch Appointment Data</h2>
      <div className='row align-items-center'>
        <div className='col'>
          <label htmlFor="fetchId" className="form-label"><b>AppointmentID</b></label>
          <input
            type="text"
            id="fetchId"
            className="form-control"
            placeholder="Enter ID"
            value={fetchId}
            onChange={(e) => setFetchId(e.target.value)}
          />
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col'>
          <button className='btn btn-success' onClick={handleFetchData}><b>Fetch Data</b></button>
          <button className='btn btn-primary'><b>Fetch all Data</b></button></div>
      </div>

      {/* Display fetched donor data */}
      {fetchedAppo ? (
        <div>
          <h4>    prescription information</h4>
          <p>apptid: {fetchedAppo[0]}</p>
          <p>ptid: {fetchedAppo[1]}</p>
          <p>stfid: {fetchedAppo[2]}</p>
          <p>AppointmentDateTime: {fetchedAppo[3]}</p>
          <p>AppointmentType: {fetchedAppo[4]}</p>
          <p>Status: {fetchedAppo[5]}</p>
          <button className='btn btn-danger' onClick={() => handleDeleteAppo(fetchedAppo[0])}>Delete</button>
        </div>
      ) : (
        <p className="mt-3">No data available for the specified ID</p>
      )}
    </div>
  </div>
</div>
</>
  );
};

// Export the component
export default SearchApptmt;