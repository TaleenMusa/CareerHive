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
import MyJobs from './views/MyJobs';
import CompanyCard from './components/CompanyCard/CompnayCard';
function App() {
  const [user, setUser] = useState(null);
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

  const [mood, setMood] = useState({ color: "#45505b", backgroundColor: "#f2f3f5" });
  const [dark , setDark] = useState(false);
  const [style, setStyle] = useState({
    backgroundColor: 'rgb(32, 33, 36)',
    color: 'white',
  });

  useEffect(() => {
    if (dark) {
      setStyle({ backgroundColor: 'rgb(32, 33, 36)', color: 'white' });
    } else {
      setStyle({ backgroundColor: 'white', color: 'black' });
    }
  }, [dark]);


  return (
    <div className="App" style={mood}>
      <NavBar user={user} setUser={setUser} mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>

      
      <Routes>
        <Route exact path="/" element={<Home  user={user} mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route exact path="/add" element={<Form user={user} mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route exact path="/edit/:id" element={<Form user={user} mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route exact path="/my-job/:userId" element={<MyJobs user={user} mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route path="/logReg" element={<LogReg user={user} setUser={setUser}  mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route path="/dashboard" element={<Dashboard mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route path="/info/:id" element={<Info mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
        <Route path="/admin" element= {<Admin user={Admin} mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>}/>
        <Route path="/companycard" element={<CompanyCard  mood={mood} setMood={setMood} dark={dark} setDark={setDark}/>} />
      </Routes>
    </div>
  );
}

export default App;
