import './App.css';
import { AdminPage } from './components/AdminPage/AdminPage';
import { Form, Route, Routes } from "react-router-dom";
import { Choices } from './components/Choices/Choices';
import { DoctorCard, DoctorCardAvailable, DoctorCardUnavailable } from './components/DoctorCard/DoctorCard';
import { DoctorInfo } from './components/DoctorInfo/DoctorInfo';
import { DoctorRegistration } from './components/DoctorRegistration/DoctorRegistration';
import {Home} from './components/Home/Home';
import { LogIn } from './components/LogIn/LogIn';
import { AdminNavbar } from './components/Navbars/AdminNavbar';
import { PatientRegistration } from './components/PatientRegistration/PatientRegistration';
import { DoubleStats } from './components/Statistics/DoubleStats';
import { SingleStats } from './components/Statistics/SingleStats';
import {DataContext, SharedData} from './context/SharedData';
import { DoctorPage } from './components/DoctorPage/DoctorPage';
import { LogIn2 } from './components/LogIn/LogIn2';
import {NotFound} from './components/NotFound/NotFound';

function App() {
  return (
    <SharedData>
      <Routes>
        <Route path = '' element = {<Home/>} />
        <Route path = '/Choices' element = {<Choices/>} />
        <Route path = '/PatientRegistration' element = {<PatientRegistration/>} />
        <Route path = '/DoctorRegistration' element = {<DoctorRegistration/>} />
        <Route path = '/Login' element = {<LogIn/>} />
        <Route path = '/AdminPage' element = {<AdminPage/>} />
        <Route path = '/DoctorPage' element = {<DoctorPage/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </SharedData>
  );
}

export default App;
