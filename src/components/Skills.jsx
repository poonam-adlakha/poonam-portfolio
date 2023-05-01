import React from 'react'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JavaScript.png'
import GitHub from '../assets/GitHub.png'
import TailwinCSS from '../assets/TailwindCSS.png'
import Canva from '../assets/Canva.png'
import Icon_react from '../assets/Icon_react.png'
import VSCode from '../assets/VSCode.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Skills</p>
                <p className='py-4'>These are technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GitHub} alt='HTML icon' />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={TailwinCSS} alt='HTML icon' />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Canva} alt='HTML icon' />
                    <p className='my-4'>Canva</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Icon_react} alt='HTML icon' />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c15] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={VSCode} alt='HTML icon' />
                    <p className='my-4'>Visual Studio Code</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
