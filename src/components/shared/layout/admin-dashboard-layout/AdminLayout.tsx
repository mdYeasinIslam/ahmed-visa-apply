"use client";

import AdminLayout from "@/components/shared/layout/Layout";

import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";

import { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    "/dashboard",
    <LuLayoutDashboard className="w-5 h-5"/>
  ),
  getItem(
    <Link href="/dashboard/application">Application</Link>,
    "/dashboard/application",
    <FaRegFile className="w-5 h-5"/>
  ),
  getItem(
    <Link href="/dashboard/settings">Settings</Link>,
    "/dashboard/settings",
    <IoSettingsSharp className="w-5 h-5"/>
  ),
  // getItem(
  //   <p>Log Out</p>,
  //   "logOut",
  //   <TbLogout2 className="w-5 h-5"/>

  // ),
  // getItem(
  //   <Link href="/dashboard/reviews">Reviews</Link>,
  //   "/dashboard/reviews",
  //   <LuLayoutDashboard />
  // ),
];

const SuperAdminLayout = ({ children }: { children: ReactNode }) => {
  return <AdminLayout menu={navItems}>{children}</AdminLayout>;
};

export default SuperAdminLayout;
