'use client'
import { Button } from 'antd'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6';
import { FaArrowCircleLeft } from 'react-icons/fa';
import FormHeader from './FormHeader';
import FileUploadSection from './thirdForm/FileUploadSection';
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
// export interface ImageData {
//   image?: File | null
//   imagePreview?: string | null
// }
const ApplyFormThird = ({setCurrent,current}:{ setCurrent: React.Dispatch<React.SetStateAction<number>>, current:number}) => {
    // const initialData: Partial<ImageData> = {}
  //   const [uploadedImage, setUploadedImage] = useState<string | null>(initialData?.imagePreview || null) // State for uploaded image preview. ( can display the image preview in the UI by using this state variable)
  // const [selectedFile, setSelectedFile] = useState<File | null>(null) // State for the selected file. ( can display the image preview in the UI by using this state variable and when send image to the backend, you can use this state variable to send the file)

    const prev = () => {
        setCurrent(current - 1);
      };
      
      // const handleFileSelect = useCallback((file: File): void => {
      //     setSelectedFile(file)
      //     const reader = new FileReader()
      //     reader.onload = (e) => {
      //         setUploadedImage(e.target?.result as string)
      //       }
      //       reader.readAsDataURL(file)
      //   }, [])
        
      //   const handleFileRemove = useCallback((): void => {
      //       setUploadedImage(null)
      //       setSelectedFile(null)
      //   }, [])
  
      const handleSubmit = () => {
         
          // Here you can handle the form submission, e.g., send formData to an API
        
          setCurrent(current + 1);
      };
      // console.log(selectedFile)
      // console.log(uploadedImage)
  return (
    <div>
        <div className='mb-20 my-28'>
            <FormHeader content='Upload Documents'/>
        </div>
        <div className="space-y-6" >
            <div className='border '>
                {/* <FileUpload
                    onFileSelect={handleFileSelect}
                    onFileRemove={handleFileRemove}
                    uploadedImage={uploadedImage}
                /> */}
                <FileUploadSection/>
            </div>


            {/* Submit Button */}
            <div  className="flex justify-center pt-6">
                    {current < steps.length && (
                        <button onClick={handleSubmit} type="submit" className="bg-[#1F2C5B] flex items-center gap-2 text-white  px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                            <span>Next</span> <FaCircleArrowRight className='w-5 h-5'/>
                
                        </button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()} className="bg-[#1F2C5B] text-white px-9 py-6 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                            <FaArrowCircleLeft className='w-5 h-5'/> Previous
                        </Button>
                    )}
                
            </div>
        </div>
        <div>

       </div>
    </div>
  )
}

export default ApplyFormThird
