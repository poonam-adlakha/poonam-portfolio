import React from 'react'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JavaScript.png'
import GitHub from '../assets/GitHub.png'
import TailwinCSS from '../assets/TailwindCSS.png'
import Canva from '../assets/Canva.png'
import Icon_react from '../assets/Icon_react.png'

const Skills = () => {
  return (
    <div name="Skills" className='bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-4'>Experience</p>
                <p>These are technologies I've worked with</p>
            </div>

            <div>
                <div>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
