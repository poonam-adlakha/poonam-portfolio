import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logos.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50'>
      <div>
        <img src={Logo} alt="logo image" style={{width: '70px'}}/>
      </div>
        {/*Menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      {/*Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes /> }
      </div>

      {/*Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

      {/*Social Icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center'>
                <a href="/">
                    <FaTwitter />
                </a>
            </li>
            <li classname='w-[160px] h-[60px] flex justify-between items-center'>
                <a className="flex justify-between items-center w-full" href="/" >
                    LinkedIn <FaFacebook size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
