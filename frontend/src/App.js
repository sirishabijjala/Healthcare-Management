
import './App.css';
import Patient from './Components/Patient/Patient';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MedicalStaff from './Components/MedicalStaff/MedicalStaff';
import Medread from './Components/MedicalStaff/Medread';
import Home from './Components/Home/Home';
import Pres from './Components/Pres/Pres';
import Readpres from './Components/Pres/Readpres';
import Readall from './Components/Pres/Readall';
import Appointment from './Components/Appointment/Appointment';
import Apporead from './Components/Appointment/Apporead';
import Readpt from './Components/Patient/Readpt';
import Hmain from './Components/Signed/Hmain';
import SearchApptmt from './Components/UserLogin/SearchApptmt';
import Userhome from './Components/UserLogin/Userhome';
import Patientreg from './Components/UserLogin/Patientreg';
import Readpatient from './Components/UserLogin/Readpatient';
import Presread from './Components/UserLogin/Presread';
import Apptread from './Components/UserLogin/Apptread';
import Addappo from './Components/UserLogin/Addappo';
import Signup from './Components/Signed/Signup';
import Signin from './Components/Signed/Signin';
function App() {
  return (
    <Router> <Routes>
     
      <Route exact path='/Hmain' element={<Hmain />}></Route>
      <Route exact path='/Addappo' element={<Addappo />}></Route>
      <Route exact path='/Presread' element={<Presread />}></Route>
      <Route exact path='/Apptread' element={<Apptread />}></Route>
      <Route exact path='/Readpatient' element={<Readpatient />}></Route>
      <Route exact path='/Patientreg' element={<Patientreg />}></Route>
      <Route exact path='/Userhome' element={<Userhome />}></Route>
      <Route exact path='/SearchApptmt' element={<SearchApptmt />}></Route>
      <Route exact path='/Home' element={<Home />}></Route>
      <Route exact path='/Appointment' element={<Appointment />}></Route>
      <Route exact path='/Patient' element={<Patient />}></Route>
      <Route exact path='/MedicalStaff' element={<MedicalStaff />}></Route>
      <Route exact path='/Pres' element={<Pres />}></Route>
      <Route exact path='/Readpt' element={<Readpt />}></Route>
      <Route exact path='/Readpres' element={<Readpres />}></Route>
      <Route exact path='/Readall' element={<Readall />}></Route>
      <Route exact path='/Medread' element={<Medread />}></Route>
      <Route exact path='/Apporead' element={<Apporead />}></Route>
      <Route exact path='/' element={<Signin />}></Route>
      <Route exact path='/Signin' element={<Signin />}></Route>
      <Route exact path='/Signup' element={<Signup />}></Route>
      </Routes></Router>
  );
}

export default App;
