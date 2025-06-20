"use client"

import type React from "react"
import { useState } from "react"

type InputFieldProps = {
    label: string
    name: string
    type?: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    required?: boolean
    icon?: React.ReactNode
}

function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required,
    icon,
}: InputFieldProps) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    required={required}
                />
                {icon && (
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        {icon}
                    </span>
                )}
            </div>
        </div>
    )
}

type SelectFieldProps = {
    label: string
    name: string
    value: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    required?: boolean
    options: { value: string; label: string }[]
}

function SelectField({
    label,
    name,
    value,
    onChange,
    required,
    options,
}: SelectFieldProps) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                required={required}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default function Page() {
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
    };
    return (
        <section className="py-16  bg-white">
            <div>
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Visa Application Form</h1>
                    <p className="text-gray-600 text-lg">(Personal Info)</p>
                </div>

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

                    {/* Second Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="Passport Number"
                            name="passportNumber"
                            value={formData.passportNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Passport Number"
                            required
                        />
                        <InputField
                            label="National ID"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleInputChange}
                            placeholder="Enter Your National ID"
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

                    {/* Fourth Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Your email"
                            required
                        />
                        <InputField
                            label="Phone Number"
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Your phone number"
                        />
                    </div>

                    {/* Fifth Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Enter Your address"
                            required
                        />
                        <InputField
                            label="Zip Code"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Enter Your zip code"
                            required
                        />
                    </div>

                    {/* Sixth Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <InputField
                            label="Effective Date"
                            name="effectiveDate"
                            type="date"
                            value={formData.effectiveDate}
                            onChange={handleInputChange}
                            placeholder="7/06/2025"
                        />
                        <SelectField
                            label="Duration"
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            options={[
                                { value: "", label: "Select your duration" },
                                { value: "30-days", label: "30 Days" },
                                { value: "90-days", label: "90 Days" },
                                { value: "6-months", label: "6 Months" },
                                { value: "1-year", label: "1 Year" },
                                { value: "multiple-entry", label: "Multiple Entry" },
                            ]}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-6">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
