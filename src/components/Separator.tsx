import React from 'react'
interface SeparatorProps {
  section: string;
}
const Separator = ({section}:SeparatorProps) => {
  return (
    <div className='bg-dark-yellow h-10 flex items-center justify-start font-kaisei text-white font-bold pl-10'>
        <p >{section} </p>
    </div>
  )
}

export default Separator