"use client";
import React from "react";
import Link from "next/link";
import NavMenu from "./NavMenu"
import { Button, Dropdown, MenuProps } from "antd";
import { User } from "lucide-react";
import { FaPhone } from "react-icons/fa6";

interface ForPcProps {
  ref?: React.Ref<HTMLDivElement>;
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
      <p >
        Log-out
      </p >
    ),
 }
]
const ForPc = ({ ref }: ForPcProps) => {
  // const [userAvailable, setUserAvailable] = useState(false);
  const userAvailable = false
  // const [dropdownOpenPricing, setDropdownOpenPricing] = useState(false);
  // const pathname = usePathname();

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
          <Link href={'/call-now'} className="bg-[#222b58] hover:bg-[#3448af] duration-500 rounded-md">

              <button className="flex items-center justify-center gap-2 w-40 h-12  font-medium  text-white border rounded-md  hover:text-white border-[#1F2C5B]">
              <div className="bg-white rounded-full"><FaPhone  className="text-black w-6 h-6 p-1"/></div> <span>Call Now</span>
              </button>
            </Link>
          {
            userAvailable ?
            <Link href={'/log-in'} className="hover:bg-[#222b58] duration-500 rounded-md">

              <button className="w-40 h-12  font-semibold text-black border rounded-md  hover:text-white border-[#1F2C5B]">
                Log in
              </button>
            </Link>
            :

            <div className="">
              <Dropdown menu={{ items }} placement="topRight" arrow  className="w-40 h-12 bg-white font-semibold text-black border hover:bg-[#222b58] hover:text-white border-[#1F2C5B] rounded-md">
                <Button><User className="border-2 rounded-full w-6 h-6 "/><h1>M Yeasin</h1></Button>
              </Dropdown>
            </div>

          }
        </div>
      </div>
    </div>
  );
};

export default ForPc;
