import React from "react";
import { Layout } from "antd";

const { Content } = Layout;
const ContentField = ({ children }) => {
  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      {children}
    </Content>
  );
};
export default ContentField;
