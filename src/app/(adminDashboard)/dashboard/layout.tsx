'use client'
import SuperAdminLayout from "@/components/shared/layout/admin-dashboard-layout/AdminLayout";
import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";
interface AdminLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AdminLayoutProps) => {
  const user = useAppSelector(state=>state.auth.user)
  console.log(user)
  return <SuperAdminLayout>{children}</SuperAdminLayout>;
};

export default Layout;
