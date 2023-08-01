import React, { Suspense, lazy } from 'react';
import './App.css'; // Import the App.css file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BeOurPartner from './pages/BeOurPartner';
const About = lazy(() => import('./pages/About'))
const ProjectRouter = lazy(() => import('./routes/ProjectRouter'))
const Contact = lazy(() => import('./pages/Contact'))
import logo from '../src/assets/Images/wbcLogo.png'
import RandomWhiteDiv from './components/whitePatch';
import RandomStars from './components/RandomWhite';


const FallbackUI = () => <div className="preloader loaded-success fixed top-0 inset-0 bg-transparent bg-opacity-10 z-50">
  <div className="absolute left-[35%] md:left-[46%] top-1/2 transform -translate-y-1/2">
    <div className="relative mx-auto my-12">
      <div className="inline-block">
        <span className="relative flex h-10 w-full">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <img className='relative animate-bounce inline-flex rounded-full h-10' src={logo} alt="" />
        </span>
      </div>
    </div>
  </div>
</div>;


function App() {
  return (
    <BrowserRouter>
      <div className="body relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<FallbackUI />}><About /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<FallbackUI />}><Contact /></Suspense>} />
          <Route path="/project/*" element={<Suspense fallback={<FallbackUI />}><ProjectRouter /></Suspense>} />
          <Route path="/partner" element={<Suspense fallback={<FallbackUI />}><BeOurPartner /></Suspense>} />
        </Routes>
        <RandomWhiteDiv/>
        <RandomStars/>
      </div>
    </BrowserRouter>
  );
}

export default App;
