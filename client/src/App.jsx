import React, { lazy } from 'react';
import './App.css'; // Import the App.css file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
const About=lazy(()=>import('./pages/About'))
const ProjectRouter=lazy(()=>import('./routes/ProjectRouter'))
const Contact = lazy(()=>import('./pages/Contact'))

function App() {
  return (
    <BrowserRouter>
      <div className="body"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project/*" element={<ProjectRouter/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
