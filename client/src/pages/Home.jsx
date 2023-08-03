import React, { lazy } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import AboutF from '../components/AboutF'
import WorldMapComponent from '../components/WorldMapComponent'
import Footer from '../components/Footer'
import CryptoTable from '../components/cryptoTable'
import InvestorSwiper from '../components/InvestorSwiper'
import InvestmentFlow from '../components/InvestmentFlow'
import RandomStars from '../components/RandomWhite';
import RandomWhiteDiv from '../components/whitePatch';

function Home() {
  return (
    <div>
      <Navbar active={0} />
      <Slider />
      <AboutF />
      <div className='relative group mx-4 md:mx-16 mt-28'>
        <div className="absolute -inset-1 bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className='relative flex  bg-[#080B2A] p-5 md:flex-row flex-col rounded-lg'>
          <div className='flex flex-col  md:w-[40%]'>
            <p className='uppercase text-[#C004DE] font-zen text-sm'>our target</p>
            <h5 className='uppercase text-white font-zen text-2xl'>we are targeting</h5>
            <br />
            <p className='font-mont text-slate-400 font-semibold text-sm'>With a minimum investment value of 1 lakh, you can be part of a promising venture that guarantees returns. We assure a minimum of 25-30% returns on your investment, giving you financial security and growth potential.</p>
          </div>
          <div className='relative md:w-[60%] items-center flex md:ml-20'>
            <div className='border p-3 mt-4 md:mt-0 md:p-6 border-gray-700 rounded '>
              <p className='font-zen md:text-4xl text-xl bg-gradient-to-r from-purple-500 to-pink-500  text-transparent bg-clip-text'>INR 10,00,00,000 /-</p>
            </div>
          </div>
        </div>
      </div>
      <InvestmentFlow/>
      <InvestorSwiper />
      <WorldMapComponent />
      <div className='relative group mx-5 md:mx-16 mt-12'>
        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className='relative flex  bg-[#080B2A] p-5 md:flex-row flex-col rounded-lg'>
          <div className='flex flex-col  md:w-[30%]'>
            <p className='uppercase text-[#C004DE] font-zen text-sm'>join wbc</p>
            <h5 className='uppercase text-white font-zen text-lg md:text-2xl'>Discover the growth of crypto world</h5>
          </div>
          <div className='relative md:w-[60%] items-center flex mt-3 md:mt-0 md:ml-20'>
            <p className='font-mont text-slate-400 font-semibold text-xs md:text-base'>Welcome to the world of crypto mining! We provide top-of-the-line equipment and expert guidance to help you start earning cryptocurrency right away. Join our community of miners today and start profiting!</p>
          </div>
        </div>
      </div>
      <CryptoTable />
      <Footer />
      <RandomStars num={18} />
      <RandomWhiteDiv num={11} />
    </div>
  )
}

export default Home