/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useState } from "react";

// import logo from "@/assets/logo/redTextLogo.png";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import LogOutPage from "@/components/Dashboard/LogOut";
import { useAppSelector } from "@/redux/hooks/hooks";

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
  // const dispatch = useAppDispatch()
  const [open, setOpen] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const user = useAppSelector(state=>state.auth.user)
  // const router = useRouter()

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
          {/* <Image className="w-[130px]" src={logo} alt="logo" /> */}
          <h1 className="text-2xl font-semibold">Logo</h1>
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
          rootClassName="custom-sidebar " 
        />
        <div className="absolute bottom-1 w-full  py-2 duration-500 cursor-pointer">
            <LogOutPage/>
        </div>
      </Sider>

      <Layout className="pl-8 py-3 bg-white space-y-5 ">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="lg:border-b lg:shadow-md  xl:!py-10 "
        >
          <div className="hidden lg:flex  w-full px-0 lg:px-14 ">

            <h2 className="text-xl  sm:text-2xl lg:text-3xl font-semibold w-full ">
              Welcome back, &quot;{user?.name}&quot;!
            </h2>
            <div className="flex  flex-col  text-left ">
              <span className="font-semibold text-lg">{user?.name}</span>
              <span className="text-sm text-gray-500">{user?.role}</span>
            </div>
          </div>
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="lg:!hidden text-xl"
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
