import { useSubmitPaymentDocMutation } from '@/redux/service/applyForm/visaApi'
import { FileText, Upload } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { toast } from 'sonner'

const UploadArea = ({ handleCancel }:{handleCancel: () => void}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [submitPaymentDoc] = useSubmitPaymentDocMutation()
    const [isDragOver, setIsDragOver] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)




    const handleFileSelect = (files: FileList | null) => {
        if (!files) return

    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
        handleFileSelect(e.dataTransfer.files)
    }

    const handleBrowseClick = () => {
        fileInputRef.current?.click()
    }
    const removeFile = (name: string) => {
        setUploadedFiles((prev) => prev.filter((file) => file.name !== name))
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileSelect(e.target.files)
        console.log(e.target.files)
        if (e.target.files && e.target.files.length > 0 && e.target.files[0]) {

            console.log(e.target.files[0])
            console.log(uploadedFiles)
            setUploadedFiles(prev => e.target.files ? [...prev, e.target.files[0]] : prev)

        }
        if (e.target.files && e.target.files.length > 0) {
        }
    }
    console.log(uploadedFiles)

    const handleSubmit = () => {
        if (!uploadedFiles.length) {    
            return toast.error('Please upload documents')
        }
        const applicationId = localStorage.getItem('applicationId')
        console.log(applicationId)
        if (!applicationId) {
            return toast.error('No application ID found')
        }
        // Handle the form submission logic here
        const formData = new FormData()
        // Append text data (example: bodyData)
        formData.append('bodyData', JSON.stringify({note: "I have submitted all money properly here a all the documents"}))
        uploadedFiles.forEach(file => {
            formData.append("documents", file)
        })
        console.log(formData)
        // You can send formData to your API endpoint here
        try {
      submitPaymentDoc({id:applicationId,body:formData})
        .unwrap()
        .then((response) => {
          console.log('Payment files', response)
          if(response?.success){
            toast.success(response.message)
            setUploadedFiles([])}
            handleCancel()
            localStorage.removeItem('applicationId')
        })
    } catch (error) {
      console.log(error)
    }
       
    }


    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const sizes = ["Bytes", "KB", "MB", "GB"]
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    }
    return (
        <div>
            <div
                className={`border-2 border-dashed rounded-lg py-4 text-center transition-colors ${isDragOver ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:border-gray-400"
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div onClick={handleBrowseClick} className="flex flex-col items-center space-y-4">
                    <div className="w-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Upload className="w-6 h-6 text-gray-500" />
                    </div>

                    <div>
                        <p className="text-lg font-medium text-gray-700 mb-2"> Browse file</p>
                        <p className="text-sm text-gray-500 mb-4">Format: PDF, Doc & Image file size: 25 MB</p>
                    </div>


                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.bmp,.webp"
                    onChange={handleFileInputChange}
                    className="hidden"
                />
            </div>
            <div className='flex items-center justify-center mt-4'>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className=" bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </div>
            {uploadedFiles.length > 0 && (
                <div className="mt-8 space-y-3">
                    {uploadedFiles.map((file) => (
                        <div
                            key={file.name}
                            className="bg-gray-100 rounded-lg p-4 flex items-center justify-between hover:bg-gray-200 transition-colors w-full "
                        >
                            <div className="flex items-center w-full gap-2" title={file.name}>
                                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-4 h-4 text-red-600" />
                                </div>
                                <div className="min-w-0 w-40 flex-1 ">
                                    <p className="text-gray-800 font-medium lg:truncate">{file.name}</p>
                                    <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFile(file?.name)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1 w-full flex justify-end"
                                title="Remove file"
                            >
                                <MdDelete className="w-6  h-6  text-red-500" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UploadArea
