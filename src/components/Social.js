import React from 'react'
import { FaLinkedin, FaLocationArrow} from 'react-icons/fa'
import { BsPhoneFill } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
const Social = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-blue-800 rounded-tr-md">
          <a
            className="flex justify-between items-center w-full text-white"
            href="https://www.linkedin.com/in/faith-nyayi/"
          >
            <>
              LinkedIn <FaLinkedin size={20} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-green-600">
          <a
            className="flex justify-between items-center w-full text-white"
            href="#"
          >
            <>
              Email <HiOutlineMail size={20} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black">
          <a
            className="flex justify-between items-center w-full text-white"
            href="#"
          >
            <>
              Call <BsPhoneFill size={20} />
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-red-600 rounded-br-md">
          <a
            className="flex justify-between items-center w-full text-white"
            href="#"
          >
            <>
              Location <FaLocationArrow size={20} />
            </>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
