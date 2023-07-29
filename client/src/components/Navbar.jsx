import React, { useState } from 'react'
import logo from '../assets/Images/wbcLogo.png'
import { useNavigate } from 'react-router-dom'

function Navbar({active}) {
  const navItems = [
    {
      id:0,
      title:'Home',
      link:"/"
    },
    {
      id:1,
      title:'About',
      link:"/about"
    },
    {
      id:2,
      title:'Projects',
      link:"/project"
    },
    {
      id:3,
      title:'Be Our Partner',
      link:"/partner"
    },
    {
      id:4,
      title:'Contact Us',
      link:"/contact"
    }
  ]
  const [toggle,setToggle] = useState(null)
  function clickHandler(){
    if (!toggle) {
      setToggle('top-[9%] bg-gradient-to-b from-red-500 to-blue-500 min-h-[40vh]')
    }else{
      setToggle(null)
    }
  }
  return (
    <header className="pt-4">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-full cursor-pointer" src={logo} alt="..."/>
            </div>
            <div
                className={`nav-links duration-500  md:static absolute bg- md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto   px-5 ${toggle}  w-full flex items-center`}>
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-zen text-sm text-white">
                    {navItems.map((elem)=>(
                      <li key={elem.id}>
                      <a className={`hover:text-gray-500 ${active === elem.id && 'bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-semibold animate-pulse'}`} href={elem.link}>{elem.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="border-[#15BFFD] border rounded-md text-white px-5 py-1 hover:bg-[#87acec]">Login</button>
                <button className="border-[#15BFFD] border rounded-full w-10 h-10 bg-[#15BFFD] text-white pt-1 text-xl hover:bg-[#540075] hover:border-[#540075]"><ion-icon name="log-out-outline"></ion-icon></button>
                <span className='text-3xl cursor-pointer md:hidden'><ion-icon onClick={clickHandler} name="menu"></ion-icon></span>
            </div>
            </nav>
    </header>
  )
}

export default Navbar