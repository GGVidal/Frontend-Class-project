import React from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        <Sider
          width="17vh"
          style={{
            height: "100vh",
            backgroundColor: "#056839",
          }}
        >
          <Header
            style={{
              backgroundColor: "#056839",
              padding: 0,
            }}
          />
          <Menu
            mode="inline"
            defaultSelectedKeys={["4"]}
            style={{ backgroundColor: "#056839" }}
          >
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              style={{ color: "#ced6e0" }}
            >
              Teste
            </Menu.Item>
            {/* <Menu.Divider /> */}
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              style={{ color: "#ced6e0" }}
            >
              nav 2
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Header style={{ padding: 0, backgroundColor: "white" }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div style={{ padding: 24, textAlign: "center" }}>
              ...
              <br />
              Really ...
              <br />
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
