import { Form, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogReg from './views/Logreg/LogReg';
import Dashboard from './components/LogReg/Dashboard';
import Info from './views/Information/Info';
import Home from './views/Home/Home';
function App() {
  return (
    <div className="App">

<Info/>
      
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
