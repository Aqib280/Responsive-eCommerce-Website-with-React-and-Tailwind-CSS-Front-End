import React from 'react'
import Post from './assets/post__1.webp'
import Post2 from './assets/post__2.webp'
import Post3 from './assets/post__3.webp'
import BlogCard from './BlogCard'
const data=[
    {
        img:Post,
        title:"Healthy Food Healthy Life",
        date:"Mar 27, 2024",
        comment:8,
    },
    {
        img:Post2,
        title:"Healthy Food Healthy Life",
        date:"JAN 21, 2024",
        comment:1,
    },
    {
        img:Post3,
        title:"Healthy Food Healthy Life",
        date:"Mar 11 2024 ",
        comment:10,
    },
]

const BlogSection = () => {
  return (
  <div className='container pt-16'>
    <h2 className='font-bold text-2xl'>Latest News</h2>
    <p className='text-gray-500'>
Present posts in a best way to highlight interesting moments of your
blog.
    </p>

<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
{data.map((e)=>(
<BlogCard
key={e.date}
img={e.img}
title={e.title}
date={e.date}
comment={e.comment}
/>

))}

</div>

  </div>
  )
}

export default BlogSection
