
import { FaLock } from "react-icons/fa6"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineFileUpload, MdOutlineWatchLater } from "react-icons/md";

export default function ChooseUsSection() {
  return (
    <section className="py-16  bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0056B3] mb-16">Why Choose Us</h2>

        <div className=" grid md:grid-cols-3 xl:grid-cols-4 justify-center gap-6">
          {/* Step 1 */}
          <div className="md:max-w-[294px] 0  bg-white rounded-2xl py-7 md:py-10 xl:py-16 px-1 md:px-3 xl:px-1 shadow-md border-x-2 border-b-2 border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#E7F5FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <IoIosCheckmarkCircle  className="w-8 h-8 text-[#0056B3]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 ">Simple & intuitive application process</h3>
           
          </div>

          {/* Step 2 */}
          <div className="md:max-w-[294px] 0  bg-white rounded-2xl py-7 md:py-10 xl:py-16 px-1 md:px-3 xl:px-1 shadow-md border-x-2 border-b-2 border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#E7F5FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <FaLock className="w-8 h-8 text-[#41479B]" />
              {/* <FaLock /> */}

            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure data handling</h3>
          </div>

          {/* Step 3 */}
          <div className="md:max-w-[294px] 0  bg-white rounded-2xl py-7 md:py-10 xl:py-16 px-1 md:px-3 xl:px-1 shadow-md border-x-2 border-b-2 border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#E7F5FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdOutlineFileUpload  className="w-8 h-8 text-[#0056B3]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy document upload</h3>
           
          </div>
             {/* Step 4 */}
          <div className="md:max-w-[294px] 0  bg-white rounded-2xl py-7 md:py-10 xl:py-16 px-1 md:px-3 xl:px-1 shadow-md border-x-2 border-b-2 border-gray-200 text-center">
            <div className="w-16 h-16 bg-[#E7F5FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <MdOutlineWatchLater  className="w-8 h-8 text-[#0056B3]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast application updates</h3>
           
          </div>
        </div>
      </div>
    </section>
  )
}
