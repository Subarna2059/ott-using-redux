import React, { useState } from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom'
import Loader from './Loader'
import CrauselContainer from './CrauselContainer'

const CardContainer = ({title,desc, cardData}) => {
    const navigate = useNavigate()
    const apiKey = import.meta.env.VITE_API_KEY
      const  handleOnMovieClick = async(id) =>
      {
        try{
            if(id != ""){
                navigate(`/info/${id}`)
            } else {
                <Loader/>
            }
        } catch (e)
        {
            toast(e.message||"Something went wrong")
        }
      }
  return (
    <>
      <div className='ml-19 mt-10 '>
      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-gray-500 text-sm pb-4'>{desc}</p>
        </div>
        <div className='flex justify-center items-center '>
        <CrauselContainer key={cardData.length}>
        {
           cardData != "" ? cardData.map((items,index) => {
                return(
                <div key={index} className='shrink-0'    
                > 
                    {items.backdrop_path != null ?<div className=''><Card key={index} onClick={()=>handleOnMovieClick(items.id)} imgSrc={items.poster_path}/></div>:null}
                    </div>
                )
            }) : <Loader/>
        }
        </CrauselContainer>
       </div>

</>
  )
}

export default CardContainer