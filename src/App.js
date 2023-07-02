import './App.css';
import { AdminPage } from './components/AdminPage/AdminPage';
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

function App() {
  return (
    <SharedData>
      <DoctorPage/>
    </SharedData>
  );
}

export default App;
