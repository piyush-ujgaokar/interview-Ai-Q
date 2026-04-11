import React from 'react'
import { RiRobot3Fill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className=' bg-[#f3f3f3] flex justify-center px-4 py-4 pb-10 pt-10 '>
            <div className='w-full max-w-6xl bg-white rounded-3xl shadow-sm border border-gray-200 py-8 text-center'>
                <div className='flex justify-center items-center gap-3 mb-3'>
                    <div className='bg-black text-white p-2 rounded-lg'><RiRobot3Fill size={16} /></div>
                    <h2 className='font-semibold'>Interview.Ai</h2>
                </div>
                <p className='text-gray-500 text-sm max-w-xl mx-auto'>
                    Interview.Ai is an AI-powered interview preparation platform design to improve communication skills,
                    technical depth and professional confidence.
                </p>
            </div>



    </div>
  )
}

export default Footer