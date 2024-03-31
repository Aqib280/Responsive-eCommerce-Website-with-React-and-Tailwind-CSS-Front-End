import React from 'react'
interface propsType{
    size:string;
}
const Cartcount : React.FC<propsType> = ({size}) => {
  return (
    <div className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-2 rounded-full grid 
    place-items-center`}>
        0
      
    </div>
  )
}

export default Cartcount
