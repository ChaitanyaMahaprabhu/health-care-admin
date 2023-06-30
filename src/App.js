import './App.css';
import { Choices } from './components/Choices/Choices';
import {Home} from './components/Home/Home';
import { LogIn } from './components/LogIn/LogIn';
import {DataContext, SharedData} from './context/SharedData';

function App() {
  return (
    <SharedData>
      <Choices/>
    </SharedData>
  );
}

export default App;
