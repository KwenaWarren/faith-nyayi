import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'

const Nav = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'Bio',
    },
    {
      id: 3,
      link: 'Education',
    },
    {
      id: 4,
      link: 'Experience',
    },
    {
      id: 5,
      link: 'Skills',
    },
    {
      id: 6,
      link: 'Contact'
    }
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-faithsig text-white font-extrabold">
          FAITH
          {" "}
          <span className='text-5xl font-faithsig text-blue-800 font-extrabold'>NYAYI</span>
        </h1>
        
      </div> 
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-150 duration-200"
          >
           <Link to={link} smooth duration={500}> {link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-4xl px-4 py-6 cursor-pointer capitalize text-white hover:scale-150 duration-200"
            >
              <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}> {link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Nav
