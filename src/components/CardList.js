import { Col, Row } from "antd";
import React from "react";
import Card from "./Card";
const CardList = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around">
      <Col
        span={6}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <Card />
      </Col>
      <Col
        span={6}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <Card />
      </Col>
      <Col
        span={6}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <Card />
      </Col>
      <Col
        span={6}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <Card />
      </Col>
      <Col
        span={5}
        xs={{ order: 1 }}
        sm={{ order: 2 }}
        md={{ order: 3 }}
        lg={{ order: 4 }}
      >
        <Card />
      </Col>
    </Row>
  );
};

export default CardList;
