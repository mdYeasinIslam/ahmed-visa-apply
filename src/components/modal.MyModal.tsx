/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import React from "react";

const MyModal = ({
  isModalOpen,
  setIsModalOpen,
  children,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  children: React.ReactNode;
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
        style={{padding:'0px'}}
      >
        {children}
      </Modal>
    </>
  );
};

export default MyModal;
