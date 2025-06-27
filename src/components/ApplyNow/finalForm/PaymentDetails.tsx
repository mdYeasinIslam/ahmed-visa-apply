"use client"

import { useState } from "react"
import { Upload } from "lucide-react"

export default function PaymentDetails({showModal}: { showModal: () => void }) {
  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Bank Transfer Details */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Bank Transfer Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Bank Name</p>
                <p className="font-medium text-gray-800">Example International Bank</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Account Holder</p>
                <p className="font-medium text-gray-800">James Wilson</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Account Number</p>
                <p className="font-medium text-gray-800">0123 456 7890</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Currency Accepted</p>
                <p className="font-medium text-gray-800">USD, Euro</p>
              </div>
            </div>
          </div>

          {/* Cashplus Account */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Cashplus Account</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-600 mb-1">Cashplus Account Name</p>
                <p className="font-medium text-gray-800">Example VISA SERVICE LTD</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Account Number</p>
                <p className="font-medium text-gray-800">CP-0099948</p>
              </div>
              <div>
                <p className="text-gray-600 mb-1">Provider</p>
                <p className="font-medium text-gray-800">Cashplus 123</p>
              </div>
            </div>
          </div>

          {/* Mobile Payment Instructions */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-800 mb-3">Mobile Payment Instructions</h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex">
                <span className="font-medium mr-2">1.</span>
                <span>Open your Cashplus app</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">2.</span>
                <span>Go to &quot;Send Money&quot;</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">3.</span>
                <span>Enter the account number: CP-0099948</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">4.</span>
                <span>Enter amount (e.g., $3,000)</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">5.</span>
                <span>In the &quot;Note&quot; or &quot;Reference&quot; field, write Your Application ID</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">6.</span>
                <span>Submit and take a screenshot of the confirmation</span>
              </li>
            </ol>
          </div>

          {/* Confirmation Checkbox */}
          <div className="mb-6">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={(e) => setIsConfirmed(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700 leading-relaxed">
                I confirm that I have made the payment using the provided instructions, and I agree to the terms and
                conditions of the visa application process.
              </span>
            </label>
          </div>

          {/* Upload Proof Button */}
          <div className="text-center">
            <button
            //   disabled={!isConfirmed}
            onClick={showModal}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                isConfirmed
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Upload Proof
              <Upload className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
