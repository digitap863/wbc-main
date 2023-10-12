import React from 'react'
import ProjectPageComponent from '../../components/ProjectPageComponent'
import img1 from '../../assets/Images/projectimg3.png'
import img2 from '../../assets/Images/nftbox.png'

function NftProject() {
  const content = {
    title1:"NFT",
    content1:"To revolutionize digital asset ownership by providing unique, verifiable, and immutable tokens.",
    title2:"Uniqueness and Indivisibility",
    content2:"The process of taking into account the collective opinion of a group",
    title3:"Verifiable Ownership and Provenance",
    content3:"The platform helps investors to make easy to purchase and sell their tokens",
    title4:"Empowering Creators and Digital Content",
    content4:"NFTs empower creators by enabling them to tokenize and sell their digital content directly to their audience without the need for intermediaries."
  }
  return (
    <>
    <ProjectPageComponent title={'NFT'} img1={img1} img2={img2} content={content} projectContent={"World Business Centre (WBC) ON NFT aims to revolutionize the commercial real estate industry by tokenizing property ownership using Non-Fungible Tokens (NFTs). This innovative project seeks to enhance accessibility, liquidity, and transparency, creating a new paradigm for global property investment and management."}/>
    </>
  )
}

export default NftProject