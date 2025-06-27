'use client'
import React, { useState } from 'react';
import ApplyForm from '@/components/ApplyNow/ApplyFormFirst';
import ApplyFormSecond from '@/components/ApplyNow/secondForm/ApplyFormSecond';
import ApplyFormThird from '@/components/ApplyNow/ApplyFormThird';
import ApplyFormFinal from '@/components/ApplyNow/ApplyFormFinal';
import { Button } from 'antd';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { toast } from 'sonner';
import { useVisaApplyMutation } from '@/redux/service/applyForm/visaApi';

const steps = [
  {
    id: 1,
    title: '',
    content: 'First-content',
  },
  {
    id: 2,
    title: '',
    content: 'Second-content',
  },
  {
    id: 3,
    title: '',
    content: 'Last-content',
  },
  {
    id: 4,
    title: '',
    content: 'Last-content',
  },
];
// interface UploadedFile {
//   id: string
//   name: string
//   size: number
//   type: string
//   file?: File // Add the actual File object
// }
const Page = () => {
  const [visaApply] = useVisaApplyMutation()
  const [current, setCurrent] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    passportNumber: "",
    nationalID: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    effectiveDate: "",
    duration: 0,
    spouses: [{
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      spouse: ""
    }]
    ,
    children: [{
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      child: ""
    }]
    ,
    vehicles: [{
      registerNumber: "",
      brand: "",
      serviceDate: ""
    }]
    ,
  })
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const prev = () => {
    setCurrent(current - 1);
  };
  const addSpouse = () => {
    setFormData(prev => ({
      ...prev,
      spouses: [
        ...prev.spouses,
        { firstName: "", lastName: "", dateOfBirth: "", spouse: "" },
      ],
    }));
  };

  const addChild = () => {
    setFormData(prev => ({
      ...prev,
      children: [
        ...prev.children,
        { firstName: "", lastName: "", dateOfBirth: "", child: "" },
      ],
    }));
  };

  const addVehicle = () => {
    setFormData(prev => ({
      ...prev,
      vehicles: [
        ...prev.vehicles,
        { registerNumber: "", brand: "", serviceDate: "" },
      ],
    }));
  };


  const handleSubmit = () => {
    if (!uploadedFiles.length) {
      return toast.error('Please upload documents')
    }

    // Here you can handle the form submission, e.g., send formData to an API
    const formDataSubmit = new FormData();

    // Append text data (example: bodyData)

    formDataSubmit.append('bodyData', JSON.stringify(formData))

    uploadedFiles.forEach(file => {

      formDataSubmit.append("documents", file);
    });

    
    console.log(formData)
    try {
      visaApply(formDataSubmit)
        .unwrap()
        .then((response) => {
          console.log('visa apply', response)
          if(response?.success){
            toast.success(response.message)
          }
        })
    } catch (error) {
      console.log(error)
    }
    setCurrent(current + 1);
  };

  console.log(formData)

  return (
    <section className='container mx-auto mt-2'>
      {current > 1 && (
        <Button onClick={() => prev()} className="bg-[#1F2C5B] text-white  rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          <FaArrowCircleLeft className='w-5 h-5' />
        </Button>
      )}
      {/* <Steps current={current} items={items} /> */}
      <div className="max-w-3xl mx-auto flex items-center justify-center mt-16">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${step.id < current
                ? "bg-[#1F2C5B] text-white"
                : step.id === current
                  ? "bg-[#1F2C5B] text-white"
                  : "bg-gray-300 text-gray-600"
                }`}
            >
              {step.id}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-12 lg:w-40 h-1 mx-2 ${step.id < current ? "bg-[#1F2C5B]" : "bg-gray-300"}`} />
            )}
          </div>
        ))}
      </div>

      <div className='mb-20'>
        {
          current === 1 && (<ApplyForm formData={formData} setFormData={setFormData} setCurrent={setCurrent} current={current} />)
        }
        {
          current === 2 && (<ApplyFormSecond
            formData={formData}
            setFormData={setFormData}
            setCurrent={setCurrent}
            current={current}
            addSpouse={addSpouse}
            addChild={addChild}
            addVehicle={addVehicle}
          />)
        }
        {
          current === 3 && (<ApplyFormThird setUploadedFiles={setUploadedFiles} uploadedFiles={uploadedFiles} handleSubmit={handleSubmit} />)
        }
        {
          current === 4 && (<ApplyFormFinal setCurrent={setCurrent} current={current} />)
        }



      </div>

    </section>
  );
};

export default Page;