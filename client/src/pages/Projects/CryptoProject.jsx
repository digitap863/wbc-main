import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/projectimg1.png' 
import img2 from '../../assets/Images/wbcReturns.png' 

function CryptoProject() {
  return (
   <>
   <ProjectPageComponent title={'Crypto Exchange'} img1={img1} img2={img2}/>
   </>
  )
}

export default CryptoProject