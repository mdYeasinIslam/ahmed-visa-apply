import React from 'react'

const FormHeader = ({content}:{content:string}) => {
  return (
    <div className="text-center my-16 lg:my-28 ">
        <h1 className="text-4xl font-bold text-[#1F2C5B] mb-2">Visa Application Form</h1>
        <p className="text-[#1F2C5B] text-lg font-bold">({content})</p>
    </div>
  )
}

export default FormHeader
