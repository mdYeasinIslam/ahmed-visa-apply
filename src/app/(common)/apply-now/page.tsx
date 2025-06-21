'use client'
import React, { useState } from 'react';
import ApplyForm from '@/components/ApplyNow/ApplyFormFirst';
import ApplyFormSecond from '@/components/ApplyNow/secondForm/ApplyFormSecond';
import ApplyFormThird from '@/components/ApplyNow/ApplyFormThird';
import ApplyFormFinal from '@/components/ApplyNow/ApplyFormFinal';

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

const Page = () => {
//   const { token } = theme.useToken();
  const [current, setCurrent] = useState(1);


  // const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <section className='container mx-auto mt-20'>

      {/* <Steps current={current} items={items} /> */}
      <div className="max-w-3xl mx-auto flex items-center justify-center ">
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
              <div className={`w-40 h-1 mx-2 ${step.id < current ? "bg-[#1F2C5B]" : "bg-gray-300"}`} />
            )}
          </div>
        ))}
        </div>

      <div className='mb-20'>
        {
          current === 1 && (<ApplyForm setCurrent={setCurrent} current={current} />)
        }
        {
          current === 2 && (<ApplyFormSecond setCurrent={setCurrent} current={current} />)
        }
        {
          current === 3 && (<ApplyFormThird setCurrent={setCurrent} current={current} />)
        }
        {
          current === 4 && (<ApplyFormFinal setCurrent={setCurrent} current={current} />)
        }
     
        

      </div>
     
    </section>
  );
};

export default Page;