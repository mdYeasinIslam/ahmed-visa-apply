/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useState } from "react";

import { usePathname } from "next/navigation";

import logo from "@/assets/logo/redTextLogo.png";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header, Content,Sider } = Layout;

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface AdminLayoutProps {
  children: ReactNode;
  menu: MenuItem[];
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, menu }) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const pathname = usePathname();
  console.log(pathname);

  const [selectedKey, setSelectedKey] = useState("/dashboard");

  const handleClick = ({ key }: any) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        width={220}
        className={`bg-white !overflow-y-auto !fixed lg:!static h-full z-50 border ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        theme="dark"
        collapsed={false}
      >
        <Link
          href={"/"}
          className="flex justify-center items-center py-3 border-b border-[#ffffff1a]"
        >
          <Image className="w-[130px]" src={logo} alt="logo" />
        </Link>

        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          items={menu}
          style={{
            // backgroundColor: "#EDE8DF",
            fontWeight: "500",
          }}
          inlineIndent={16}
          rootClassName="custom-sidebar"
        />
      </Sider>

      <Layout className="pl-8 bg-white space-y-5 ">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="lg:border-b lg:shadow-md  py-12 !px-14 "
        >
          <div className="hidden lg:flex  w-full  ">

            <h2 className="text-xl  sm:text-2xl lg:text-3xl font-semibold w-full ">
              Welcome back, Yeasin!
            </h2>
            <div className="flex  flex-col items-center  ">
              <span className="font-semibold text-lg">Yeasin!</span>
              <span className="text-sm text-gray-500">Admin</span>
            </div>
          </div>
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="lg:!hidden text-2xl"
          />
        </Header>
        <Content
          className=" !overflow-x-hidden bg-white !pr-10"
          onClick={() => setOpen(false)}
          style={{ padding: "0px", height: "100%" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
