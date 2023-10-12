import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/water1.png'
import img2 from '../../assets/Images/projectimg7.png'

function MineralWater() {
  const content = {
    title1:"Mineral Water",
    content1:"To provide the purest and most refreshing mineral water, promoting health and well-being for all.",
    title2:"Market Analysis",
    content2:"in-depth analysis of the bottled water market, identifying consumer preferences, trends, and competitors",
    title3:"Bottling Facility",
    content3:"WBC invests in state-of-the-art bottling facilities equipped with advanced filtration and purification systems.",
    title4:"Packaging and Branding",
    content4:"It involves creating an attractive brand identity, including logo design, label artwork, and packaging."
  }
  return (
    <>
    <ProjectPageComponent title={'Mineral Water'} img1={img1} img2={img2} content={content} projectContent={"This project aligns with our commitment to promoting health and well-being, ensuring access to clean water, and contributing to sustainable development and to establish a state-of-the-art mineral water production facility adhering to the highest quality standards. To meet the growing demand for purified and mineral-enriched drinking water in the region. To contribute to the promotion of health and well-being by providing safe and premium-quality mineral water."}/>
    </>
  )
}

export default MineralWater