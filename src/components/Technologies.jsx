import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { RiCss3Line, RiHtml5Line, RiJavascriptLine, RiNodejsLine, RiReactjsLine } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial : { y: -10},
    animate : {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

export default function Technologies() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='text-center my-20 text-4xl'
        >
            Technologies
        </motion.h2>
        <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1}}
            transition={{ duration: 1.5 }}
            className='flex flex-wrap items-center justify-center gap-4'
        >
            <motion.div
                variants={iconVariants(2.5)} 
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiHtml5Line className='text-7xl text-orange-700'/>
            </motion.div>
            <motion.div
                variants={iconVariants(3)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiCss3Line className='text-7xl text-sky-500'/>
            </motion.div>
            <motion.div
                variants={iconVariants(5)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
                variants={iconVariants(6)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <SiExpress className='text-7xl text-white'/>
            </motion.div>
            <motion.div
                variants={iconVariants(4)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
                variants={iconVariants(2)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiNodejsLine className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
                variants={iconVariants(6)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <RiJavascriptLine className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
                variants={iconVariants(4)} 
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4'
            >
                <FaGithub className='text-7xl text-white'/>
            </motion.div>
        </motion.div>
    </div>
  )
}
