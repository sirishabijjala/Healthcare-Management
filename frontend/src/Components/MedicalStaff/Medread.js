// Import React and required modules

import {  Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MedicalStaff'

// Functional component for the App
const Medread = () => {
  // State variables
  const [Staff, setStaff] = useState([]);
  
  const [fetchId, setFetchId] = useState(''); // State variable to store the ID for fetching data
  const [fetchedStaff, setFetchedStaff] = useState(null); // State variable to store the fetched donor
  


    

  // Fetch all donors from the backend when the component mounts
  useEffect(() => {
    fetchStaffs();
  }, []);

  // Function to fetch all donors
  const fetchStaffs = () => {
    axios.get('http://localhost:4000/api/Medical_Staff')
      .then(response => {
        console.log('Fetched donors:', response.data);
        setStaff(response.data);
      })
      .catch(error => console.error('Error fetching donors:', error));
  };

 



  

  // Function to handle deleting a donor
  const handleDeleteStaff = (StaffID) => {
    axios.delete(`http://localhost:4000/api/presps/${StaffID}`)
      .then(response => {
        console.log(response.data);
        fetchStaffs(); // Refresh the donors list
      })
      .catch(error => console.error('Error deleting donor:', error));
  };

  // Function to fetch data for a specific donor based on ID
  const handleFetchData = () => {
    axios.get(`http://localhost:4000/api/Medical_Staff/${fetchId}`)
      .then(response => {
        console.log('Fetched donor:', response.data);
        setFetchedStaff(response.data);
      })
      .catch(error => {
        console.error('Error fetching donor:', error);
        setFetchedStaff(null);
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

        <div className="container" style={{ marginTop: '50px', maxWidth: '400px' }}>
  <div className='card'>
    <div className='card-body'>
      <h2 className='card-title'>Fetch Staff Data</h2>
      <div className='row align-items-center'>
        <div className='col'>
          <label htmlFor="fetchId" className="form-label"><b>StaffId</b></label>
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
      {fetchedStaff ? (
        <div>
          <h4>    prescription information</h4>
          <p>StaffID: {fetchedStaff[0]}</p>
          <p>FirstName: {fetchedStaff[1]}</p>
          <p>LastName: {fetchedStaff[2]}</p>
          <p>Age: {fetchedStaff[3]}</p>
          <p>Gender: {fetchedStaff[4]}</p>
          <p>Address: {fetchedStaff[5]}</p>
          <p>PhoneNumber: {fetchedStaff[6]}</p>
          <p>EmailAddress: {fetchedStaff[7]}</p>
          <p>Specialty: {fetchedStaff[8]}</p>
          <button className='btn btn-danger' onClick={() => handleDeleteStaff(fetchedStaff[0])}>Delete</button>
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
export default Medread;