'use client';
import React, { useState } from "react";
import { Modal, Button } from "antd";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { logout } from "@/redux/features/auth";
import img from '../../../public/auth/logout-modal.jpg'


const LogOutPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [redirect,setRedirect] = useState(false)
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);  // Close the modal first

    signOutHandler()
    if(redirect){
        // Redirect to login page
      return  router.push("/login");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const signOutHandler = () => {
    console.log("signOutHandler called");
    dispatch(logout())

        // Remove access token from localStorage
        localStorage.removeItem("accessToken");

        // Remove the refresh token and access token cookies
        document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; HttpOnly; SameSite=Strict";
        document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; SameSite=Strict";

        // Show success toast
        toast.success("You have been logged out successfully");
        setRedirect(true)
  };

  return (
    <>
      {/* Trigger button */}
      <div
        className="flex items-center justify-start text-lg font-semibold hover:text-white text-red-500 hover:bg-red-500 w-[216px] p-2 gap-2 rounded-[8px] dark:bg-[#fbe7e8] bg-[#fbe7e8] cursor-pointer"
        onClick={showModal}
      >
        <p className="flex flex-row justify-start gap-2 items-center">
          <LogOut /> Logout
        </p>
      </div>

      {/* Modal from Ant Design */}
      <Modal
        title="Log out Securely"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} 
        className="rounded-lg p-4"
      >
        <div className="text-center">
          <Image
            src={img}
            alt="Logout Image"
            className="h-[75px] w-[91px] rounded-lg mx-auto"
            width={500}
            height={500}
          />
          <p className="text-lg  text-gray-800 mt-4">
            You have been successfully signed out of the dashboard. Please close your browser or log in again to continue managing the platform.
          </p>
          <div className="mt-6 flex justify-between gap-4">
            <Button
              onClick={handleCancel}
              className="w-full px-4 py-2 rounded-md bg-[#C2F3CD] hover:bg-[#A3E2A5] text-gray-700"
            >
              No
            </Button>
            <Button
              onClick={handleOk}
              className="w-full px-4 py-2 rounded-md bg-[#36C556] hover:bg-[#32A148] text-white"
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LogOutPage;
