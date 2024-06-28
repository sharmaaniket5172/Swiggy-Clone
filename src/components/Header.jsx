import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
  const [toggle,setToggle] = useState(false);




  const links = [
    {
      icon:<IoIosSearch/>,
      name:"Search",
    },
    {
      icon:<CiDiscount1/>,
      name:"Offers ",
      sup:"New"
    },
    {
      icon:<IoIosHelpBuoy/>,
      name:"Help"
    },
    {
      icon:<MdAccountCircle/>,
      name:"Sign In"
    },
    {
      icon:<CiShoppingCart/>,
      name:"Cart",
      sup:"2"
    }
  ]
  return (
    <>
    <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
      <div className='max-w-[1200px] mx-auto  flex items-center'>
        <div className='w-[100px] '>
        <img src="images/logo.png" className='w-full' alt="" />
        </div>
        <div className=''>
            <span className='font-bold  border-b-[3px] border-black'>Mukerian</span>, Hoshiarpur, Punjab, 144211 <RxCaretDown fontSize={25} className='font-bold inline  text-[#fc8019] cursor-pointer' />
        </div>
        <nav className='flex list-none gap-10  ml-auto text-[18px] font-semibold'>
            {
              links.map(
                (link, index) => {
                  return <li key={index} className='hover:text-[#fc8019] cursor-pointer flex items-center gap-2'>
                    {link.icon}
                    {link.name}
                    <sup className='text-[#fc8019] font-bold'>{link.sup}</sup>
                  </li>
                }
              )
            }
        </nav>
      </div>
    </header>
    </>
  )
}
