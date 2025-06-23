import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto spacey-5 my-20'>
        <h1 className='text-2xl font-semibold mb-5'>Password Management</h1>
      <form className='max-w-sm space-y-5'>
         {/* Passport Number */}
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2 ">
                Current Password
              </label>
              <input
                type="text"
                id="currentPassword"
                name="currentPassword"
                // value={formData.currentPassword}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-2 ">
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                // value={formData.passportNumber}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-2 ">
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                name="passportNumber"
                // value={formData.passportNumber}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            {/* submit button */}
             <div className="pt-4">
              <button
                type="submit"
                className=" bg-[#1F2C5B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Update Password
              </button>
            </div>
      </form>
    </div>
  )
}

export default page
