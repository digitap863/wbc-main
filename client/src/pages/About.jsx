import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import AboutF from '../components/AboutF'
import ChairmanComponent from '../components/ChairmanComponent'
import Footer from '../components/Footer'
import CryptoTable from '../components/cryptoTable'
import WorldMapComponent from '../components/WorldMapComponent'
import ReturnsComponent from '../components/ReturnsComponent'
import CoreTeam from '../components/CoreTeam'
import RandomStars from '../components/RandomWhite';
import RandomWhiteDiv from '../components/whitePatch';

function About() {
  return (
    <div>
      <Navbar active={1} />
      <Slider />
      <AboutF hide={true}/>
      <ChairmanComponent />
      <div className='relative group mx-5 md:mx-16 -mt-12'>
        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-xl opacity-75 group-hover:blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className='relative flex  bg-[#080B2A] p-5 lg:flex-row flex-col rounded-lg'>
          <div className='flex flex-col  lg:w-[30%]'>
            <p className='uppercase text-[#C004DE] font-zen text-sm'>join wbc</p>
            <h5 className='uppercase text-white font-zen text-lg md:text-2xl'>Discover the growth of crypto world</h5>
          </div>
          <div className='relative lg:w-[60%] items-center flex mt-3 lg:mt-0 lg:ml-20'>
            <p className='font-mont text-slate-400 font-semibold text-xs md:text-base'>Welcome to the world of crypto mining! We provide top-of-the-line equipment and expert guidance to help you start earning cryptocurrency right away. Join our community of miners today and start profiting!</p>
          </div>
        </div>
      </div>
      <CryptoTable />
      <WorldMapComponent />
      <ReturnsComponent/>
      <CoreTeam/>
      <Footer />
      <RandomStars num={15} />
      <RandomWhiteDiv num={10} />
    </div>
  )
}

export default About    