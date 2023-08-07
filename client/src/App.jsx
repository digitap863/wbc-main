import React, { Suspense, lazy } from 'react';
import './App.css'; // Import the App.css file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BeOurPartner from './pages/BeOurPartner';
const About = lazy(() => import('./pages/About'))
const ProjectRouter = lazy(() => import('./routes/ProjectRouter'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const InvestorDetails = lazy(() => import('./pages/InvestorDetails'))
import logo from '../src/assets/Images/wbcLogo.png'
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTopOnNavigate from './components/AutoScroll';


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
          <ScrollToTopOnNavigate/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<ErrorBoundary><Suspense fallback={<FallbackUI />}><About /></Suspense></ErrorBoundary>} />
          <Route path="/contact" element={<ErrorBoundary><Suspense fallback={<FallbackUI />}><Contact /></Suspense></ErrorBoundary>} />
          <Route path="/project/*" element={<ErrorBoundary><Suspense fallback={<FallbackUI />}><ProjectRouter /></Suspense></ErrorBoundary>} />
          <Route path="/partner" element={<ProtectedRoute><ErrorBoundary><Suspense fallback={<FallbackUI />}><BeOurPartner /></Suspense></ErrorBoundary></ProtectedRoute>} />
          <Route path="/login" element={<ErrorBoundary><Suspense fallback={<FallbackUI />}><Login /></Suspense></ErrorBoundary>} />
          <Route path="/investor-details" element={<ErrorBoundary><Suspense fallback={<FallbackUI />}><InvestorDetails /></Suspense></ErrorBoundary>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      </div>
    </BrowserRouter>
  );
}

export default App;
