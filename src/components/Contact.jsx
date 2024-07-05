import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1}}
          transition={{ duration: 0.5 }}
          className='text-center my-10 text-4xl'
        >
          Get In Touch
        </motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {CONTACT.address}
            </motion.p>
            <motion.p 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='my-4'
            >
              {CONTACT.phoneNo}
            </motion.p>
            <a href="mailto:ymm2135@gmail.com" className='border-b'>{CONTACT.email}</a>
        </div>
    </div>
  )
}
