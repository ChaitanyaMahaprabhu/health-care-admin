import './App.css';
import { AdminPage } from './components/AdminPage/AdminPage';
import { Form, Route, Routes } from "react-router-dom";
import { Choices } from './components/Choices/Choices';
import { DoctorCard, DoctorCardAvailable, DoctorCardUnavailable } from './components/DoctorCard/DoctorCard';
import { DoctorRegistration } from './components/DoctorRegistration/DoctorRegistration';
import {Home} from './components/Home/Home';
import { LogIn } from './components/LogIn/LogIn';
import { AdminNavbar } from './components/Navbars/AdminNavbar';
import { PatientRegistration } from './components/PatientRegistration/PatientRegistration';
import { DoubleStats } from './components/Statistics/DoubleStats';
import { SingleStats } from './components/Statistics/SingleStats';
import {DataContext, SharedData} from './context/SharedData';
import { DoctorPage } from './components/DoctorPage/DoctorPage';
import {NotFound} from './components/NotFound/NotFound';
import { PatientPage } from './components/PatientPage/PatientPage';
import { Concepts } from './components/Additional/Concepts';
import { CheckList } from './components/Additional/CheckList';

function App() {
  return (
    <SharedData>
      <Routes>
        <Route path = '' element = {<Home/>} />
        <Route path = '/Choices' element = {<Choices/>} />
        <Route path = '/PatientRegistration' element = {<PatientRegistration/>} />
        <Route path = '/DoctorRegistration' element = {<DoctorRegistration/>} />
        <Route path = '/Login' element = {<LogIn/>} />
        <Route path = '/Concepts' element = {<Concepts/>} />
        <Route path = '/Checklist' element = {<CheckList/>} />
        <Route path = '/AdminPage' element = {<AdminPage/>} />
        <Route path = '/DoctorPage' element = {<DoctorPage/>} />
        <Route path = '/PatientPage' element = {<PatientPage/>} />
        <Route path = '*' element = {<NotFound/>} />
      </Routes>
    </SharedData>
  );
}

export default App;
