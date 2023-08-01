import React from 'react'
import img1 from '../assets/Images/projectimg1.png'
import img2 from '../assets/Images/projectimg2.png'
import img3 from '../assets/Images/projectimg3.png'
import img4 from '../assets/Images/projectimg4.png'
import img5 from '../assets/Images/projectimg5.png'
import img6 from '../assets/Images/projectimg6.png'
import img7 from '../assets/Images/projectimg7.png'
import img8 from '../assets/Images/projectimg8.png'
import img9 from '../assets/Images/projectimg9.png'
import GradButton from './GradButton'
import { useNavigate } from 'react-router-dom'

function ProjectsComponent() {
    const projects = [
        {
            title:'Crypto Exchange',
            method:'/project/crypto-exchange',
            img:img1
        },
        {
            title:'Edu Tech',
            method:'/project/edu-tech',
            img:img2
        },
        {
            title:'NFT',
            method:'/project/nft',
            img:img3
        },
        {
            title:'Luxury Resort',
            method:'/project/luxury-resort',
            img:img4
        },
        {
            title:'Seef Shirts',
            method:'/project/seef-shirt',
            img:img5
        },
        {
            title:'Modular Kitchen',
            method:'/project/modular-kitchen',
            img:img6
        },
        {
            title:'Mineral Water',
            method:'/project/mineral-water',
            img:img7
        },
        {
            title:'Real Estate',
            method:'/project/real-estate',
            img:img8
        },
        {
            title:'WBC Coin',
            method:'/project/wbc-coin',
            img:img9
        },
        
    ]
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <h1 className='text-white font-zen text-xl md:text-3xl'>Our Projects <span className='text-blue-500'>Coming Soon</span></h1>       
        <div className='mt-12 grid md:grid-cols-3 grid-cols-2 '>
            {projects.map((elem)=>(
            <div className='relative mx-4 group my-7' key={elem.title}>
                <div className='absolute bg-gradient-to-b from-[#080B2A] to-pink-500 -inset-[3px] rounded-xl group-hover:blur'></div>
                <div className='relative bg-[#080B2A] flex flex-col items-center p-5 rounded-xl'>
                    <img src={elem.img} alt="" className='w-52 h-52 object-cover mb-5'/>
                    <GradButton width={'w-40'} text={elem.title} handler={()=>navigate(elem.method)}/>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsComponent