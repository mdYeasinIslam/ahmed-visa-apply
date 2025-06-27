import { Button } from "antd";
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi";

export default function Banner() {
  return (
    <section
      className="relative z-10 lg:h-[500px] xl:h-[680px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/banner.png)",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 px-4 py-24 flex flex-col items-center justify-center text-center h-full">
      <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl drop-shadow-lg">
          Apply for Your Visa Easily, Securely & Fast
        </h1>
        <p className="text-gray-300 max-w-2xl mb-8 md:text-lg drop-shadow-md">
         Select your destination, fill out the form, and upload your documents — all in just a few steps.
        </p>
      </div>
      
       <Link href={'/apply-now'}>
            <Button
              size="large"
              className="bg-[#1F2C5B] text-white hover:bg-gray-100 px-10   py-6 text-lg font-semibold rounded-lg"
            >
              Apply Now
              <FiArrowUpRight className="bg-white rounded-full text-black text-xl"/>
            </Button>
          </Link>
      </div>
    </section>
  )
}
