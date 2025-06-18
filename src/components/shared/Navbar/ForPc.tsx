"use client";
import React, { useState } from "react";
import logo from "@/assets/logo/redTextLogo.png";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { FaCaretDown } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import MyButton from "@/components/ui/MyButton/MyButton";

const ForPc = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenPricing, setDropdownOpenPricing] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div className="container hidden lg:flex py-6 items-center justify-between ">
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
          {/* "Other Service" Dropdown  */}
          {/* <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative py-5 flex"
          >
            <div
              // className="cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center"

              className={cn(
                "cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center",
                pathname === "/gutter-fascia-soffit-repair-replacement" &&
                  "text-red-primary ",
                pathname === "/pressure-washing" && "text-red-primary "
              )}
            >
              <p> Other Services</p>{" "}
              <FaCaretDown className={cn(dropdownOpen && "rotate-180")} />
            </div>

           
            {dropdownOpen && (
              <div className="absolute -left-1/2 top-14 mt-2 bg-white shadow-md rounded-md w-72 p-2 z-[999999]">
                <Link href={"/gutters"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/gutters" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Gutter
                  </div>
                </Link>
                <Link href={"/window"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/window" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Windows
                  </div>
                </Link>
                <Link href={"/commercial"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/commercial" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Commercial
                  </div>
                </Link>
              </div>
            )}
          </div> */}
          {/* <div className="h-5 border "></div> */}
           {/* "pricing" Dropdown  */}
          {/* <div
            onMouseEnter={() => setDropdownOpenPricing(true)}
            onMouseLeave={() => setDropdownOpenPricing(false)}
            className="relative py-5 flex"
          >
            <div
              // className="cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center"

              className={cn(
                "cursor-pointer  hover:text-red-primary transition duration-200 flex gap-3 items-center",
                pathname === "/pricing" && "text-red-primary ",
                pathname === "/pricing" && "text-red-primary "
              )}
            >
              <p>Pricing</p>{" "}
              <FaCaretDown
                className={cn(dropdownOpenPricing && "rotate-180")}
              />
            </div>

           
            {dropdownOpenPricing && (
              <div className="absolute -left-1/2 top-14 mt-2 bg-white shadow-md rounded-md w-72 p-2 z-[999999]">
                <Link href={"/pricing-cost-calculator/roofing"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/pricing-cost-calculator/roofing" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Roof Cost Calculator
                  </div>
                </Link>
                <Link href={"/pricing-cost-calculator/siding"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/pricing-cost-calculator/siding" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Siding Cost Calculator
                  </div>
                </Link>
                <Link href={"/pricing-cost-calculator/window"}>
                  <div
                    // className="cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 rounded"
                    className={cn(
                      "cursor-pointer hover:text-red-primary hover:bg-slate-100 p-2 mb-2 rounded transition duration-200",
                      pathname === "/pricing-cost-calculator/window" &&
                        "text-red-primary bg-slate-100 p-2 mb-2 rounded font-semibold"
                    )}
                  >
                    Window Cost Calculator
                  </div>
                </Link>
              </div>
            )}
          </div> */}
        </div>

        <div className="flex gap-5">
            <MyButton title="Call Now"  className="bg-[#1F2C5B] text-white"/>
            <Link href={'/log-in'}>
              <MyButton title="Log in" className="bg-white font-semibold text-black border hover:bg-[#222b58] hover:text-white border-[#1F2C5B]"/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ForPc;
