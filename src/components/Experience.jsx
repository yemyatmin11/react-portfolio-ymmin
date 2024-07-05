import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='text-center text-4xl my-20'
        >
            Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='w-full lg:w-1/4'
                    >
                        <p className='text-neutral-400 text-sm mb-2'>{experience.year}</p>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='w-full max-w-xl lg:w-3/4'
                    >
                        <h6 className='mb-2 font-semibold'>{experience.role} - {" "} 
                            <span className='text-purple-100 text-sm'>{experience.company}</span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        <div className='flex flex-wrap'>
                            {experience.technologies.map((technology, index) => (
                                <span className='mr-2 mt-4 bg-neutral-900 px-2 py-1 rounded text-sm font-medium text-purple-800' key={index}>{technology}</span>                   
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
            

    </div>
  )
}
