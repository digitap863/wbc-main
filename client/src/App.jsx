import React, { Suspense, lazy } from 'react';
import './App.css'; // Import the App.css file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BeOurPartner from './pages/BeOurPartner';
const About=lazy(()=>import('./pages/About'))
const ProjectRouter=lazy(()=>import('./routes/ProjectRouter'))
const Contact = lazy(()=>import('./pages/Contact'))


const FallbackUI = () => <div className='bg-red-500 h-full'>Loading...</div>;


function App() {
  return (
    <BrowserRouter>
      <div className="body"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<FallbackUI />}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<FallbackUI />}><Contact /></Suspense>} />
          <Route path="/project/*" element={<Suspense fallback={<FallbackUI />}><ProjectRouter /></Suspense>} />
          <Route path="/partner" element={<Suspense fallback={<FallbackUI />}><BeOurPartner /></Suspense>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
