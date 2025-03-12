import React from 'react'
import "../Tailwind/output.css";
import { Bell, House, MessageCircleMore, UserRoundPlus, UsersRound } from 'lucide-react';

const Navigasi = () => {
  return (
    <div className=' container mx-auto h-16 bg-utamaUngu flex justify-between p-2 pt-5 pb-4'>
        <div className='flex w-1/4 justify-around'>
            <p className='font-[Jaini] text-xl pr-5 pl-5 text-white'>Ystera</p>
            <input type="text" className='p-3 w-full rounded-xl placeholder-gray-400 outline-none font-[Roboto]' placeholder='Cari di Ystera..'/>
        </div>

        <div className=' flex w-1/4 justify-around text-white'>
            <p><House /></p>
            <p><UserRoundPlus /></p>
            <p><MessageCircleMore/>  </p>
            <p><UsersRound/> </p>
            <p><Bell/> </p>
        </div>
    </div>
  )
}

export default Navigasi
