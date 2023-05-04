import React, { useState } from 'react'
import { CgMenuLeftAlt} from "react-icons/cg"
import {FaTimes} from "react-icons/fa"

const Nav = () => {
    let Links =[
      {
        name:"HomePage",
        link:"/"
      },
      {
        name:"Contact",
        link:"Contact"
      },
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full fixed z-10 top-0'>
      <div className='md:flex items-center opacity-80 py-4 rounded-xl '>
      <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'> 
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-xl text-teal-500 border-red-400 border rounded-full absolute right-3 cursor-pointer md:hidden'>
      { open ? <FaTimes size={40} /> : <CgMenuLeftAlt size={40} /> }
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-0 ':'top-[-500px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='text-2xl md:my-0 my-20 text-center'>
              <a href={link.link} className='text-teal-400 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
       
      </ul>
      </div>
    </div>
  )
}

export default Nav