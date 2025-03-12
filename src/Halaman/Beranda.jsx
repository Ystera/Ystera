import React from 'react'
import myImage from "../assets/LostDoll.png";
import myImage1 from "../assets/A2.png";
import myImage2 from "../assets/A1.png";

const Beranda = () => {
  const history = [
    {
      nama: "Kiel Fernandes",
      isiHistory: myImage2,
      imagePemilik : myImage1, 
    },
    {
      nama: "SawalRever",
      isiHistory: myImage2,
      imagePemilik : myImage1, 
    },
    {
      nama: "Dustinmon",
      isiHistory: myImage2,
      imagePemilik : myImage1, 
    },
    {
      nama: "Dida Ungu",
      isiHistory: myImage2,
      imagePemilik : myImage1, 
    },
    {
      nama: "Edy Mahedy",
      isiHistory: myImage2,
      imagePemilik : myImage1, 
    },
    {
      nama: "Edy Mahedy",
      isiHistory: myImage2,
      imagePemilik : myImage1, 
    },
  ]

  return (
    <div className=' bg-red w-full h-96 mt-5'>
      <div className=' w-full h-60 flex'>
        <div className='w-40 h-full bg-purple-200 rounded-lg flex flex-col relative items-center justify-center mr-2'>
          <img src={myImage} alt="" className='h-full w-full rounded-lg'/>
          <button className=' bg-purple-300 w-12 h-12 rounded-full text-3xl text-white font-bold absolute bottom-7 z-10 '>+</button>
          <div className='bg-white text-center p-2 rounded-md absolute bottom-0 w-full'>
            Buat Cerita
          </div>
        </div>

        {history.map((item, index) => (
            <div className='w-40 h-full bg-purple-200 flex flex-col relative items-center justify-center mr-2 rounded-lg'>
              <div className=' bg-utamaUngu w-10 h-10 absolute top-2 left-2 rounded-full p-1'>
                <img src={item.imagePemilik} alt="" className='rounded-full' />
              </div>
              <img src={item.isiHistory} alt="gambar" className=' w-full h-full rounded-lg' />
              <h2 className='absolute bottom-4 text-white font-bold'>{item.nama}</h2>
            </div>
        ))}

      </div>

      <div className=' mt-4 bg-blue-300 w-full h-36'>
        <p>Ini untuk Postingan</p>
      </div>

      <div className=' mt-4 bg-yellow-300 w-full h-full'>
        <p>Untuk isi Beranda</p>
      </div>

    </div>
  )
}

export default Beranda
