import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import InvestorSwiper from '../components/InvestorSwiper'
import PartnerForm from '../components/PartnerForm'
import RandomStars from '../components/RandomWhite';
import RandomWhiteDiv from '../components/whitePatch';

function BeOurPartner() {
  return (
    <div>
      <Navbar active={3} />
      <Slider />
      <PartnerForm />
      <InvestorSwiper />
      <Footer />
      <RandomStars num={14} />
      <RandomWhiteDiv num={10} />
    </div>
  )
}

export default BeOurPartner 