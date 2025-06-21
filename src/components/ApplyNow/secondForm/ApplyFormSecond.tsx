'use client'
import { Button } from 'antd'
import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6';
import { FaArrowCircleLeft } from 'react-icons/fa';
import FormHeader from '../FormHeader';
import SpousInputs from './FormInputs';
import { SecondFormType } from '@/types/formData';
const steps = [
    {
        title: '',
        content: 'First-content',
    },
    {
        title: '',
        content: 'Second-content',
    },
    {
        title: '',
        content: 'Last-content',
    },
    {
        title: '',
        content: 'Last-content',
    },
];
const buttonsGroup = [
    {
        id: 1,
        title: ' Add Spouse',
    },
    {
        id: 2,
        title: 'Add Child',
    },
    {
        id: 3,
        title: 'Add Vehicle',
    }
]
const ApplyFormSecond = ({ setCurrent, current }: { setCurrent: React.Dispatch<React.SetStateAction<number>>, current: number }) => {
    const [addCurrent, setAddCurrent] = useState(1)
    const [addMore,setAddMore] = useState(1)
    const prev = () => {
        setCurrent(current - 1);
    };
    const [formData, setFormData] = useState<SecondFormType>({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        spous: "",
        child: "",
        registrationNumber: 0,
        brand: "",
        dateOfEntry: "",
    })

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
        // console.log(formData)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send formData to an API
        console.log(formData);

        setCurrent(current + 1);
    };
    const handleLayout =(id:number)=>{
        if(addCurrent !== id){
            setAddCurrent(id)
        }
    }
    return (
        <section className='my-36'>
            <div className='my-28'>
                <FormHeader content='Add spouse/child/vehicle' />
            </div>
            <div className='flex items-center justify-between gap-5 mb-8'>
                {
                    buttonsGroup?.map((button,idx)=>{
                        return  (
                        <Button
                            key={idx}
                            onClick={()=>handleLayout(button.id)}
                            className={`no-hover py-8 px-40 font-semibold  border   border-[#1F2C5B] ${button.id === addCurrent?'bg-[#1F2C5B] text-white ':''}`}
                         >
                            {button.title}
                        </Button>
                     )})
                }

            </div>
           <div>
            <form className="space-y-6" onSubmit={handleSubmit} >
                {
                    addCurrent ===1 && (
                        <SpousInputs 
                            handleSubmit={handleSubmit}
                            handleInputChange={handleInputChange}
                            formData={formData}
                            add='spous'
                        />
                    )
                }
                {
                    addCurrent ===2 && (
                        <SpousInputs 
                            handleSubmit={handleSubmit}
                            handleInputChange={handleInputChange}
                            formData={formData}
                            add='child'
                        />
                    )
                }
                {
                    addCurrent ===3 && (
                        <SpousInputs 
                            handleSubmit={handleSubmit}
                            handleInputChange={handleInputChange}
                            formData={formData}
                            add='vehicle'
                        />
                    )
                }
                 {/* Submit Button */}
                 <div>
                    <button type="submit" 
                        onClick={()=>setAddMore(addMore+1)}
                        className="bg-[#1F2C5B]  text-white  px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                        Add More

                    </button>
                 </div>
                <div className="flex justify-center gap-5 pt-6">
                    {current < steps.length && (
                        <button 
                            type='submit'
                            className="bg-[#1F2C5B] flex items-center gap-2 text-white  px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                            <span>Next</span> <FaCircleArrowRight className='w-5 h-5' />

                        </button>
                    )}
                    {current > 0 && (
                        <Button  onClick={() => prev()} className="bg-[#1F2C5B] text-white px-9 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                            <FaArrowCircleLeft className='w-5 h-5' /> Previous
                        </Button>
                    )}
                </div>
            </form>
           </div>
        </section>
    )
}

export default ApplyFormSecond
