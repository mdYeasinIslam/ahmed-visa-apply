"use client";

import AuthImage from "@/components/Auth/AuthImage";
// import { Layout, Typography } from "antd";
import { ReactNode } from "react";

// const { Footer } = Layout;
// const { Text, Link } = Typography;

const layout = ({ children }: { children: ReactNode }) => {

  return (
    <div className="bg-white my-10 md:my-0">
            <div className="h-full md:h-screen lg:h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                {/* Left Side - Image */}
               <AuthImage/>
              {/* Right side -form */}
              {
                children
              }
            </div>
        </div>
  );
};

export default layout;
