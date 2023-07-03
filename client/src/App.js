import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogReg from './views/Logreg/LogReg';
import Dashboard from './components/LogReg/Dashboard';
import Info from './views/Information/Info';




function App() {
  return (
    <div className="App">

<Info/>
      
      <Routes>
        {/* <Route path="/" element={<LogReg/>} />
        <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
