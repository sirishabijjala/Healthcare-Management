// Import React and required modules

import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Functional component for the App
const Readpt = () => {
  // State variables
  const [Patients, setPatient] = useState([]);
  
  const [fetchId, setFetchId] = useState(''); // State variable to store the ID for fetching data
  const [fetchedPatient, setFetchedPatient] = useState(null); // State variable to store the fetched donor
  


    

  // Fetch all donors from the backend when the component mounts
  useEffect(() => {
    fetchPatients();
  }, []);

  // Function to fetch all donors
  const fetchPatients = () => {
    axios.get('http://localhost:5000/api/patient')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setPatient(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };

 



  

  // Function to handle deleting a donor
  const handleDeletePatient = (pid) => {
    axios.delete(`http://localhost:5000/api/patient/${pid}`)
      .then(response => {
        console.log(response.data);
        fetchPatients(); // Refresh the donors list
      })
      .catch(error => console.error('Error deleting donor:', error));
  };

  // Function to fetch data for a specific donor based on ID
  const handleFetchData = () => {
    axios.get(`http://localhost:5000/api/patient/${fetchId}`)
      .then(response => {
        console.log('Fetched donor:', response.data);
        setFetchedPatient(response.data);
      })
      .catch(error => {
        console.error('Error fetching donor:', error);
        setFetchedPatient(null);
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
      <h2 className='card-title'>Fetch Patient Data</h2>
      <div className='row align-items-center'>
        <div className='col'>
          <label htmlFor="fetchId" className="form-label"><b>patientid</b></label>
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
          <button className='btn btn-primary'><b>Fetch all Data</b></button>

        </div>
      </div>

      {/* Display fetched donor data */}
      {fetchedPatient ? (
        <div>
          <h4>    Patient information</h4>
          <p>PatientID: {fetchedPatient[0]}</p>
          <p>firstname: {fetchedPatient[1]}</p>
          <p>lastname: {fetchedPatient[2]}</p>
          <p>Age: {fetchedPatient[3]}</p>
          <p>gender: {fetchedPatient[4]}</p>
          <p>address: {fetchedPatient[5]}</p>
          <p>phonenumber: {fetchedPatient[6]}</p>
          <p>email: {fetchedPatient[7]}</p>
          <p>insuranceCompaney: {fetchedPatient[8]}</p>
          <p>policynumber: {fetchedPatient[9]}</p>
          <p>contactname: {fetchedPatient[10]}</p>
          <p>contactphonenumber: {fetchedPatient[11]}</p>
          <button className='btn btn-danger' onClick={() => handleDeletePatient(fetchedPatient[0])}>Delete</button>
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
export default Readpt;