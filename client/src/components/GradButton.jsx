import React from 'react'

function GradButton({text,handler,width}) {
  return (
    <><button className={`bg-gradient-to-b from-purple-500 to-blue-500 rounded-md px-2 py-2 text-xs font-zen text-white hover:text-gray-800 hover:bg-gradient-to-r duration-500 ${width} `} onClick={handler}>{text}</button></>
  )
}

export default GradButton