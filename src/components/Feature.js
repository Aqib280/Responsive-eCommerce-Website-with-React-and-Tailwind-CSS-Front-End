import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { BsGift } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import FeatureCard from './FeatureCard';
const data=[
    {
        title:"Free Shipping",
        icon:<FaShippingFast />,
    },
    {
        title:"Best Price Guarantee",
        icon:<FaMoneyBillWave />,
    },
    {
        title:"Free Curbside Pickup",
        icon:<BsGift />,
    },
    {
        title:"Support 24/7",
        icon:<BiSupport />,
    },
]

const Feature = () => {
  return (
    <div className='container pt-16'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {data.map((e)=>(
            <FeatureCard
            key={e.title}
            title={e.title}
            icon={e.icon}
            />
        ))}
      </div>
    </div>
  )
}

export default Feature
