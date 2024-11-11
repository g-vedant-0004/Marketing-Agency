import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import FooterContact from './FooterContact'
import { motion } from 'framer-motion'
import variants from '../utils/variants'

const Footer = () => {
  return (
    <footer className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
      <div className='bg-secondary rounded-t-2xl'>
        {/* first section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1 }}
          variants={variants('top', 0.3)}
          className='flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 py-12 sm:px-6 lg:px-8'>
          {/* logo */}
          <div>
            <img src={footerLogo} alt="" className='h-8' />
          </div>

          {/* menu items */}
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
            <a href="#about" className='text-white hover:text-gray-400'>Home</a>
            <a href="#services" className='text-white hover:text-gray-400'>Services</a>
            <a href="#use-cases" className='text-white hover:text-gray-400'>Use Cases</a>
            <a href="#contact" className='text-white hover:text-gray-400'>Contact</a>
          </div>

          {/* social media icons */}
          <div className='flex md:justify-end space-x-4'>
            <a href="#" className='p-1.5 text-black rounded-full bg-white'>
              <FaFacebookF className='hover:text-gray-400' />
            </a>
            <a href="#" className='p-1.5 text-black rounded-full bg-white'>
              <FaTwitter className='text-black hover:text-gray-400' />
            </a>
            <a href="#" className='p-1.5 text-black rounded-full bg-white'>
              <FaLinkedinIn className='text-black hover:text-gray-400' />
            </a>
          </div>
        </motion.div>

        {/* contact and newsletter */}
        <FooterContact />

        <hr className='my-4 border-white mx-4 sm:px-6 lg:px-8' />
        <div
          // initial='hidden'
          // whileInView='visible'
          // viewport={{ amount: 0.1 }}
          // variants={variants('bottom', 0.3)}
          className='flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5'>
          <p>&copy; 2024 Positivus. All Rights Reserved.</p>
          <p className='underline underline-offset-4'><a href="#">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
