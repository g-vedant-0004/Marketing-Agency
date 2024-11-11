import React, { useState } from 'react'
import teamData from '../utils/teamData'
import { FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'
import variants from '../utils/variants'

const Team = () => {
  const [visibleTeam, setVisibleTeam] = useState(6)

  const handleShowMore = () => {
    setVisibleTeam(prevCount => prevCount + 3)
  }

  return (
    <section className='pt-24 pb-12 bg-white' id='team'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* headline and description */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ amount: 0.1 }}
          variants={variants('bottom', 0.3)}
          className='flex flex-col md:flex-row gap-4 mb-12'>
          <div className='flex-shrink-0 bg-primary text-black px-16 py-2 rounded-md'>
            <h2 className='text-2xl font-bold'>Team</h2>
          </div>
          <div className='md:w-2/3'>
            <p className='text-secondary md:w-1/2'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
          </div>
        </motion.div>

        {/* team cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            teamData.slice(0, visibleTeam).map((member, index) => (
              <div key={index}
                className='bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300'>
                <div className='relative mb-4'>
                  {/* first row */}
                  <div className='flex flex-col sm:flex-row sm:items-end items-start justify-start gap-4'>
                    <img src={member.image} alt="" className='rounded-full w-32 h-32 object-cover' />
                    <div>
                      <h3 className='text-xl font-semibold'>{member.name}</h3>
                      <p className='text-secondary'>{member.position}</p>
                    </div>
                    <a href="#" className='absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 cursor-pointer rounded-full transition-all duration-300'>
                      <FaLinkedinIn className='size-5' />
                    </a>
                  </div>
                </div>

                <div className='px-2'>
                  <hr className='my-4 border-secondary' />
                  <p className='text-black'>{member.description}</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* handleShowMore button */}
        {
          visibleTeam < teamData.length && (
            <div className='flex justify-end mt-8 w-full'>
              <button onClick={handleShowMore}
                className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300'>See All Team</button>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Team
