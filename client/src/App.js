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
import Admin from './views/Admin/SuperAdmin';
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
  const [location, setLocation] = useState('');
  useEffect(() => {
    localStorage.setItem('user', user?._id)
  }, [user])
  const addLocation = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/locations", location)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  } 


  return (
    <div className="App">

{/* <Info/> */}

      {/* <form onSubmit={addLocation}>
        <input type="text" onChange={(e) => setLocation(e.target.value)} />
        <input type="submit"  />
      </form> */}
      <NavBar user={user} setUser={setUser}/>

      
      <Routes>
        <Route path="/" element={<Home  user={user}/>} />
        <Route path="/add" element={<Form user={user}/>} />

        <Route path="/logReg" element={<LogReg />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/admin" element= {<Admin user={Admin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
