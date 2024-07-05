import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='text-center my-20 text-4xl'>About <span className='text-neutral-500'>Me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center items-center'>
                    <motion.img 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1}}
                        transition={{ duration: 0.5 }}
                        className='rounded-2xl' 
                        src={aboutImg} 
                        alt="About Image" 
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <motion.p 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1}}
                    transition={{ duration: 0.5 }}
                    className='my-2 max-w-xl py-6'
                >
                    {ABOUT_TEXT}
                </motion.p>
            </div>
        </div>
    </div>
  )
}
