import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-200'>Hi, my name is</p>
        <h1 className='text-4xl md:text-7xl font-bold text-pink-600'>Poonam Soni</h1>
        <h2 className='text-4xl md:text-7xl font-bold text-[#8892b0]'>I am a frontend developer</h2>
        <p className='text-[#8890b0] py-4 max-w-[700px]'>My proficiency is in HTML, CSS, JavaScript, and React, which enables me to design and develop a range of web-based solutions such as websites, landing pages, and other interactive user interfaces. My technical expertise and creative eye make me an essential asset in today's digital landscape.</p>
        <div>
            <button className='text-white group border-2 border-pink-500 px-6 py-3 my-2 flex items-center bg-pink-600 hover:bg-transparent hover:border-white'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span></button>
        </div>
      </div>
    </div>
  )
}

export default Home
