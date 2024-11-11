import React from 'react'
import { motion } from 'framer-motion'
import variants from '../utils/variants'

const FooterContact = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row px-4 py-8 lg:px-8 sm:px-6 gap-8'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1 }}
          variants={variants('bottom', 0.3)}
          className='flex-1 space-y-4'>
          <button className='bg-primary text-black px-6 py-2 rounded-md font-medium'>Contact</button>
          <div className='text-white space-y-2'>
            <p><strong>Email:</strong> contact@positivus.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Address:</strong> 1234 Example Street, City, Country</p>
          </div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1 }}
          variants={variants('right', 0.3)}
          className='flex-1 bg-[#292A32] justify-center items-center p-8 rounded-md'>
          <form className='flex flex-col md:flex-row justify-center items-center h-20 gap-4'>
            <input type="email" placeholder='hello@example.com' className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary' />
            <button className='bg-primary text-black px-6 py-2.5 rounded-md font-medium'>Contact</button>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default FooterContact
