
import React from 'react'
import SelectField from '../SelectedField';
import InputField from '../InputField';
import {  SecondFormType } from '@/types/formData';


type Props ={
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    formData: SecondFormType
    add:string
}
const SpousInputs = ({ handleInputChange,formData,add }: Props) => {


  return (
    <div className='space-y-5'>
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-6">
            {
                (add==='spous' || add ==='child') &&(
                   <>
                    <InputField
                        label="First Name"
                        name="firstName"
                        type='text'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter Your first name"
                        
                    />
                    <InputField
                        label="Last Name"
                        name="lastName"
                        type='text'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter Your last name"
                        
                    />
                   </> 
                )
            }
            {
                add ==='vehicle' && (
                    <>
                     <InputField
                        label="Registration Number"
                        name="RegistrationNumber"
                        type='number'
                        // value={formData.registrationNumber?.toString() ?? ""}
                        onChange={handleInputChange}
                        placeholder="Enter Registration Number"
                        
                    />
                     <SelectField
                        label="Brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleInputChange}
                        required
                        options={[
                            { value: "", label: "Select Brnad" },
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                            { value: "other", label: "Other" },
                        ]}
                   />
                    </>
                )
            }
        </div>

        {/* Third Row */}
        <div className="grid md:grid-cols-2 gap-6">
            {
                add ==='vehicle' ?
                 <InputField
                    label="Date of entry into service"
                    name="dateOfEntry"
                    type="date"
                    value={formData.dateOfEntry}
                    onChange={handleInputChange}
                    
                />
                :
                <InputField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    
                />

            }
            {
                add =='spous' &&(

                    <InputField
                        label="Spous"
                        name="spous"
                        type="text"
                        value={formData.spous}
                        onChange={handleInputChange}
                        placeholder='Conjoint'
                        
                    />
                )
            }
            {
                add =='child' &&(

                    <InputField
                        label="Child"
                        name="child"
                        type="text"
                        value={formData.child}
                        placeholder='Enfant'
                        onChange={handleInputChange}
                        
                    />
                )
            }
            
        </div>        
    </div>
  )
}

export default SpousInputs
