import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ProgressBar from '../../components/ProgressBar'
import CoinFlow from '../../components/CoinFlow'
import CryptoTable from '../../components/cryptoTable'
import AdComponent from '../../components/AdComponent'

function WbcCoin() {
  return (
    <div>
      <Navbar active={2}/>
      <Slider />
      <ProgressBar />
      <CoinFlow />
      <AdComponent/>
      <div className='relative group mx-5 md:mx-8 lg:mx-16 mt-12'>
        <div className="absolute -inset-[3px] bg-gradient-to-r from-[#080B2A] via-[#15bffd] to-[#9C37FD] rounded-xl opacity-75 group-hover:blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className='relative flex  bg-[#080B2A] p-5 md:flex-row flex-col rounded-lg'>
          <div className='flex flex-col  md:w-[30%]'>
            <p className='uppercase text-[#C004DE] font-zen text-sm'>join wbc</p>
            <h5 className='text-white font-zen text-lg md:text-2xl'>Discover The Growth Of Crypto World</h5>
          </div>
          <div className='relative md:w-[60%] items-center flex mt-3 md:mt-0 md:ml-20'>
            <p className='font-mont text-slate-400 font-semibold text-xs md:text-base'>Welcome to the world of crypto mining! We provide top-of-the-line equipment and expert guidance to help you start earning cryptocurrency right away. Join our community of miners today and start profiting!</p>
          </div>
        </div>
      </div>
      <CryptoTable/>
      <Footer />
    </div>
  )
}

export default WbcCoin