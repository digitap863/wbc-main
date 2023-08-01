import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InvestorSwiper from '../components/InvestorSwiper'
import PartnerForm from '../components/PartnerForm'

function BeOurPartner() {
  return (
    <div>
        <Navbar active={3}/>
        <Slider/>   
        <PartnerForm/>
        <InvestorSwiper/>
        <Footer/>
    </div>
  )
}

export default BeOurPartner 