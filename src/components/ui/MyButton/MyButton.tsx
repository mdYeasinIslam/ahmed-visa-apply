"use client";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import { FaPhone } from "react-icons/fa6";

interface MyButtonProps {
  title: string;
  className?: string;
}
const MyButton: FC<MyButtonProps> = ({ title, className }) => {
  return (
    <>
      <Button
        radius="sm"
        className={cn(`w-40 h-12`, className)}
      >
       {title ==='Call Now' && <div className="bg-white rounded-full"><FaPhone  className="text-black w-6 h-6 p-1"/></div>} {title}
      </Button>
    </>
  );
};

export default MyButton;
