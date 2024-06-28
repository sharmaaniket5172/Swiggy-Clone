import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from './Card';


export default function TopRest() {
  const [slide,setSlide] = useState(0);
  const [data,setData] = useState([]);

  const fetchTopResturant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains/");
    const apiData = await response.json();
    setData(apiData);
  }

  useEffect(
    () => {
      fetchTopResturant();
    },[]
  )

  const nextSlide = () => {
    console.log(".....")
    if(data.length-3 == slide) return false
    setSlide(slide + 4);
  }

  const prevSlide = () => {
    console.log("------")
    if(slide == 0 ) return false
    setSlide(slide - 4);
  }


  return (
    <div  className='max-w-[1200px] mx-auto '>
    <div className='flex my-3 items-center justify-between'>
      <div className='text-[25px] font-bold'>Top restaurant chains in Mukerian</div>
      
    </div>

    <div className='flex gap-5 overflow-hidden '>
    {
  data.map(
    (d,i) => {
      return <Card {...d} key={i}/>
    }
  )
}

    </div>
    <hr className='my-4 border-[1.5px]' />
    </div>
    
  )
}

