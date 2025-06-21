import { Button } from 'antd'
import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { toast } from 'sonner';
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
const ApplyFormFinal = ({setCurrent,current}:{ setCurrent: React.Dispatch<React.SetStateAction<number>>, current:number}) => {
    const prev = () => {
        setCurrent(current - 1);
      };
      const finalHandle =() =>{
        toast.success('Processign complete')
      }
  return (
    <section>

        <div className='flex items-center '>
            {current === steps.length && (
            <Button
                type="primary"
                onClick={finalHandle} 
            className="bg-[#1F2C5B] text-white px-12 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                Done
            </Button>
            )}
        {current > 0 && (
            <Button  onClick={() => prev()} className="bg-[#1F2C5B] text-white px-9 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            <FaArrowCircleLeft className='w-5 h-5'/> Previous
            </Button>
            )}
        </div>
    </section>
  )
}

export default ApplyFormFinal
