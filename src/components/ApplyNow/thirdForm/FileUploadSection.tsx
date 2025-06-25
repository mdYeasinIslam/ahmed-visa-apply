"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, FileText } from "lucide-react" 
import {MdDelete  } from "react-icons/md"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
}

export default function FileUploadSection() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
console.log(uploadedFiles)

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return
    
    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])
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

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files)
  }

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
            isDragOver ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50 hover:border-gray-400"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Upload className="w-6 h-6 text-gray-500" />
            </div>

            <div>
              <p className="text-lg font-medium text-gray-700 mb-2">Drop file or browse</p>
              <p className="text-sm text-gray-500 mb-4">Format: PDF, Doc & Image file size: 25 MB</p>
            </div>

            <button
              onClick={handleBrowseClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Browse Files
            </button>
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

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="mt-8 space-y-3">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="bg-gray-100 rounded-lg p-4 flex items-center justify-between hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-800 font-medium lg:truncate">{file.name}</p>
                    <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1"
                  title="Remove file"
                >
                  <MdDelete className="w-6  h-6  text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Placeholder cards when no files uploaded
        {uploadedFiles.length === 0 && (
          <div className="mt-8 space-y-3">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </section>
  )
}
