import Image from 'next/image'
import React from 'react'
import topImg from '../../../../public/profile/topleft.png'
import bottomImg from '../../../../public/profile/righBottom.png'
import {  X } from 'lucide-react'
import UploadArea from './UploadArea'
type PropType = {
    open: boolean
    handleOk: () => void
    handleCancel: () => void
}

const FileUploadModal = ({ handleCancel }: PropType) => {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCancel()
        }
    }
    return (
        <div
            className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full md:w-[90%] lg:w-[70%]  xl:w-[50%] 2xl:w-[30%]  md:bg-white ">
                <Image
                    src={topImg}
                    alt='bg image'
                    width={500}
                    height={500}
                    className='absolute hidden md:flex  w-40 h-40 md:w-56 md:h-56'
                />
                <Image
                    src={bottomImg}
                    alt='bg image'
                    width={500}
                    height={500}
                    className='absolute hidden md:flex bottom-0 right-0 w-40 h-40 md:w-52 md:h-52'
                />
                {/* Close Button LARGE device*/}
                <button
                    onClick={handleCancel}
                    className="absolute hidden md:flex top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full  items-center justify-center hover:bg-red-600 transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
                <div className="top-[10%] bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto relative  border-2 my-5">
                    {/* Close Button small device*/}
                    <button
                        onClick={handleCancel}
                        className="absolute  flex md:hidden top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full  items-center justify-center hover:bg-red-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                    {/* Modal Content */}
                    <div className="p-4 w-full h-full">
                        <h2 className="text-2xl font-bold text-gray-900 text-center ">Share Your Payment Proof</h2>

                        <UploadArea  handleCancel={handleCancel} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileUploadModal
