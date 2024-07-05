import React from 'react';
import logo from '../assets/ymmlogo.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 mb-20'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-20 rounded-lg' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/y-mm-2923552b1/"><FaLinkedin/></a>
            <a href="https://github.com/yemyatmin11"><FaGithub/></a>
            <FaInstagram/>
            <FaSquareTwitter/>
        </div>
    </nav>
  )
}
