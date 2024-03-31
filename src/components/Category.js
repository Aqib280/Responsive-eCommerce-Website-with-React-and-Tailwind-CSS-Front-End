import React from 'react'
import Fruit from './assets/category__1.webp'
import Veg from './assets/category__2.webp'
import Canned_Good from './assets/category__3.webp'
import Bakery from './assets/category__4.webp'
import Fishes from './assets/category__5.webp'
import Egg_Dairy from './assets/category__6.webp'
import Soft_Drink from './assets/category__7.webp'
import CategoryCard from './CategoryCard'
const data=[
    {
        id:1,
        name: 'Fresh Fruits',
        count:'9 Products',
        img:Fruit,
    },
    {
        id:2,
        name: 'Fresh Vags',
        count:'8 Products',
        img:Veg,
    },
    {
        id:3,
        name: 'CAnned Goods',
        count:'10 Products',
        img:Canned_Good,
    },
    {
        id:4,
        name: 'Bread & Bakery',
        count:'12 Products',
        img:Bakery,
    },
    {
        id:5,
        name: 'Fishes',
        count:'10 Products',
        img:Fishes,
    },
    {
        id:6,
        name: 'Eggs & Dairy',
        count:'7 Products',
        img:Egg_Dairy,
    },
    {
        id:7,
        name: 'Soft Drinks',
        count:'5 Products',
        img:Soft_Drink,
    },
    {
        id:8,
        name: 'Fresh Fruits',
        count:'9 Products',
        img:Fruit,
    },
]


const Category = () => {
  return (
    <div className='container pt-16'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {data.map((e)=>(
        <CategoryCard
        key={e.id}
        img={e.img}
        name={e.name}
        count={e.count}
        />

    ))}    
      </div>
    </div>
  )
}

export default Category
