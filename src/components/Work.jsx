import React from 'react'
import Tesla_Clone from '../assets/Tesla_Clone.png'
import Sky from '../assets/Night_sky.png'
import Girl_In_Rain from '../assets/Girl_In_Rain.png'
import Loaders from '../assets/Loaders.png'
import Glassmorphism from '../assets/Glassmorphism.png'
import Cheatsheets from '../assets/Cheatsheets.png'

const Work = () => {
  return (
    <div name="Work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-4'>Check out some of my recent work</p>
            </div>
            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/*Grid Items */}
                <div style={{backgroundImage: `url(${Tesla_Clone}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> React JS Tesla Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Code
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Glassmorphism}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> React JS Tesla Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Code
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Sky}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> React JS Tesla Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Code
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Girl_In_Rain}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> React JS Tesla Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Code
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Cheatsheets}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> React JS Tesla Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Code
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage: `url(${Loaders}`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover Effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> React JS Tesla Clone
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-1 py-1 m-5 bg-white text-gray-700 font-bold text-lg'>Code
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      
    </div>


  )
}

export default Work
