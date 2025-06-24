"use client";

import AdminLayout from "@/components/shared/layout/Layout";

import Link from "next/link";
import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { getItem, MenuItem } from "../Layout";

const navItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">Dashboard</Link>,
    "/dashboard",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/application">Application</Link>,
    "/dashboard/roofing",
    <LuLayoutDashboard />
  ),
  getItem(
    <Link href="/dashboard/settings">Settings</Link>,
    "/dashboard/blogs",
    <LuLayoutDashboard />
  ),
  getItem(
    <p>Log Out</p>,
    "logOut",
    <LuLayoutDashboard />
  ),
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
