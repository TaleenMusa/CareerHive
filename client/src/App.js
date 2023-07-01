import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
