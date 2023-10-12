import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/kitchen13.png'
import img2 from '../../assets/Images/kitchen2.png'


function ModularKitchen() {
  const content = {
    title1:"Modular Furniture",
    content1:"The platform helps investors to make easy to purchase and sell their tokens",
    title2:"Versatility and Customization",
    content2:"Modular furniture is designed to be highly versatile, allowing users to mix and match different components to create custom configurations that suit their specific needs and preferences.",
    title3:"Space Efficiency and Functionality",
    content3:"Living spaces in modern homes are often limited, and modular furniture is a perfect solution for maximizing space efficiency.",
    title4:"Sustainability and Longevity",
    content4:"Modular furniture is designed with longevity in mind."
  }
  return (
    <>
    <ProjectPageComponent title={'Modular Furniture'} img1={img1} img2={img2} content={content} projectContent={"The World Business Centre (WBC) project aims to revolutionize office spaces with modular furniture solutions. Offering flexible and efficient designs, WBC seeks to enhance productivity and adaptability while creating a dynamic work environment. Embracing modernity and innovation, WBC sets the stage for seamless collaboration and functionality"}/>
    </>
  )
}

export default ModularKitchen