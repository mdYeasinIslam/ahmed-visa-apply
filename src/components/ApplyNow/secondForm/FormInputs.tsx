'use client'
import React from 'react';
import SelectField from '../SelectedField';
import InputField from '../InputField';
import { ChildType, SpouseType, VehicleType } from '@/types/formData';

type Props = {
    addCurrent: number
    //   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    formData: SpouseType | ChildType | VehicleType;
    add: string;
};

const FormInput = ({ handleInputChange, addCurrent }: Props) => {
    
    return (
        <div className="space-y-5">
            {/* spouse */}
            {
                addCurrent == 1 && (
                    <div className=''>

                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField
                                label="First Name"
                                name="spouses"
                                type="text"
                                // value={formData}
                                onChange={handleInputChange}
                                placeholder="Enter First Name"
                            />
                            <InputField
                                label="Last Name"
                                name="lastName"
                                type="text"
                                // value={formData?.spouses.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter Last Name"
                            />

                            <InputField
                                label="Date of Birth"
                                name="dateOfBirth"
                                type="date"
                                // value={formData?.dateOfBirth}
                                onChange={handleInputChange}
                            />
                            <InputField
                                label="Spouse"
                                name="spouse"
                                type="text"
                                // value={formData?.spouses.spouse}
                                onChange={handleInputChange}
                                placeholder="Enter Spouse's Name"
                            />
                        </div>
                    </div>
                )
            }
            {/* Children */}
            {
                addCurrent == 2 && (
                    <div className=''>

                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField
                                label="First Name"
                                name="firstName"
                                type="text"
                                // value={formData?.children.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter First Name"
                            />
                            <InputField
                                label="Last Name"
                                name="lastName"
                                type="text"
                                // value={formData?.children.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter Last Name"
                            />

                            <InputField
                                label="Date of Birth"
                                name="dateOfBirth"
                                type="date"
                                // value={formData?.dateOfBirth}
                                onChange={handleInputChange}
                            />
                            <InputField
                                label="Child"
                                name="child"
                                type="text"
                                // value={formData?.children.child}
                                onChange={handleInputChange}
                                placeholder="Enter Child's Name"
                            />

                        </div>
                    </div>
                )
            }
            {/* Vehicle */}
            {
                addCurrent == 3 && (
                    <div className=''>

                        <div className="grid md:grid-cols-2 gap-6">
                            <InputField
                                label="Registration Number"
                                name="registrationNumber"
                                type="number"
                                // value={formData?.vehicles.registerNumber}
                                onChange={handleInputChange}
                                placeholder="Enter Registration Number"
                            />
                            <SelectField
                                label="Brand"
                                name="brand"
                                // value={formData?.vehicles.brand}
                                onChange={handleInputChange}
                                options={[
                                    { value: '', label: 'Select Brand' },
                                    { value: 'ford', label: 'Ford' },
                                    { value: 'toyota', label: 'Toyota' },
                                ]}
                            />

                            <InputField
                                label="Date of Entry into Service"
                                name="serviceDate"
                                type="date"
                                // value={formData?.vehicles.serviceDate}
                                onChange={handleInputChange}
                            />

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FormInput;
