import React from 'react'
import img1 from '../../assets/Images/projectimg4.png'
import img2 from '../../assets/Images/resort2.png'
import ProjectPageComponent from '../../components/ProjectPageComponent'

function LuxuryResort() {
  const content = {
    title1:"Luxury Resort",
    content1:"To provide an unparalleled experience of luxury and relaxation for its guests, offering world-class amenities and services.",
    title2:"Exquisite Architecture and Interior Design",
    content2:"The process of taking into account the collective opinion of a group",
    title3:"World-Class Amenities",
    content3:"To deliver a top-tier experience, luxury real estate should offer world-class amenities that cater to the desires and preferences of discerning guests.",
    title4:"Unparalleled Service",
    content4:"Exceptional service is a hallmark of luxury real estate."
  }
  return (
    <>
    <ProjectPageComponent title={'Luxury Resort'} img1={img1} img2={img2} content={content} projectContent={"The upcoming development of a world-class luxury resort under the prestigious WBC group. This resort aims to redefine the concept of opulence and hospitality, offering an unparalleled experience for discerning travelers and guests. Situated in a breathtaking location, the resort will be an architectural marvel, blending modern design with the natural beauty of its surroundings."}/>
    </>
  )
}

export default LuxuryResort