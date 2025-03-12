import React from 'react'
import "../Tailwind/output.css";
import myImage from "../assets/LostDoll.png";
import { Bookmark, ContactRound, LogOut, UserRound } from 'lucide-react';


const Profil = () => {
  const textProfil = [
    {nama : "Lihat Profil", path:"/profil", simbol : <UserRound/>, warna : "utamaUngu"},
    {nama : "Tersimpan", path:"/tersimpan", simbol : <Bookmark/>, warna : "utamaUngu"},
    {nama : "Teman", path :"/teman", simbol : <ContactRound/>, warna : "utamaUngu"},
    {nama : "Keluar", path: "/keluar", simbol : <LogOut />, warna : "red-100"}

]

  return (
    <div className='w-1/5 rounded-xl shadow-md pb-5 ml-3 mr-3'>
        <div className='flex flex-col items-center justify-center pt-3'>
            <img src={myImage} alt="" className=" w-40 h-40 rounded-full" />
            <h1 className=' text-3xl font-semibold'>Nama</h1>
        </div>
        
        <div>
            {textProfil.map((item, index) => (
                <div key={index} className=' flex pt-2 pl-5'>
                    <p className='pr-2'>{item.simbol}</p>
                    <a href={index} >{item.nama}</a>
                </div>
            ))}    
        </div>
    </div>
  )
}

export default Profil
