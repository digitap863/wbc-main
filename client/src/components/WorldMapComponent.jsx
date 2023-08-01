import React from 'react'
import MapChart from './WorldMap';

function WorldMapComponent() {
  return (
    <div className='mt-16 -mb-2 mx-3 md:mx-16 flex flex-col items-center'>
      <h4 className='uppercase font-zen text-white text-3xl'>we operate worldwide</h4>
      <p className='font-mont text-slate-500 font-semibold md:w-[45%] text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla. Sodales netus viverra ipsum consequat. </p>
      <div className='flex font-mont'>
        <div className='flex flex-col md:mx-3 border-l border-gray-500 px-4'>
          <p className='text-slate-400 md:text-sm text-xs mb-1'>Founded</p>
          <h5 className='text-white text-2xl font-extrabold'>2023</h5>
        </div>
        <div className='flex flex-col border-l md:mx-3 border-gray-400 px-4'>
          <p className='text-slate-400 md:text-sm text-xs mb-1'>Founders</p>
          <h5 className='text-white text-2xl font-extrabold'>2</h5>
        </div>
        <div className='flex flex-col border-l md:mx-3 border-gray-500 px-4'>
          <p className='text-slate-400 md:text-sm text-xs mb-1'>Total Team</p>
          <h5 className='text-white text-2xl font-extrabold'>100+</h5>
        </div>
        <div className='flex flex-col border-l md:mx-3 border-gray-500 px-4'>
          <p className='text-slate-400 md:text-sm text-xs mb-1'>Countries Represented</p>
          <h5 className='text-white text-2xl font-extrabold'>10</h5>
        </div>
      </div>
      <MapChart/>
    </div>
  )
}

export default WorldMapComponent;