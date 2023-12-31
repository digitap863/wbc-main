import React from 'react'
import cash from '../assets/Images/cashicon.png'
import box from '../assets/Images/boxtime.png'
import caldera from '../assets/Images/caldera.png'

function ChooseUsComponent() {
    return (
        <div className='relative group md:mx-10 lg:mx-20 mx-4 mt-20 mb-10'>
            <div className="absolute flex -inset-1 animate-pulse  opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt">
                <div className='w-1/2 bg-gradient-to-l rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                <div className='w-1/2 bg-gradient-to-r rounded-3xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
            </div>
            <div className='relative flex lg:flex-row flex-col bg-[#080B2A] md:p-5  p-3 rounded-3xl'>
                <div className='flex flex-col  lg:w-[40%]'>
                    <h5 className='text-white font-zen text-2xl'>Why choose us</h5>
                    <br />
                    <p className='font-mont text-slate-400 font-semibold text-sm'>ICO land is a generative NFT collectable project of 10,0000 unique, digitally hand drawn avatars immortalized on the ethereum blockchain</p>
                </div>
                <div className='lg:w-[60%] items-center grid grid-cols-3 md:mx-10 mx-3 mt-4 md:mt-10 lg:mt-0'>
                    <div className='relative group md:mx-5 mx-3 '>
                        <div className="absolute -inset-[2.0px] flex rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                            <div className='w-1/2 bg-gradient-to-l rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                            <div className='w-1/2 bg-gradient-to-r rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                        </div>
                        <div className='relative flex h-28 md:h-[9rem] p-3 bg-[#080B2A] justify-center items-center flex-col rounded-lg'>
                            <img src={cash} className='w-20' alt="team" />
                            <p className='font-mont text-white text-xs md:w-32 md:mt-1 text-center' >Lucratice Returns</p>
                        </div>
                    </div>
                    <div className='relative group md:mx-5 mx-3'>
                        <div className="absolute -inset-[2.0px] flex rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                            <div className='w-1/2 bg-gradient-to-l rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                            <div className='w-1/2 bg-gradient-to-r rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                        </div>
                        <div className='relative flex h-28 md:h-[9rem] p-3 bg-[#080B2A] justify-center items-center flex-col rounded-lg'>
                            <img src={box} className='w-20 ' alt="team" />
                            <p className='font-mont text-white md:text-xs text-[9px] md:w-32 text-center md:mt-1'>Stakeholder Benefits</p>
                        </div>
                    </div>
                    <div className='relative group md:mx-5 mx-3'>
                        <div className="absolute -inset-[2.0px] flex rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                            <div className='w-1/2 bg-gradient-to-l rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                            <div className='w-1/2 bg-gradient-to-r rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                        </div>
                        <div className='relative flex h-28 md:h-[9rem] p-3 bg-[#080B2A] justify-center items-center flex-col rounded-lg '>
                            <img src={caldera} className='w-20 ' alt="team" />
                            <p className='font-mont text-white md:text-xs text-[9px] md:w-32 text-center md:mt-1'>DiverseProjects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsComponent