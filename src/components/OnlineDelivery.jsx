import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
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
  return (
    <div  className='max-w-[1200px] mx-auto '>
    <div className='flex my-3 items-center justify-between'>
      <div className='text-[25px] font-bold'>Restaurant with online delivery in Mukerian</div>
      </div>
      
      <div className='grid grid-cols-4 gap-3'>
        {
          data.map(
            (d,i) => {
              return <Card{...d}/>
            }
          )
        }
      </div>
      
    </div>
  )
}
