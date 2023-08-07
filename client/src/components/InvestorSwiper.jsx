import React from 'react';
import InvestorImage from '../assets/Images/investorImage.png'
import icon from '../assets/Images/locIcon.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { SwiperNavButtons } from './SwiperButtons';

function InvestorSwiper() {
    const navigate = useNavigate()
    function investoretails() {
        navigate('/investor-details')
    }
    const Investors = [
        {
            name:"Irshad",
            place:'Vytila',
            investment:100000
        },
        {
            name:"Rahul",
            place:'Kakkanad',
            investment:100000
        },
        {
            name:"Jesbin",
            place:'Cheranallur',
            investment:100000
        },
        {
            name:"Maha",
            place:'Trivandrum',
            investment:100000
        },
        {
            name:"Shyam",
            place:'Ernakula,',
            investment:100000
        }
    ]
    return (
        <div className='lg:mx-16 mt-20 flex flex-col items-center '>
            <h4 className='text-white font-zen text-2xl mb-2'>Our Investors</h4>
            <p className='font-mont text-slate-500 font-semibold text-xs md:text-sm w-60 md:w-96 text-center'>The largest and unique Super rare WBC Community
                based on Crypto</p>
            <div className='w-full md:px-10 px-3 mt-7'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Navigation, Scrollbar, A11y]}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {Investors.map((elem)=>(
                        <SwiperSlide onClick={investoretails}>
                        <div className='  bg-[#21094a50] p-3 border md:mx-0 mx-8 border-[#15bffd] rounded-lg flex flex-col'>
                            <div className='flex justify-between'>
                                <div className='ml-2'>
                                    <p className='md:text-sm font-Zen text-[11px] text-white'>Current Investment</p>
                                    <p className='font-space text-white flex md:font-base text-[10px]'><span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clipPath="url(#clip0_1_209)">
                                            <path d="M8.48575 12.7029L4.04532 10.5349L8.48172 16.5049L9.14822 15.6079V12.3784L8.48575 12.7029Z" fill="#15BFFD" />
                                            <path d="M8.48172 0.504883L3.38626 9.64783H13.5773L8.48172 0.504883Z" fill="#15BFFD" />
                                            <path d="M13.5773 9.66138L8.48172 0.504883V9.66138H13.5773Z" fill="#1286B0" />
                                            <path d="M6.94022 5.58289H7.94022V6.58289H6.94022V5.58289Z" fill="#F7F8FA" />
                                            <path d="M8.48172 7.16492L8.4617 7.1554L3.38675 9.6554H3.39127L8.46622 12.1554L8.48624 12.1459L9.14822 11.8219V7.49133L8.48172 7.16492Z" fill="#147EA5" />
                                            <path d="M6.94022 3.69141H7.94022V4.69141H6.94022V3.69141Z" fill="#F7F8FA" />
                                            <path d="M8.48575 12.7029L8.48172 16.5049L12.9213 10.5309L8.48575 12.7029Z" fill="#1286B0" />
                                            <path d="M13.5678 9.6554L8.48172 7.16492L8.4617 7.1554L8.46622 12.1554L8.48624 12.1459L13.5723 9.6554H13.5678Z" fill="#0E526A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_209">
                                                <rect width="16" height="16" fill="white" transform="translate(0.480011 0.504883)" />
                                            </clipPath>
                                        </defs>
                                    </svg></span> ₹ {elem.investment}</p>
                                </div>
                                <button className='bg-gradient-to-b from-purple-500 to-blue-500 rounded-md px-2 md:py-2 text-[10px] font-zen  text-white hover:text-gray-800  hover:bg-gradient-to-r duration-500'>WBC MEMBER</button>
                            </div>
                            <div className='relative group flex justify-center my-4'>
                                <div className='bg-[#080B2A] relative flex justify-center'>
                                    <div className="absolute -inset-[3.0px] flex -left-1 -right-1 rounded-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
                                        <div className='w-1/2 bg-gradient-to-r rounded-xl to-[#080B2A] via-[#15bffd] from-[#9C37FD]'></div>
                                        <div className='w-1/2 bg-gradient-to-l rounded-xl to-[#080B2A] via-[#15bffd] from-[#9C37FD]'></div>
                                    </div>
                                    <img src={InvestorImage} alt="" className='md:w-auto h-60 md:h-60 w-40 rounded-lg bg-[#21094a] relative' />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='ml-2'>
                                    <p className='font-zen text-white md:text-base text-xs'>{elem.name}</p>
                                    <p className='font-mont text-slate-400 font font-semibold text-xs mt-1 flex'><span><img className='w-5 mr-2' src={icon} alt="" /></span>{elem.place}</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="31" viewBox="0 0 121 31" fill="none">
                                    <g filter="url(#filter0_f_124_341)">
                                        <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint0_linear_124_341)" strokeWidth="0.918033" />
                                    </g>
                                    <path d="M6.48001 17.65C17.5317 17.7845 39.3054 17.2608 50.3997 17.3927C50.4416 17.3932 50.4781 17.4166 50.4978 17.4536L51.7706 19.8514C51.8178 19.9404 51.9486 19.9297 51.9807 19.8342L56.1912 7.33934C56.2267 7.23402 56.3762 7.23562 56.4094 7.34167L59.5272 17.2903C59.5611 17.3985 59.7146 17.3973 59.7467 17.2886L60.3618 15.2076C60.3944 15.0974 60.5507 15.0982 60.5822 15.2087L63.0825 23.9852C63.1155 24.1014 63.2825 24.0942 63.3055 23.9756L66.1073 9.4983C66.1299 9.38161 66.2932 9.37201 66.3293 9.48524L68.9075 17.5701C68.9227 17.6177 68.9669 17.65 69.0168 17.65H115" stroke="url(#paint1_linear_124_341)" strokeWidth="0.918033" />
                                    <defs>
                                        <filter id="filter0_f_124_341" x="0.507213" y="0.835033" width="120.46" height="29.6598" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feGaussianBlur stdDeviation="2.98361" result="effect1_foregroundBlur_124_341" />
                                        </filter>
                                        <linearGradient id="paint0_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#15BFFD" stopOpacity="0" />
                                            <stop offset="0.245211" stopColor="#15BFFD" />
                                            <stop offset="0.507389" stopColor="#15BFFD" />
                                            <stop offset="0.838894" stopColor="#15BFFD" />
                                            <stop offset="1" stopColor="#15BFFD" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_124_341" x1="100.387" y1="17.4312" x2="22.11" y2="17.507" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#15BFFD" stopOpacity="0" />
                                            <stop offset="0.245211" stopColor="#15BFFD" />
                                            <stop offset="0.507389" stopColor="#15BFFD" />
                                            <stop offset="0.838894" stopColor="#15BFFD" />
                                            <stop offset="1" stopColor="#15BFFD" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                    <SwiperNavButtons/>
                </Swiper>
            </div>
        </div>
    )
}

export default InvestorSwiper