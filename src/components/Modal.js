import React from "react";
import { Modal, Descriptions } from "antd";

const ModalComponent = ({
  visible,
  title,
  handleOk,
  handleCancel,
  children,
}) => {
  const onHandleOk = (e) => {
    handleOk();
  };

  const onHandleCancel = (e) => {
    handleCancel();
  };
  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onHandleCancel}
      onOk={onHandleOk}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
