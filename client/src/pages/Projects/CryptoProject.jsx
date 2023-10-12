import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/projectimg1.png' 
import img2 from '../../assets/Images/wbcReturns.png' 

function CryptoProject() {
  const content = {
    title1:"Crypto Exchange",
    content1:'To provide a secure and user-friendly platform for seamless trading and growth in the world of cryptocurrencies.',
    title2:'Robust Security Measures',
    content2:"Ensuring the security of users' funds and personal information is of paramount importance for any cryptocurrency exchange.",
    title3:"UI and Experience",
    content3:"Features like quick order execution, real-time market data, and customizable trading charts can enhance the overall trading experience.",
    title4:"Liquidity and Coin Variety",
    content4:"A successful crypto exchange must maintain sufficient liquidity to enable seamless trading and minimize slippage."
  }
  return (
   <>
   <ProjectPageComponent title={'Crypto Exchange'} img1={img1} img2={img2} content={content}  projectContent={"A crypto exchange project that aims to revolutionize the global financial landscape. It offers secure, fast, and user-friendly trading services for a wide range of cryptocurrencies, empowering users with seamless access to digital assets and enabling growth in the crypto market."}/>
   </>
  )
}

export default CryptoProject