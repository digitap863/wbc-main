import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/projectimg5.png'
import img2 from '../../assets/Images/shirt2.png'

function SeefShirt() {
  const content = {
    title1:"Seef Shirts",
    content1:"The platform helps investors to make easy to purchase and sell their tokens",
    title2:"Ecommerce",
    content2:"The process of taking into account the collective opinion of a group",
    title3:"Retail",
    content3:"The platform helps investors to make easy to purchase and sell their tokens",
    title4:"Whole Sale",
    content4:"The platform helps investors to make easy to purchase and sell their tokens"
  }
  return (
    <>
    <ProjectPageComponent title={'Seef Shirt'} img1={img1} img2={img2} content={content} projectContent={"Seef Shirt is an exciting upcoming project under the umbrella of WBC (Worldwide Brands & Clothing), an established name in the fashion industry. The project aims to introduce a fresh and innovative line of shirts that seamlessly blend style, comfort, and sustainability. Seef Shirt seeks to cater to fashion-conscious individuals who value high-quality apparel while also embracing eco-friendly practices."}/>
    </>
  )
}

export default SeefShirt