import React from 'react'
import Hero from '../assets/img/faith.png'
import {MdArrowForward} from 'react-icons/md'


 const Home = () => {
  return (
    <div name="Home" className='h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full top-8 pt-16'>
                <h2 className='text-xl sm:text-2xl font-bold'>Learning, Organizational Development and Transformation Specialist.</h2>
                <p className='py-4 max-w-md'>Visionary Strategist - Natural Leader - Strategic Thinker - Trusted Advisor - Transformer.</p>
            <div className=''>
                <button className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
                    Explore
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdArrowForward size={20} className="ml-1"/>
                    </span>
                </button>
            </div>
            </div>
            <div>
                <img src={Hero} alt='profile' className='border-4 border-indigo-200 border-x-blue-500 rounded-full hover:scale-125 duration-200 mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}
export default Home