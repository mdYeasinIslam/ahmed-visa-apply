'use client'
import { Button } from 'antd'
import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6';
import SelectField from './SelectedField';
import InputField from './InputField';
import { FaArrowCircleLeft } from 'react-icons/fa';
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
const ApplyFormThird = ({setCurrent,current}:{ setCurrent: React.Dispatch<React.SetStateAction<number>>, current:number}) => {
    const prev = () => {
        setCurrent(current - 1);
      };
const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        passportNumber: "",
        nationalId: "",
        dateOfBirth: "",
        gender: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: "",
        effectiveDate: "",
        duration: "",
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
  return (
    <div>
       <Button 
       className="bg-white py-8 px-40 font-semibold text-black border hover:bg-[#222b58]  border-[#1F2C5B]"
       >
        Add Spouse
       </Button>
            <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* First Row */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your first name"
                                    required
                                />
                                <InputField
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your last name"
                                    required
                                />
                            </div>
        
        
                            {/* Third Row */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField
                                    label="Date of Birth"
                                    name="dateOfBirth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    required
                                    // icon={<Calendar className="h-5 w-5 text-gray-400" />}
                                />
                                <SelectField
                                    label="Gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    required
                                    options={[
                                        { value: "", label: "Select Your Gender" },
                                        { value: "male", label: "Male" },
                                        { value: "female", label: "Female" },
                                        { value: "other", label: "Other" },
                                    ]}
                                />
                            </div>
        
        
                            {/* Submit Button */}
                            <div  className="flex justify-center pt-6">
                                {/* <button type="submit"> 
        
                                    <StepsButton  setCurrent={setCurrent} current={current}/>
                                </button> */}
                                  {current < steps.length - 1 && (
                                        <button type="submit" className="bg-[#1F2C5B] flex items-center gap-2 text-white  px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                            <span>Next</span> <FaCircleArrowRight className='w-5 h-5'/>
                                
                                        </button>
                                    )}
                                    {current > 0 && (
                                        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className="bg-[#1F2C5B] text-white px-9 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                                            <FaArrowCircleLeft className='w-5 h-5'/> Previous
                                        </Button>
                                    )}
                              
                            </div>
                        </form>
                 <div>

       </div>
    </div>
  )
}

export default ApplyFormThird
