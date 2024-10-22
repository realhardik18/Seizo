import './App.css';
import Map from './Map.jsx'
import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/map" element={<Map />} /> 
      </Routes>
    </Router>
  );
}

export default Main;

