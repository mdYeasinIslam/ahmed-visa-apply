'use client'
import { Button } from 'antd'
import React, { useState } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'
import FormHeader from '../FormHeader'
import InputField from '../InputField'
import SelectField from '../SelectedField'
import { FormDataTypes } from '@/types/formData'

const ApplyFormSecond = ({
   
    setFormData,
    setCurrent,
    current,
    
}: {
    formData: FormDataTypes
    setFormData: React.Dispatch<React.SetStateAction<FormDataTypes>>
    setCurrent: React.Dispatch<React.SetStateAction<number>>
    current: number
        addSpouse: () => void
        addChild: () => void
        addVehicle: () => void
}) => {
    const [addCurrent, setAddCurrent] = useState(1)

    // Handle input changes
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        const fieldParts = name.split('.') // Split name by '.' for nested fields

        if (fieldParts.length === 2) {
            // Handle non-array fields
            const [parentKey, childKey] = fieldParts as [keyof FormDataTypes, string];
            setFormData((prev) => {

                const parentValue = prev[parentKey];
                const data = Array.isArray(parentValue) ? parentValue[0] : {};
                return ({
                    ...prev,
                    [parentKey]: [{
                        ...data,
                        [childKey]: value
                    }]
                })
            });
        }

        if (fieldParts.length === 3) {
            // Handle array fields (spouses, children, vehicles)
            const [parentKey, indexStr, childKey] = fieldParts as [keyof FormDataTypes, string, string];
            const index = parseInt(indexStr, 10); // Convert string index to number

            setFormData((prev) => {
                const updatedParent = Array.isArray(prev[parentKey]) ? [...(prev[parentKey] as unknown[])] : []; // Make a copy of the array (spouses, children, vehicles)
                updatedParent[index] = {
                    ...(typeof updatedParent[index] === 'object' && updatedParent[index] !== null ? updatedParent[index] : {}),  // Ensure it's an object
                    [childKey]: value,        // Update the specific field
                };

                return {
                    ...prev,
                    [parentKey]: updatedParent, // Update the parent array with the modified object
                };
            });
        }
    }

    return (
        <section className="my-36">
            <div className="my-28">
                <FormHeader content="Add spouse/child/vehicle" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5 mb-8">
                <Button
                    onClick={() => setAddCurrent(1)}
                    className={`no-hover py-8 px-40 font-semibold border border-[#1F2C5B] ${addCurrent === 1 ? 'bg-[#1F2C5B] text-white' : ''
                        }`}
                >
                    Add Spouse
                </Button>
                <Button
                    onClick={() => setAddCurrent(2)}
                    className={`no-hover py-8 px-40 font-semibold border border-[#1F2C5B] ${addCurrent === 2 ? 'bg-[#1F2C5B] text-white' : ''
                        }`}
                >
                    Add Child
                </Button>
                <Button
                    onClick={() => setAddCurrent(3)}
                    className={`no-hover py-8 px-40 font-semibold border border-[#1F2C5B] ${addCurrent === 3 ? 'bg-[#1F2C5B] text-white' : ''
                        }`}
                >
                    Add Vehicle
                </Button>
            </div>

            <form className="space-y-6">
                {addCurrent === 1 && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="First Name"
                            name="spouses.firstName" // Access nested field
                            type="text"
                            //   value={formData.spouses[0].firstName}
                            onChange={handleChangeValue}
                            placeholder="Enter First Name"
                        />
                        <InputField
                            label="Last Name"
                            name="spouses.lastName" // Access nested field
                            type="text"
                            //   value={formData.spouses[0].lastName}
                            onChange={handleChangeValue}
                            placeholder="Enter Last Name"
                        />

                        <InputField
                            label="Date of Birth"
                            name="spouses.dateOfBirth" // Access nested field
                            type="date"
                            //   value={formData.spouses[0].dateOfBirth}
                            onChange={handleChangeValue}
                        />
                        <InputField
                            label="Spouse"
                            name="spouses.spouse" // Access nested field
                            type="text"
                            //   value={formData.spouses[0].spouse}
                            onChange={handleChangeValue}
                            placeholder="Enter Spouse's Name"
                        />
                    </div>
                )}
                {addCurrent === 2 && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="First Name"
                            name="children.firstName" // Access nested field
                            type="text"
                            //   value={formData.children[0].firstName}
                            onChange={handleChangeValue}
                            placeholder="Enter First Name"
                        />
                        <InputField
                            label="Last Name"
                            name="children.lastName" // Access nested field
                            type="text"
                            //   value={formData.children[0].lastName}
                            onChange={handleChangeValue}
                            placeholder="Enter Last Name"
                        />

                        <InputField
                            label="Date of Birth"
                            name="children.dateOfBirth" // Access nested field
                            type="date"
                            //   value={formData.children[0].dateOfBirth}
                            onChange={handleChangeValue}
                        />
                        <InputField
                            label="Child"
                            name="children.child" // Access nested field
                            type="text"
                            //   value={formData.children[0].child}
                            onChange={handleChangeValue}
                            placeholder="Enter Child's Name"
                        />
                    </div>
                )}
                {addCurrent === 3 && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="Registration Number"
                            name="vehicles.registerNumber" // Access nested field
                            type="number"
                            //   value={formData.vehicles.registerNumber}
                            onChange={handleChangeValue}
                            placeholder="Enter Registration Number"
                        />
                        <SelectField
                            label="Brand"
                            name="vehicles.brand" // Access nested field
                            //   value={formData.vehicles.brand}
                            onChange={handleChangeValue}
                            options={[
                                { value: '', label: 'Select Brand' },
                                { value: 'ford', label: 'Ford' },
                                { value: 'toyota', label: 'Toyota' },
                            ]}
                        />

                        <InputField
                            label="Date of Entry into Service"
                            name="vehicles.serviceDate" // Access nested field
                            type="date"
                            //   value={formData.vehicles.serviceDate}
                            onChange={handleChangeValue}
                        />
                    </div>
                )}

                {/* Submit Button */}
            </form>
            <div className="flex justify-center mt-5 gap-5">
                <button
                    onClick={() => setCurrent(current + 1)}
                    className="bg-white flex items-center gap-2 text-black border border-[#1F2C5B] px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    <span>Skip</span> <FaCircleArrowRight className="w-5 h-5" />
                </button>
                <button
                    type="submit"
                    onClick={() => setCurrent(current + 1)}
                    className="bg-[#1F2C5B] flex items-center gap-2 text-white px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    <span>Next</span> <FaCircleArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    )
}

export default ApplyFormSecond
