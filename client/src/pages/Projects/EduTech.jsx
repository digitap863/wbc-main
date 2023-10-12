import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/edutech1.png'
import img2 from '../../assets/Images/projectimg2.png'

function EduTech() {
  const content = {
    title1:"Edu Tech",
    content1:"To revolutionize education through innovative technologies and platforms, empowering learners worldwide to access quality educational resources and opportunities.",
    title2:"Accessibility and Inclusivity",
    content2:"EduTech plays a crucial role in breaking down barriers to education and promoting inclusivity.",
    title3:"Personalized Learning Experience",
    content3:"EduTech enables personalized learning experiences tailored to individual needs and preferences.",
    title4:"Continuous Learning and Lifelong Education",
    content4:"Basic skills to advanced professional development, allowing learners to upskill and reskill throughout their lives."
  }
  return (
    <>
   <ProjectPageComponent title={'Edu Tech'} img1={img1} img2={img2} content={content} projectContent={"An ambitious EduTech project aiming to revolutionize education. It leverages cutting-edge technology to provide accessible and interactive learning experiences globally. WBC offers a comprehensive platform with diverse courses, personalized learning paths, and virtual classrooms, empowering learners of all ages to thrive in the digital age."}/>
   </>
  )
}

export default EduTech