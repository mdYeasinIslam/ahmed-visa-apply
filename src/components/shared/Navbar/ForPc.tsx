"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavMenu from "./NavMenu"
import { Button, Dropdown, MenuProps } from "antd";
import { User } from "lucide-react";
import { FaPhone } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { logout } from "@/redux/features/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

interface ForPcProps {
  ref?: React.Ref<HTMLDivElement>;
}

const ForPc = ({ ref }: ForPcProps) => {
  const user = useAppSelector(state=>state.auth.user);
  const dispatch = useAppDispatch()
  console.log(user)
  const [userAvailable, setUserAvailable] = useState(false);
  const router = useRouter()

  useEffect(()=>{
    if(user?.email){
      setUserAvailable(true)
    }
  },[user])
  
  const logOutHandle = ()=>{
   dispatch(logout())
    // Remove access token from localStorage
  localStorage.removeItem("accessToken");

  // Remove the refresh token and access token cookies
  document.cookie = "refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; HttpOnly; SameSite=Strict";
  document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; SameSite=Strict";

  // Optionally, you can redirect the user to the login page
  router.push("/login");
  }


  const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href="/account">
        Account
      </Link >
    ),
  },
  {
    key: '2',
    label: (
      <Link href="/setting">
        Setting
      </Link >
    ),
 },
  {
    key: '3',
    label: (
      <p onClick={logOutHandle}>
        Log-out
      </p >
    ),
 }
]
  return (
    <div ref={ref}>
      <div className="container hidden lg:flex py-6 items-center justify-between border-b border-[#CFDFF0]">
        <Link href={"/"} className="">
          <div className="flex items-center gap-2 h-full w-28">
            {/* <Image
              src={logo}
              alt="Booksy.buzz"
              width={400}
              height={400}
              className="rounded object-contain"
            /> */}
            <p className="font-semibold text-xl">Logo</p>
          </div>
        </Link>
        <div className="flex items-center gap-5 text-base text-[#808080]">
          <NavMenu className="lg:items-center" isShowBorder={true} />
        </div>

        <div className="flex gap-5">
          <Link href={'/call-now'} className="bg-[#222b58] hover:bg-[#3448af] duration-500 rounded-md">

              <button className="flex items-center justify-center gap-2 w-40 h-12  font-medium  text-white border rounded-md  hover:text-white border-[#1F2C5B]">
              <div className="bg-white rounded-full"><FaPhone  className="text-black w-6 h-6 p-1"/></div> <span>Call Now</span>
              </button>
            </Link>
          {
            !userAvailable ?
            <Link href={'/login'} className="hover:bg-[#222b58] duration-500 rounded-md">

              <button className="w-40 h-12  font-semibold text-black border rounded-md  hover:text-white border-[#1F2C5B]">
                Log in
              </button>
            </Link>
            :
            <div className="">
              <Dropdown menu={{ items }} placement="topRight" arrow  className=" h-12 bg-white font-semibold text-black border hover:bg-[#222b58] hover:text-white border-[#1F2C5B] rounded-md px-1">
                <Button>
                  {
                    !user?.imageUrl ?
                    <>
                      <User className="border-2 rounded-full w-6 h-6 "/>
                    </>
                    :
                    <>
                      <Image
                        src={user?.imageUrl}
                        alt="User image"
                        width={500}
                        height={500}
                        className="w-8 h-8 rounded-full"
                      />
                    </>
                  }
                    <h1 className="">{user?.name}</h1>
                    <FaAngleDown />
                  </Button>
              </Dropdown>
            </div>

          }
        </div>
      </div>
    </div>
  );
};

export default ForPc;
