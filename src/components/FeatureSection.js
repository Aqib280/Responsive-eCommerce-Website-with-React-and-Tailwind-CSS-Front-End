import React from 'react'
import feature from './assets/feature__1.webp'
import Dried_Mango from './assets/product__1.webp'
import Crunchy_Crisps from './assets/product__2.webp' 
import Jewel from './assets/product__3.webp'
import Almond_Organic from './assets/product__4.webp'
import ProductCard from './ProductCard'
const data=[
    {id:1, img:Dried_Mango, name:"Dried Mango", price:"$50"},
    {id:2, img:Crunchy_Crisps, name:"Crunchy Crisps", price:"$30"},
    {id:3, img:Jewel, name:"Jewel Cranberries", price:"$20"},
    {id:4, img:Almond_Organic, name:"Almond Organic", price:"$10"}
]

const FeatureSection = () => {
  return (
    <div className='container pt-16'>
<div className='lg:flex justify-between items-center'>
    <div>
        <h3 className='font-medium text-2xl'>Fruits & Vegetables</h3>
    <p className='text-gray-600 my-2'>
Buy farm fresh fruits and vegetables online at the best prices
    </p>
    </div>

<div className='space-x-4 mt-8 lg:mt-0'>
    <button className='feature_btn'>Fruits</button>
    <button className='text-gray-600 hover:text-accent'>Vegetables</button>
    <button className='text-gray-600 hover:text-accent'>Bread & Bakery</button>
</div>
</div>

<div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>

<div>
    <img className='w-full h-full object-cover' src={feature} alt='banner' />
</div>

{data.map((e=><ProductCard
key={e.id}
img={e.img}
name={e.name}
price={e.price}

/>
    ))}

</div>

    </div>
  )
}

export default FeatureSection
