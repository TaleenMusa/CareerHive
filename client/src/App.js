import { Route, Routes } from 'react-router-dom';
import Form from './views/Form/Form';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogReg from './views/Logreg/LogReg';
import Dashboard from './components/LogReg/Dashboard';
import Info from './views/Information/Info';
import Home from './views/Home/Home';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem('user');
  useEffect(() => {
      axios.get("http://localhost:8000/api/users/loggedin", {withCredentials: true})
        .then(res => {
          setUser(res.data.user)
        })
        .catch(err => console.log(err))
    
  }, [])
  useEffect(() => {
    localStorage.setItem('user', user?._id)
  }, [user])

  return (
    <div className="App">

      <NavBar user={user} setUser={setUser}/>
      
      <Routes>
        <Route path="/" element={<Home  user={user}/>} />
        <Route path="/Add" element={<Form user={user}/>} />
        <Route path="/LogReg" element={<LogReg />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Info/:id" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
