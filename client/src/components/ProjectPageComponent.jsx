import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Footer from './Footer'
import ComingSoon from './ComingSoon'
import ProjectOverview from './ProjectOverview'
import ChooseUsComponent from './ChooseUsComponent'

function ProjectPageComponent({title,img1,img2,content,projectContent}) {
    
  return (
    <div>
        <Navbar active={2}/>
        <Slider/>
        <ComingSoon title={title} image={img1} content={content}/>
        <ProjectOverview img={img2} projectContent={projectContent}/>
        <ChooseUsComponent/>
        <Footer/>
    </div>
  )
}

export default ProjectPageComponent