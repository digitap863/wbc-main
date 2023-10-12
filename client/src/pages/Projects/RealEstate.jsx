import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/realestate1.png'
import img2 from '../../assets/Images/projectimg4.png'

function RealEstate() {
  const content = {
    title1:"Real Estate",
    content1:"To redefine real estate by creating innovative and sustainable spaces that inspire growth, connectivity, and community development.",
    title2:"Innovative Design and Architecture",
    content2:"To redefine real estate, a key focus should be on creating innovative and sustainable spaces.",
    title3:"Community-Oriented Development",
    content3:"Redefining real estate involves prioritizing community development.",
    title4:"Technological Integration",
    content4:"To redefine real estate, embracing technological advancements is crucial."
  } 
  return (
    <>
    <ProjectPageComponent title={'Real Estate'} img1={img1} img2={img2} content={content} projectContent={"Presenting our upcoming real estate project, developed and managed by WBC. This highly anticipated development aims to redefine modern living, offering a harmonious blend of luxurious design, functional spaces, and unparalleled amenities."}/>
    </>
  )
}

export default RealEstate