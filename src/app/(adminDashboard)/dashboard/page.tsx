import ApplicationTable from "@/components/Dashboard/Home/ApplicationTable";
import CardSection from "@/components/Dashboard/Home/CardSection";
import React from "react";

const DashbaordPage = () => {
  return (
       <section className=' h-screen  space-y-5'>
                {/* <PageWrapper title="Overview" /> */}
                <h1 className="text-xl font-semibold text-[#1F2C5B]">Dashboard Overview</h1>
            <div className=" space-y-5">
                <CardSection />
                {/* <PerformanceChart/> */}
                <ApplicationTable title="Recent Applications"/>
            </div>
        </section> 
  )
};

export default DashbaordPage;
