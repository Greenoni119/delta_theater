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
      {
        name:"About Us",
        link:"/"
      },
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full z-10 top-0'>


      <div className='md:flex items-center opacity-80 py-4 rounded-xl '>
        
      <div onClick={()=>setOpen(!open)} className='text-xl text-amber-300 absolute right-3 cursor-pointer md:hidden'>
      { open ? <FaTimes size={40} /> : <CgMenuLeftAlt size={40} /> }
      </div>

      <ul className={`md:pt-10 md:bg-inherit md:mx-auto md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-0 ':'top-[-500px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className=' text-2xl md:px-5 text-center p-3 '>
              <a href={link.link} className=' text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
       
      </ul>
      </div>
{/*
  <div className='justify-center pt-7'>
    <Image src={title} width={350} height={50} alt="image not working" className='mx-auto rounded-xl' />
  </div>    
      */}

    </div>
  )
}

export default Nav