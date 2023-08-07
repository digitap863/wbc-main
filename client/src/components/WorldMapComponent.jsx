import React from 'react'
import MapChart from './WorldMap';

function WorldMapComponent() {
  return (
    <div className='mt-16 -mb-2 mx-1 md:mx-16 flex flex-col items-center'>
      <h4 className='font-zen text-white text-2xl mb-2 md:text-4xl lg:text-3xl text-center'>We Operate Worldwide</h4>
      <p className='font-mont text-slate-500 font-semibold lg:w-[35%] md:w-96 w-60 text-center text-xs md:text-sm mb-8'>The largest and unique Super rare WBC Community based on Crypto</p>
      <div className='flex font-mont'>
        <div className='flex flex-col md:mx-3 border-l border-gray-500 px-4'>
          <p className='text-slate-400 md:text-sm text-xs mb-1  font-semibold'>Founded</p>
          <h5 className='text-white md:text-2xl font-zen font-extrabold'>2023</h5>
        </div>
        <div className='flex flex-col border-l md:mx-3 border-gray-400 px-4'>
          <p className='text-slate-400 md:text-sm  font-semibold text-xs mb-1'>Founders</p>
          <h5 className='text-white font-zen md:text-2xl font-extrabold'>2</h5>
        </div>
        <div className='flex flex-col border-l md:mx-3 border-gray-500 px-4'>
          <p className='text-slate-400 md:text-sm font-semibold text-xs mb-1'>Total Team</p>
          <h5 className='text-white md:text-2xl  font-zen font-extrabold'>100+</h5>
        </div>
        <div className='flex flex-col border-l border-r md:mx-3 border-gray-500 px-4'>
          <p className='text-slate-400 font-semibold md:text-sm text-xs mb-1'>Countries</p>
          <h5 className='text-white md:text-2xl  font-zen font-extrabold'>10</h5>
        </div>
      </div>
      <MapChart/>
    </div>
  )
}

export default WorldMapComponent;