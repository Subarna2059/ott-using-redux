import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = ({src,text1,text2}) => {
  const navigate = useNavigate()
  return (
    <>
    <div className=''>
        <img className='object-cover relative h-[70vh] w-[100%] object-cover' src={`https://image.tmdb.org/t/p/w500/${src}`} alt=''></img>
        <div className=' absolute top-0 left-0 h-[70vh] w-[100%] bg-black opacity-50 '></div>
        <h1 className='absolute top-0 left-0 text-3xl font-semibold pl-25 pt-5' onClick={()=>navigate("/")} style={{ color:"#E50914", backgroundColor: 'transparent' }}>SubarnaFlix</h1>
        <div className="absolute font-bold top-[20vh] left-[38vw]  flex flex-col items-center justify-center text-white text-center bg-transparent"  style={{ backgroundColor: 'transparent' }}>
            <h1 className='text-4xl'  style={{ backgroundColor: 'transparent' }}>{text1}</h1>
            <h1 className='text-4xl' style={{ backgroundColor: 'transparent' }}>{text2}</h1>
        </div>
    </div>
    </>
  )
}

export default Banner