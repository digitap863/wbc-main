import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Project = lazy(() => import('../pages/Projects'));
const CryptoProject = lazy(() => import('../pages/Projects/CryptoProject'));
const EduTech = lazy(()=>import('../pages/Projects/EduTech'))
const LuxuryResort = lazy(()=>import('../pages/Projects/LuxuryResort'))
const MineralWater = lazy(()=>import('../pages/Projects/MineralWater'))
const ModularKitchen = lazy(()=>import('../pages/Projects/ModularKitchen'))
const NftProject = lazy(()=>import('../pages/Projects/NftProject'))
const RealEstate = lazy(()=>import('../pages/Projects/RealEstate'))
const WbcCoin = lazy(()=>import('../pages/Projects/WbcCoin'))
const SeefShirt = lazy(()=>import('../pages/Projects/SeefShirt'))
import logo from '../assets/Images/wbcLogo.png'
import RandomStars from '../components/RandomWhite';
import RandomWhiteDiv from '../components/whitePatch';


const FallbackUI = () => 
<div className="preloader loaded-success fixed top-0 inset-0 bg-transparent bg-opacity-10 z-50">
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

function ProjectRouter() {
  return (
   <div>
     <Routes>
      <Route path="/" element={<Suspense fallback={<FallbackUI />}><Project /></Suspense>} />
      <Route path="/crypto-exchange" element={<Suspense fallback={<FallbackUI />}><CryptoProject /></Suspense>} />
      <Route path="/edu-tech" element={<Suspense fallback={<FallbackUI />}><EduTech /></Suspense>} />
      <Route path="/luxury-resort" element={<Suspense fallback={<FallbackUI />}><LuxuryResort /></Suspense>} />
      <Route path="/mineral-water" element={<Suspense fallback={<FallbackUI />}><MineralWater /></Suspense>} />
      <Route path="/modular-kitchen" element={<Suspense fallback={<FallbackUI />}><ModularKitchen /></Suspense>} />
      <Route path="/nft" element={<Suspense fallback={<FallbackUI />}><NftProject /></Suspense>} />
      <Route path="/real-estate" element={<Suspense fallback={<FallbackUI />}><RealEstate /></Suspense>} />
      <Route path="/wbc-coin" element={<Suspense fallback={<FallbackUI />}><WbcCoin /></Suspense>} />
      <Route path="/seef-shirt" element={<Suspense fallback={<FallbackUI />}><SeefShirt /></Suspense>} />
    </Routes>
    <RandomStars num={10} />
     <RandomWhiteDiv num={10} />
   </div>
  );
}

export default ProjectRouter;
