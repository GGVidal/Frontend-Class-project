import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
const Customview = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <Layout style={{ minHeight: "100vh" }}>{children}</Layout>
    </Layout>
  );
};
export default Customview;
