"use client";
// import logo from "@/assets/logo/redTextLogo.png";
import { Button, Drawer, Dropdown, MenuProps, Space } from "antd";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavMenu from "./NavMenu";

import Link from "next/link";
// import { cn } from "@/lib/utils";
import { RefObject } from "react";
import { FaAngleDown, FaPhone } from "react-icons/fa";
import Image from "next/image";
import {  User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { logout } from "@/redux/features/auth";

interface ForMobileProps {
  ref?: RefObject<HTMLDivElement>;
}

const ForMobile = ({ ref }: ForMobileProps) => {
  const [open, setOpen] = useState(false);
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch()
  console.log(user)
  const [userAvailable, setUserAvailable] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (user?.email) {
      setUserAvailable(true)
    }
  }, [user])

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const logOutHandle = () => {
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
    <div ref={ref} className=" px-4 lg:hidden">
      <div className=" flex items-center justify-between">
        <Link href={"/"} className="">
          <div className="flex items-center gap-2 h-16 w-16">
            {/* <Image
            src={logo}
            alt="Booksy.buzz"
            width={200}
            height={200}
            className="rounded object-contain"
          /> */}
            <p className="font-semibold">Logo</p>
          </div>
        </Link>
        <div className="">
          <button onClick={showDrawer} className="">
            <IoMenu size={25} />
          </button>

        </div>

      </div>
      <div>
        <Drawer
          title="Menu"
          placement="left"
          width="85%"
          open={open}
          onClose={onClose}
          closeIcon={false}
          extra={
            <Space>
              <button onClick={onClose}>
                <IoClose className="hover:text-red-500 " size={25} />
              </button>
            </Space>
          }
        >
          <div className=" h-full flex flex-col justify-between  items-start">
            <div className=" w-full">
              <div >
                <div className=" w-full text-base">
                  <div onClick={onClose}>
                    <NavMenu className="flex-col mb-4" />

                  </div>
                  <div className="flex flex-col  gap-5">
                    <Link href={'/call-now'} className="bg-[#222b58] hover:bg-[#3448af] duration-500 rounded-md">

                      <button className="flex items-center justify-center gap-2 w-40 h-12  font-medium  text-white border rounded-md  hover:text-white border-[#1F2C5B]">
                        <div className="bg-white rounded-full"><FaPhone className="text-black w-6 h-6 p-1" /></div> <span>Call Now</span>
                      </button>
                    </Link>
                    {
                      !userAvailable ?
                        <Link href={'/login'} className=" hover:bg-[#222b58] duration-500 rounded-md">

                          <button className="w-full h-12  font-semibold text-black border rounded-md  hover:text-white border-[#1F2C5B]">
                            Log in
                          </button>
                        </Link>
                        :
                        <div className="">
                          <Dropdown menu={{ items }} placement="topRight" arrow className="w-full  h-12 bg-white font-semibold text-black border hover:bg-[#222b58] hover:text-white border-[#1F2C5B] rounded-md px-1">
                            <Button >
                              {
                                !user?.imageUrl ?
                                  <>
                                    <User className="border-2 rounded-full w-6 h-6 " />
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
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default ForMobile;
