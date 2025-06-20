'use client'
import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import ApplyForm from '@/components/ApplyNow/ApplyForm';

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

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <section className='container mx-auto mt-20'>
        <div className='max-w-3xl mx-auto'>
            <Steps current={current} items={items} />

        </div>
      <div>
        <ApplyForm/>
      </div>
      <div style={{ marginTop: 40 }} className='flex justify-center' >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </section>
  );
};

export default Page;