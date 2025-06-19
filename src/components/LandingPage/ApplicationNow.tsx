import { Button } from "antd"
import {  Lock } from "lucide-react"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

export default function ApplicationNow() {
  return (
    <section className="bg-[#1F2C5B]  h-[412px]">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 flex flex-col h-full justify-between">
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-white ">Start Your Application Now</h2>

          <p className="text-white text-lg ">Only Taskes 3-5 minutes to complete</p>

        </div>
        <div  className="space-y-5">
          <div>
            <Link href={'/eventCreate'}>
              <Button
                size="large"
                className="bg-white text-black hover:bg-gray-100 px-9 py-8 text-lg font-semibold rounded-lg"
              >
                Apply Now
                <FiArrowUpRight className="bg-[#1F2C5B] w-6 h-6 p-0.5 rounded-full text-white text-xl"/>
              </Button>
            </Link>
            
          </div>

          <div className="flex items-center justify-center gap-1 text-white">
            <Lock className="h-5 w-5 " />
            <span>Your data is encrypted and security stored.</span>
          </div>

        </div>
      </div>
    </section>
  )
}
