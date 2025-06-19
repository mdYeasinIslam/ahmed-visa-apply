import React from 'react'

const SubmitButton = ({name}:{name:string}) => {
  return (
    <button
        type="submit"
        className="w-full bg-[#1F2C5B] text-white py-4 px-4 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
        >
       {name}
    </button>
  )
}

export default SubmitButton
