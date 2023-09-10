import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import AllCourses from './components/courses/AllCourses';
import FullStack from './components/courses/FullStack';
import DataScience from './components/courses/DataScience';
import CyberSecurity from './components/courses/CyberSecurity';
import Career from './components/courses/Career';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">All</NavLink>
            </li>
            <li>
              <NavLink to="/fullstack">Full Stack Development</NavLink>
            </li>
            <li>
              <NavLink to="/datascience">Data Science</NavLink>
            </li>
            <li>
              <NavLink to="/cybersecurity">Cyber Security</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
