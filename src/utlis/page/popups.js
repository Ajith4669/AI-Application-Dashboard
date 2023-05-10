import { Modal } from "antd";

function Popups(props) {
  return (
    <Modal maskClosable={false} destroyOnClose {...props}>
      {props.children}
    </Modal>
  );
}

export default Popups;
