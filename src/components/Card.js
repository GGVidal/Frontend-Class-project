import React from "react";
import { Skeleton, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { SiGooglecalendar } from "react-icons/si";
import { BsClock } from "react-icons/bs";
const { Meta } = Card;
const CardComponent = () => {
  return (
    <Card
      style={{ width: 300, marginTop: 16, backgroundColor: "rgb(0,168,107)" }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton avatar active loading={false}>
        <Meta
          avatar={
            <Avatar src="https://yt3.ggpht.com/a/AGF-l79LyI82n36yS80xc58o37Bkbc14hQvkV3ZFPg=s900-c-k-c0xffffffff-no-rj-mo" />
          }
          title={<span style={{ color: "#F5F5F5" }}>ANUBIS8</span>}
          description={
            <div style={{ color: "rgb(18,53,36)" }}>
              <UserOutlined /> Kelly Aguiar
              <br />
              <UserOutlined /> Leandro Aguiar
              <br />
              <SiGooglecalendar /> Quarta-feira{" "}
              <BsClock style={{ marginLeft: "5vh" }} /> 20:00
            </div>
          }
        />
      </Skeleton>
    </Card>
  );
};
export default CardComponent;
