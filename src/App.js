import './App.css';
import { Choices } from './components/Choices/Choices';
import { DoctorRegistration } from './components/DoctorRegistration/DoctorRegistration';
import {Home} from './components/Home/Home';
import { LogIn } from './components/LogIn/LogIn';
import { PatientRegistration } from './components/PatientRegistration/PatientRegistration';
import {DataContext, SharedData} from './context/SharedData';

function App() {
  return (
    <SharedData>
      <PatientRegistration/>
    </SharedData>
  );
}

export default App;
