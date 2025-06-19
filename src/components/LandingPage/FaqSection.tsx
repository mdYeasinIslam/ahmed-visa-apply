import { Collapse } from 'antd'
import React from 'react'

const FaqSection = () => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
 <section className="py-16  bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0056B3] mb-16">Frequently Asked Questions</h2>

        <div className="space-y-3">
            <Collapse
                size="large"
                items={[{ key: '1', label: <h1 className='font-semibold text-xl '>This is large size panel header</h1>, children: <p>{text}</p> }]}
            />
            <Collapse
                size="large"
                items={[{ key: '1', label: <h1 className='font-semibold text-xl '>This is large size panel header</h1>, children: <p>{text}</p> }]}
            />
            <Collapse
                size="large"
                items={[{ key: '1', label: <h1 className='font-semibold text-xl '>This is large size panel header</h1>, children: <p>{text}</p> }]}
            />
            <Collapse
                size="large"
                items={[{ key: '1', label: <h1 className='font-semibold text-xl '>This is large size panel header</h1>, children: <p>{text}</p> }]}
            />
            <Collapse
                size="large"
                items={[{ key: '1', label: <h1 className='font-semibold text-xl '>This is large size panel header</h1>, children: <p>{text}</p> }]}
            />
            <Collapse
                size="large"
                items={[{ key: '1', label: <h1 className='font-semibold text-xl '>This is large size panel header</h1>, children: <p>{text}</p> }]}
            />
        </div>
      </div>
    </section>
  )
}

export default FaqSection
