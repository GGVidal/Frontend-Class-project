import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Content from "../components/Content";

const { Header, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{ padding: 0, backgroundColor: "white", height: "5vh" }}
          >
            <Searchbar placeholder="Pesquisar" size="medium" />
          </Header>
          <Content>
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

export default Home;
