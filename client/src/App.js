import { Form, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Form />} /> */}
      </Routes>
    </div>
  );
}

export default App;
