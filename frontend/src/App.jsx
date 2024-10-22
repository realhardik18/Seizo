import './App.css';
import Map from './Map.jsx'
import Home from './Home.jsx';
import About from './About.jsx';
import Team from './Team.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/map" element={<Map />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/team" element={<Team />} /> 
      </Routes>
    </Router>
  );
}

export default Main;

