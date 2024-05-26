import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Appointment.css'; // assuming you've renamed Appointment.css to MedicalStaff.css
import { BrowserRouter as Router } from 'react-router-dom';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    apptid: '',
    ptid: '',
    stfid: '',
    AppointmentDateTime: '', // Ensure this is in the format YYYY-MM-DDTHH:MM
    AppointmentType: '',
    Status: ''
  });
  const [thankYouMessage, setThankYouMessage] = useState('');

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    axios.get('http://localhost:3000/api/apptmt')
      .then(response => {
        console.log('Fetched Appointments:', response.data);
        setAppointments(response.data);
      })
      .catch(error => console.error('Error fetching Appointments:', error));
  };

  const handleAddAppointment = () => {
    axios.post('http://localhost:3000/api/apptmt', newAppointment)
      .then(response => {
        console.log(response.data);
        fetchAppointments();
        setNewAppointment({
          apptid: '',
          ptid: '',
          stfid: '',
          AppointmentDateTime: '',
          AppointmentType: '',
          Status: ''
        });
        setThankYouMessage('Appointment added successfully!');
      })
      .catch(error => console.error('Error adding Appointment:', error));
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

      {/* ... Navigation code ... */}
      <div className="form-container1">
        <h2 className="s2">Appointments</h2>
        <form>
          <label className="form-label" htmlFor="apptid">Appointment ID</label>
          <input
            className="form-input"
            type="text"
            placeholder="Appointment ID"
            id="apptid"
            name="apptid"
            value={newAppointment.apptid}
            onChange={(e) => setNewAppointment({ ...newAppointment, apptid: e.target.value })}
          /><br />

          <label className="form-label" htmlFor="ptid">Patient ID</label>
          <input
            className="form-input"
            type="text"
            placeholder="Patient ID"
            id="ptid"
            name="ptid"
            value={newAppointment.ptid}
            onChange={(e) => setNewAppointment({ ...newAppointment, ptid: e.target.value })}
          /><br />

          <label className="form-label" htmlFor="stfid">Staff ID</label>
          <input
            className="form-input"
            type="text"
            placeholder="Staff ID"
            id="stfid"
            name="stfid"
            value={newAppointment.stfid}
            onChange={(e) => setNewAppointment({ ...newAppointment, stfid: e.target.value })}
          /><br />

          <label className="form-label" htmlFor="AppointmentDateTime">Appointment Date & Time</label>
          <input
            className="form-input"
            type="datetime-local" // Changed to datetime-local
            id="AppointmentDateTime"
            name="AppointmentDateTime"
            value={newAppointment.AppointmentDateTime}
            onChange={(e) => setNewAppointment({ ...newAppointment, AppointmentDateTime: e.target.value })}
          /><br />

          <label className="form-label" htmlFor="AppointmentType">Appointment Type</label>
          <input
            className="form-input"
            type="text"
            placeholder="Appointment Type"
            id="AppointmentType"
            name="AppointmentType"
            value={newAppointment.AppointmentType}
            onChange={(e) => setNewAppointment({ ...newAppointment, AppointmentType: e.target.value })}
          /><br />

          <label className="form-label" htmlFor="Status">Status</label>
          <input
            className="form-input"
            type="text"
            placeholder="Status"
            id="Status"
            name="Status"
            value={newAppointment.Status}
            onChange={(e) => setNewAppointment({ ...newAppointment, Status: e.target.value })}
          /><br />

          <button className="form-button" type="button" onClick={handleAddAppointment}>Add Appointment</button>
        </form><br />

        {thankYouMessage && <h3 className="thank-you-message">{thankYouMessage}</h3>}
      </div>

      <div className="background-image"></div>
    </>
  );
};

export default Appointment;
