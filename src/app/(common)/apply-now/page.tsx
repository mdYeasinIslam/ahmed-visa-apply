'use client'
import React, { useState } from 'react';
import { Steps  } from 'antd';
import ApplyForm from '@/components/ApplyNow/ApplyFormFirst';
import StepsButton from '@/components/ApplyNow/StepsButton';
import ApplyFormSecond from '@/components/ApplyNow/ApplyFormSecond';
import ApplyFormThird from '@/components/ApplyNow/ApplyFormThird';
import ApplyFormFinal from '@/components/ApplyNow/ApplyFormFinal';

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

const Page = () => {
//   const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);


  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <section className='container mx-auto mt-20'>
        <div className='max-w-3xl mx-auto'>
            <Steps current={current} items={items} />

        </div>
      <div className='mb-20'>
        {
          current ===0 &&( <ApplyForm setCurrent={setCurrent} current={current}/> )
        }
        {
          current ===1 &&( <ApplyFormSecond setCurrent={setCurrent} current={current}/> )
        }
        {
          current ===2 &&( <ApplyFormThird setCurrent={setCurrent} current={current}/> )
        }
        {
          current ===3 &&( <ApplyFormFinal setCurrent={setCurrent} current={current}/> )
        }
     
        

      </div>
     
    </section>
  );
};

export default Page;