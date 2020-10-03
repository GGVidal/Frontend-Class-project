import { Form, Input, Typography, Button, Row, Divider, Select } from "antd";
import React from "react";

import Customview from "../components/CustomView";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const { Title } = Typography;
const { Option } = Select;
const onFinish = (values) => {
  console.log(values);
};
const AddClass = () => {
  return (
    <Customview>
      <Row justify="center">
        <Title level={3}>Adicione uma turma</Title>
      </Row>
      <Divider />
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name="className"
          label="Nome da turma"
          rules={[{ required: true }]}
        >
          <Input style={{ maxWidth: 300 }} />
        </Form.Item>
        <Form.Item name="day" label="Dia" rules={[{ required: true }]}>
          <Select placeholder="Dia da semana" style={{ maxWidth: 300 }}>
            <Option value="2">Segunda-feira</Option>
            <Option value="3">Terça-feira</Option>
            <Option value="4">Quarta-feira</Option>
            <Option value="5">Quinta-feira</Option>
            <Option value="6">Sexta-feira</Option>
          </Select>
        </Form.Item>
        <Divider>Matérias</Divider>
        <Form.Item
          name={["discipline", "name"]}
          label="Nome"
          rules={[{ required: true }]}
        >
          <Input style={{ maxWidth: 300 }} />
        </Form.Item>
        <Form.Item
          name={["discipline", "professor"]}
          label="Professor"
          rules={[{ required: true }]}
        >
          <Input style={{ maxWidth: 300 }} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Customview>
  );
};
export default AddClass;
