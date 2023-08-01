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

const FallbackUI = () => <div className='bg-red-500 h-full'>Loading...</div>;

function ProjectRouter() {
  return (
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
  );
}

export default ProjectRouter;
