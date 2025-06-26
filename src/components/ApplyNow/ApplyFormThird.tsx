'use client'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6';
import FormHeader from './FormHeader';
import FileUploadSection from './thirdForm/FileUploadSection';

// interface UploadedFile {
//   id: string
//   name: string
//   size: number
//   type: string
// }

type PropType ={
  // setCurrent: React.Dispatch<React.SetStateAction<number>>,
  // current: number
  setUploadedFiles: React.Dispatch<React.SetStateAction<File[]>>
  uploadedFiles: File[]
  handleSubmit: () => string | number | undefined
}
const ApplyFormThird = ({uploadedFiles , setUploadedFiles ,handleSubmit}: PropType) => {
  // const initialData: Partial<ImageData> = {}
  //   const [uploadedImage, setUploadedImage] = useState<string | null>(initialData?.imagePreview || null) // State for uploaded image preview. ( can display the image preview in the UI by using this state variable)
  // const [selectedFile, setSelectedFile] = useState<File | null>(null) // State for the selected file. ( can display the image preview in the UI by using this state variable and when send image to the backend, you can use this state variable to send the file)
  
  // const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])


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

  return (
    <div>
      <div className='mb-20 my-28'>
        <FormHeader content='Upload Documents' />
      </div>
      <div className="space-y-6" >
        <div className='border '>
          {/* <FileUpload
                    onFileSelect={handleFileSelect}
                    onFileRemove={handleFileRemove}
                    uploadedImage={uploadedImage}
                /> */}
          <FileUploadSection uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />
        </div>


        {/* Submit Button */}
        <div className="flex justify-center pt-6">

          <button onClick={handleSubmit} type="submit" className="bg-[#1F2C5B] flex items-center gap-2 text-white  px-12 py-3 rounded-lg font-semibold hover:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            <span>Submit</span> <FaCircleArrowRight className='w-5 h-5' />

          </button>

        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ApplyFormThird
