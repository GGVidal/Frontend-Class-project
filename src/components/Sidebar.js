import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
const { Header, Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider collapsible theme="dark">
      <Header
        style={{
          padding: 0,
        }}
      />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
