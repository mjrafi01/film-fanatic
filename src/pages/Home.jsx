import React from 'react'
import { Banner } from '../components/home/Banner'
import { Product } from '../components/home/Product'
import { Accordian } from '../components/home/Accordian'
import { useLoaderData } from 'react-router-dom'

export const Home = () => {
  const data =useLoaderData()
  console.log(data)
  return (
    <div>
        
        <Banner></Banner>
      
        <Product data={data} />
        <Accordian/>
      
       
        
        </div>
  )
}
