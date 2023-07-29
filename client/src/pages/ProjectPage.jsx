import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import ComingSoon from '../components/ComingSoon'

function ProjectPage() {
  return (
    <div>
        <Navbar active={2}/>
        <Slider/>
        <ComingSoon title={'Crypto Exchange'}/>
        <Footer/>
    </div>
  )
}

export default ProjectPage