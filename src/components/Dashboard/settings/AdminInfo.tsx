import React from 'react'

const AdminInfo = () => {
  return (
    <div className=' spacey-5 my-20'>
        <h1 className='text-2xl font-semibold mb-5'>Admin Account Information</h1>
      <form className=' grid grid-cols-4  gap-5 items-center'>
         {/* Passport Number */}
            <div className='col-span-2'>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div className='col-span-2'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div className='col-span-2'>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 ">
               Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                // value={formData.phone}
                // onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
                
            </div>
            {/* submit button */}
             <div className="pt-4 text-right">
              <button
                type="submit"
                className=" bg-[#1F2C5B] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Save Changes
              </button>
            </div>
      </form>
    </div>
  )
}

export default AdminInfo
