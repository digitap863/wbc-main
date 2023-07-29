import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import ReturnsComponent from '../components/ReturnsComponent'
import ProjectsComponent from '../components/ProjectsComponent'

function Projects() {
  return (
    <div>
        <Navbar active={2}/>
        <Slider/>
        <ProjectsComponent/>
        <div className='relative group mx-16 mt-20 mb-10'>
        <div className="absolute -inset-1 bg-gradient-to-r from-[#080B2A]  to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className='relative flex  bg-[#080B2A] p-5 m- rounded-3xl'>
          <div className='flex flex-col  w-[40%]'>
            <p className='uppercase text-[#C004DE] font-zen text-sm'>our future</p>
            <h5 className='uppercase text-white font-zen text-2xl'>Future We Seek</h5>
            <br />
            <p className='font-mont text-slate-400 font-semibold text-sm'>With a minimum investment value of 1 lakh, you can be part of a promising venture that guarantees returns. We assure a minimum of 25-30% returns on your investment, giving you financial security and growth potential.</p>
          </div>
          <div className='relative w-[60%] items-center flex ml-20'>
            <div className='border p-6 border-gray-700 rounded '>
              <p className='font-zen text-4xl bg-gradient-to-r from-purple-500 to-blue-500  text-transparent bg-clip-text'>30 + PROJECTS COMING SOON</p>
            </div>
          </div>
        </div>
      </div>
        <ReturnsComponent/>
        <Footer/>
    </div>
  )
}

export default Projects