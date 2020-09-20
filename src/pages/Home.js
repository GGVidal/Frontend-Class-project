import React from "react";
import { Col, Layout, Row, Typography, Breadcrumb, Button, Card } from "antd";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Content from "../components/Content";
import CardList from "../components/CardList";
const { Header, Footer } = Layout;
const { Title } = Typography;

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
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                span={4}
                xs={{ order: 1 }}
                sm={{ order: 2 }}
                md={{ order: 3 }}
                lg={{ order: 4 }}
                style={{ left: 30 }}
              >
                <Title level={3}>Turmas</Title>
              </Col>
              <Col
                span={4}
                xs={{ order: 1 }}
                sm={{ order: 2 }}
                md={{ order: 3 }}
                lg={{ order: 4 }}
                offset={7}
              >
                <Breadcrumb>
                  <Breadcrumb.Item>A-Z</Breadcrumb.Item>
                  <Breadcrumb.Item>Mais nova</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col
                span={4}
                xs={{ order: 1 }}
                sm={{ order: 2 }}
                md={{ order: 3 }}
                lg={{ order: 4 }}
                offset={5}
              >
                <Button //add hover style
                  style={{ backgroundColor: "#f0f2f5", color: "#2897fd" }}
                  type="primary"
                >
                  Adicionar nova turma
                </Button>
              </Col>
            </Row>
            <CardList />
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
