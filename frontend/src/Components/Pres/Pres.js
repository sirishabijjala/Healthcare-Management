import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Pres.css'
import { BrowserRouter as Router } from 'react-router-dom';

const Pres = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [newPrescription, setNewPrescription] = useState({
    presID: '',
    ptsid: '',
    stffid: '',
    presdate: '',
    medname: '',
    dosage: '',
    freq: '',
    dur: '',
    instrctions: ''
  });
  const [thankYouMessage, setThankYouMessage] = useState('');

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = () => {
    axios.get('http://localhost:4000/api/presps')
      .then(response => {
        console.log('Fetched Prescriptions:', response.data);
        setPrescriptions(response.data);
      })
      .catch(error => console.error('Error fetching Prescriptions:', error));
  };

  const handleAddPrescription = () => {
    axios.post('http://localhost:4000/api/presps', newPrescription)
      .then(response => {
        console.log(response.data);
        fetchPrescriptions();
        setNewPrescription({
          presID: '',
          ptsid: '',
          stffid: '',
          presdate: '',
          medname: '',
          dosage: '',
          freq: '',
          dur: '',
          instrctions: ''
        });
        setThankYouMessage('Prescription added successfully');
      })
      .catch(error => console.error('Error adding Prescription:', error));
  };

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



      <div className="form-container1">
        <h2 className="s2">Prescriptions</h2>
        <form>
          <label className="form-label" htmlFor="presID">Prescription ID</label>
          <input
            className="form-input"
            type="text"
            placeholder="Prescription ID"
            id="presID"
            name="presID"
            value={newPrescription.presID}
            onChange={(e) => setNewPrescription({ ...newPrescription, presID: e.target.value })}
          /><br />
<label className="form-label" htmlFor="ptsid">Patient ID</label>
          <input
            className="form-input"
            type="text"
            placeholder="Patient ID"
            id="ptsid"
            name="ptsid"
            value={newPrescription.ptsid}
            onChange={(e) => setNewPrescription({ ...newPrescription, ptsid: e.target.value })}
          /><br />
<label className="form-label" htmlFor="stffid">StaffID</label>
          <input
            className="form-input"
            type="text"
            placeholder="StaffID"
            id="stffid"
            name="stffid"
            value={newPrescription.stffid}
            onChange={(e) => setNewPrescription({ ...newPrescription, stffid: e.target.value })}
          /><br />
<label className="form-label" htmlFor="presdate">PrescriptionDate</label>
          <input
            className="form-input"
            type="text"
            placeholder="PrescriptionDate"
            id="presdate"
            name="presdate"
            value={newPrescription.presdate}
            onChange={(e) => setNewPrescription({ ...newPrescription, presdate: e.target.value })}
          /><br />
<label className="form-label" htmlFor="medname">MedicineName</label>
          <input
            className="form-input"
            type="text"
            placeholder="Medicianname"
            id="medname"
            name="medname"
            value={newPrescription.medname}
            onChange={(e) => setNewPrescription({ ...newPrescription, medname: e.target.value })}
          /><br />
<label className="form-label" htmlFor="dosage">Dosage</label>
          <input
            className="form-input"
            type="text"
            placeholder="Dosage"
            id="dosage"
            name="dosage"
            value={newPrescription.dosage}
            onChange={(e) => setNewPrescription({ ...newPrescription, dosage: e.target.value })}
          /><br />
<label className="form-label" htmlFor="freq">frequency</label>
          <input
            className="form-input"
            type="text"
            placeholder="frequency"
            id="freq"
            name="freq"
            value={newPrescription.freq}
            onChange={(e) => setNewPrescription({ ...newPrescription, freq: e.target.value })}
          /><br />
<label className="form-label" htmlFor="dur">Duration</label>
          <input
            className="form-input"
            type="text"
            placeholder="Duration"
            id="dur"
            name="dur"
            value={newPrescription.dur}
            onChange={(e) => setNewPrescription({ ...newPrescription, dur: e.target.value })}
          /><br />
          <label className="form-label" htmlFor="instructions">Instructions</label>
          <input
            className="form-input"
            type="text"
            placeholder="Instructions"
            id="presID"
            name="presID"
            value={newPrescription.instrctions}
            onChange={(e) => setNewPrescription({ ...newPrescription, instrctions: e.target.value })}
          /><br />


          {/* Add other input fields similarly for other prescription attributes */}

          <button className="form-button" type="button" onClick={handleAddPrescription}>Add Prescription</button>
        </form>
        <br />

        {thankYouMessage && <h3 className="thank-you-message">{thankYouMessage}</h3>}
      </div>

      {/* Display existing prescriptions */}
      <div>
        <h2>Existing Prescriptions</h2>
        <ul>
          {prescriptions.map(prescription => (
            <li key={prescription.presID}>
              Prescription ID: {prescription.presID}, Patient ID: {prescription.ptsid}, Staff ID: {prescription.stffid}, Prescription Date: {prescription.presdate}, Medication Name: {prescription.medname}, Dosage: {prescription.dosage}, Frequency: {prescription.freq}, Duration: {prescription.dur}, Instructions: {prescription.instrctions}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pres;
