import React from 'react'
import InputWithButton from './NewsletterInput'
import disc from '../assets/Images/discord.png'
import tiktok from '../assets/Images/tiktok.png'
import youtube from '../assets/Images/utube.png'
import telegram from '../assets/Images/tele.png'
import unk from '../assets/Images/unk.png'
import twitter from '../assets/Images/twitter.png'

function Footer() {
    return (
        <div className='h-96 mt-20 bg-[#21094a] flex items-center flex-col md:justify-center px-5'>
            <h1 className='text-white font-zen md:text-3xl text-lg mb-3 mt-20 hover:text-purple-500 duration-1000'>Don't Miss Out, Stay Updated</h1>
            <InputWithButton />
            <p className='font-mont text-slate-400 font-semibold text-center text-xs md:w-96 my-5'>Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally</p>
            <div className='flex w-3/4 justify-between md:w-1/4'>
                <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={disc} alt="discordicon"/></button>
                <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={tiktok} alt="discordicon"/></button>
                <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={youtube} alt="discordicon"/></button>
                <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={telegram} alt="discordicon"/></button>
                <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={unk} alt="discordicon"/></button>
                <button className='hover:bg-gradient-to-b from-purple-500 to-blue-500 rounded-lg'><img src={twitter} alt="discordicon"/></button>
            </div>
            <div className='border-gray-700 w-full mt-12 border-t'/>
            <p className='my-2 text-white text-sm'>© 2022. All rights reserved by WBC</p>
        </div>
    )
}

export default Footer