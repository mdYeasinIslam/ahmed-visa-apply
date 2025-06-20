import { Button, message } from 'antd'
import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaCircleArrowRight } from 'react-icons/fa6'
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
const StepsButton = ({setCurrent,current}:{ setCurrent: React.Dispatch<React.SetStateAction<number>>, current:number}) => {
     const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };
  return (
     <div style={{ marginTop: 40 }} className='flex justify-center' >
        {/* {current < steps.length - 1 && (
        <button type="submit" onClick={() => next()} className="bg-[#1F2C5B] flex items-center gap-2 text-white px-12 py-5 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            <span>Next</span> <FaCircleArrowRight className='w-5 h-5'/>

        </button>
        )} */}
        {current === steps.length - 1 && (
        <Button
            type="primary"
            onClick={() => message.success('Processing complete!')} 
        className="bg-[#1F2C5B] text-white px-9 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            Done
        </Button>
        )}
        {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className="bg-[#1F2C5B] text-white px-9 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
           <FaArrowCircleLeft className='w-5 h-5'/> Previous
        </Button>
        )}
    </div>
  )
}

export default StepsButton
