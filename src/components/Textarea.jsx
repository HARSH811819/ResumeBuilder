import React,{useId} from 'react'

function Textarea({
    label,
    className = "",
   ...props
}) {

    const ID = useId()
  return (
    <div className='flex-col justify-center'>
        {
            label && <label className=' w-full p-1 text-center font-bold inline-block rounded-t-lg  bg-gray-300 border ' htmlFor={ID}>{label}</label>
        }
      <textarea className={`w-[100%] ${className} rounded-b-lg  `} id={ID} {...props} ></textarea>
    </div>
  )
}

export default Textarea
