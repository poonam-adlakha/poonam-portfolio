import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
      <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold'>
          <p>Hi, I'm Poonam, nice to meet you. Please take a look around.</p>
        </div>
        <div>
        <p>
      As a front-end developer, I specialize in creating visually appealing and user-friendly web pages that are both engaging and functional. I have expertise in using HTML, CSS, and JavaScript to build responsive and interactive websites. My skillset also includes familiarity with various front-end frameworks such as React, Tailwind CSS. I can design and develop user interfaces that are optimized for different devices and screen sizes. Additionally, I am proficient in using version control tools such as Git and working collaboratively with designers and back-end developers. I am passionate about creating websites that provide an enjoyable user experience while meeting the client's needs.
      </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
