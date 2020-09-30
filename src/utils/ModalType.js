const ModalType = (Modal, type, title, content, onConfirm) => {
  return Modal[type]({
    title,
    content,
    onOk() {
      if (onConfirm) {
        onConfirm();
      }
    },
  });
};
export { ModalType };
