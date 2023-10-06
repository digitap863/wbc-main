import React, { useEffect, useState } from 'react'
import logo from '../assets/Images/wbcLogo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import menu from '../assets/Images/menu.png'
import disc from '../assets/Images/discord.png'
import tiktok from '../assets/Images/tiktok.png'
import youtube from '../assets/Images/utube.png'
import telegram from '../assets/Images/tele.png'
import unk from '../assets/Images/unk.png'
import twitter from '../assets/Images/twitter.png'
import { toast } from 'react-toastify'



const Stars = ()=> {
  const numberOfDivs =5 ; // Adjust the number of divs as per your requirement

  const generateRandomPosition = () => {
      // Generate random x and y coordinates between 0 and 100
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      return { x: randomX, y: randomY };
  };
return (
  <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: numberOfDivs }).map((_, index) => {
              const { x, y } = generateRandomPosition();
              return (
                  <div key={index} className="absolute animate-pulse opacity-75" style={{ left: `${x}%`, top: `${y}%` }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                          <path d="M5.96575 0.957844L5.24064 7.0003L0.562735 9.85285L5.93075 10.9502L8.66181 16.3888L9.38692 10.3463L14.0648 7.4938L8.6968 6.39645L5.96575 0.957844Z" fill="#15BFFD" />
                      </svg>
                  </div>
              );
          })}
      </div>
)
}


function Navbar({ active }) {
  const check = localStorage.getItem('loggedIn')
  const [checck, setChecck] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname
  const navItems = [
    {
      id: 0,
      title: 'Home',
      link: "/"
    },
    {
      id: 1,
      title: 'About',
      link: "/about"
    },
    {
      id: 2,
      title: 'Projects',
      link: "/project"
    },
    {
      id: 3,
      title: 'Be Our Partner',
      link: "/partner"
    },
    {
      id: 4,
      title: 'Contact Us',
      link: "/contact"
    }
  ]
  const [toggle, setToggle] = useState(null)
  function clickHandler() {
    if (!toggle) {
      setToggle('top-[0%] z-50 min-h-[87vh] justify-between text-center text-xl  bg-[#080B2A]')
    } else {
      setToggle(null)
    }
  }
  useEffect(() => {
    setChecck(check)
  }, [])
    // Handle touchmove event and prevent default scrolling behavior when the menu is open
    useEffect(() => {
      function handleTouchMove(event) {
        if (toggle) {
          event.preventDefault();
        }
      }
  
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
  
      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }, [toggle]);
  return (
    <header className="pt-4">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <span className='text-3xl w-[20%] md:auto cursor-pointer md:hidden text-white z-[100]' onClick={(clickHandler)}><img src={menu} className='w-8' alt="" /></span>
        <div className='w-[30%] md:w-auto'>
          <img className="w-32 cursor-pointer z-[1000] relative" src={logo} alt="..." onClick={() => navigate('/')} />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute md:min-h-fit left-0 top-[-100%]  text-sm md:w-auto px-5 ${toggle} flex flex-col items-center w-full `}>
            <Stars/>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-zen text-white md:mt-0 mt-40">
            {navItems.map((elem) => (
              <li key={elem.id}>
                <a className={`hover:text-gray-500 ${active === elem.id && 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold animate-pulse'}`} href={elem.link}>{elem.title}</a>
              </li>
            ))}
          </ul>
          {toggle?<div className='w-full flex flex-col items-center'>
            <div className='flex w-3/4 justify-between '>
              <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={disc} alt="discordicon" /></button>
              <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={tiktok} alt="discordicon" /></button>
              <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={youtube} alt="discordicon" /></button>
              <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={telegram} alt="discordicon" /></button>
              <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={unk} alt="discordicon" /></button>
              <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={twitter} alt="discordicon" /></button>
            </div>
            <div className='border-gray-700 w-full mt-5 border-t'/>
            <p className='my-2 text-white text-sm'>© 2022. All rights reserved by WBC</p>
          </div>:''}
        </div>
        <div className="flex items-center justify-end gap-6 w-[20%] md:w-auto">
          {checck ? <button className="rounded-full bg-gradient-to-t  border-transparent w-10 h-10 from-[#15bffd] to-[#9C37FD] text-white pt-1 text-xl hover:bg-gradient-to-b hover:border-[#540075]" onClick={() => {
            setChecck(false)
            toast.success('succesfully loggedout')
            localStorage.removeItem('loggedIn')
            navigate('/')
          }}><ion-icon name="log-out-outline"></ion-icon></button> :
            pathName==='/login'?'':<button className="border-[#15BFFD] border rounded-md text-white px-5 py-1 hover:bg-[#87acec]" onClick={() => navigate('/login')}>Login</button>}

        </div>
      </nav>
    </header>
  )
}

export default Navbar