import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='bg-slate-100 shadow-xl mt-0'>
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex'>
        <div className='font-bold text-[2rem] w-[500px]'>For better experience,download the Swiggy app now</div>
        <div className='flex items-center ml-auto'>
          <div className='w-[290px] cursor-pointer'>
            <img src="images/google.png" alt="" className='w-[full]' />
          </div>
          <div className='w-[260px] cursor-pointer'>
            <img src="images/apple.png" alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
