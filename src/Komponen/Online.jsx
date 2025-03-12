import React from 'react'
import "../Tailwind/output.css";
import myImage from "../assets/LostDoll.png"

const Online = () => {
    const data = [
        {
            nama : "Dedys",
            image :myImage
        },
        {
            nama : "Kiel",
            image :myImage
        },
        {
            nama : "Sawal",
            image :myImage
        },
        {
            nama : "Dustin",
            image :myImage
        },
        {
            nama : "Akbar",
            image :myImage
        },
    ]

    return (
        <div className='w-1/5 rounded-xl shadow-md pb-5 ml-3'>
            <div className='flex flex-col pt-3'>
                <div className=' flex'>
                    <div className=' mt-2 w-3 h-3 bg-green-500 rounded-full ml-2 mr-1'></div>
                    <h2 className=' text-lg font-bold '>Online</h2>
                </div>

                <div>
                    {data.map((item, index) => (
                        <div key={index} className=' p-2 flex items-center'>
                            <img src={item.image} alt="gambar" className='rounded-full h-14 w-14 border-2 border-black'/>
                            <p className='pl-2'>{item.nama}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Online
