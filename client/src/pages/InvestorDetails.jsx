import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import InvestorSwiper from '../components/InvestorSwiper'
import InvestorImage from '../assets/Images/investorImage.png'
import Footer from '../components/Footer'
import adhaar from '../assets/Images/adhaar.png'
import RandomStars from '../components/RandomWhite';
import RandomWhiteDiv from '../components/whitePatch';

function InvestorDetails() {
    const user = {
        name:'Ashkar Ali',
        email:"ashkarali@gmail.com",
        number:1234567890,
        dob:'01/07/2000',
        city:'ernakulam',
        state:'kerala',
        zip:682028,
        country:'India',
        id:'5549 1115 6699 5555'
    }
    return (
        <div>
            <Navbar />
            <Slider />
            <div className='flex flex-col items-center mx-2 md:mx-20'>
                <p className='font-zen text-white text-xl my-5'>Investor Details</p>
                <div className='flex md:flex-row flex-col relative w-full items-center justify-center'>
                    <div className='relative group flex justify-center md:w-auto w-[5em] my-4'>
                        <div className="absolute -inset-[3.0px] flex group-hover:blur-lg rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                            <div className='w-1/2 bg-gradient-to-l rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                            <div className='w-1/2 bg-gradient-to-r rounded-xl from-[#080B2A] via-[#15bffd] to-[#9C37FD]'></div>
                        </div>
                        <img src={InvestorImage} alt="" className='md:w-40 md:h-60 w-20 rounded-lg bg-[#21094a] relative' />
                    </div>
                    <div className='flex flex-col md:w-[70%]'>
                        <input type="text" name='name' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[45rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='FULL NAME' value={user.name}/>
                        <input type="text" name='email' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[45rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='EMAIL ADDRESS' value={user.email} />
                        <div className='flex'>
                            <input type="text" name='number' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[21rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='CONTACT NO'  value={user.number} />
                            <input type="text" name='dob' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[21rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='Date Of Birth'  value={user.dob} />
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <input type="text" name='city' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[26rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='CITY' value={user.city}  />
                    <input type="text" name='state' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[27rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='STATE' value={user.state}  />
                </div>
                <div className='flex'>
                    <input type="text" name='zip' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[26rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='ZIP/POSTAL'  value={user.zip}  />
                    <input type="text" name='country' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[27rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='COUNTRY'  value={user.country}  />
                </div>
                <input type="text" name='id' className='md:mx-6 md:my-4 my-2 bg-transparent px-3  w-full md:w-[56rem]  text-purple-600 font-semibold placeholder:text-gray-700 font-space  py-2 border rounded-lg border-purple-500' placeholder='ID CARD NUMBER' value={user.id}  />

            </div>
            <div className='relative group mx-4 md:mx-44 mt-10'>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#080B2A]  to-purple-600 rounded-lg opacity-75 group-hover:opacity-100 group-hover:blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className='relative flex  bg-[#080B2A] p-1 md:flex-row flex-col rounded-lg'>
                    <div className='flex justify-center  py-3 md:w-[40%]'>
                        <img src={adhaar} className='w-60' alt="" />
                    </div>
                    <div className='relative md:w-[60%] items-center flex flex-col justify-center md:ml-20'>
                        <p className='text-white w-full font-zen text-center my-2'>Total Invested</p>
                        <div className='border p-3 mt-4 md:mt-0 md:p-6 border-gray-700 rounded '>
                            <p className='font-zen md:text-2xl text-xl bg-gradient-to-r from-purple-500 to-pink-500  text-transparent bg-clip-text'>INR 1,00,000 /-</p>
                        </div>
                    </div>
                </div>
            </div>
            <InvestorSwiper />
            <Footer />
            <RandomStars num={15} />
            <RandomWhiteDiv num={6} />
        </div>
    )
}

export default InvestorDetails