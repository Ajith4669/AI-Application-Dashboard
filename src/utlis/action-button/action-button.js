import {
  ExclamationCircleOutlined,
  PlusOutlined,
  EditOutlined,
  FileSearchOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  UnorderedListOutlined,
  FundViewOutlined,
  UploadOutlined,
} from "@ant-design/icons";
// import { Tooltip, Button, Modal } from "antd";
const { confirm } = Modal;
const showDeleteConfirm = (okCallBack) => {
  confirm({
    title: "Are you sure delete this entry?",
    icon: <ExclamationCircleOutlined />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      okCallBack();
    },

    onCancel() {
      console.log("Cancel");
    },
  });
};
function AddButton(props) {
  return (
    <Tooltip title="Add">
      <Button type="primary" icon={<PlusOutlined />} {...props}>
        Add
      </Button>
    </Tooltip>
  );
}
function EditButton(props) {
  return (
    <Tooltip title="Edit">
      <Button type="text" icon={<EditOutlined />} {...props} />
    </Tooltip>
  );
}
function ViewButton(props) {
  return (
    <Tooltip title="View">
      <Button type="text" icon={<FileSearchOutlined />} {...props} />
    </Tooltip>
  );
}
function NewViewButton(props) {
  return (
    <Tooltip title="View">
      <Button
        type="text"
        style={{ color: "green" }}
        icon={<FundViewOutlined style={{ color: "green" }} />}
        {...props}
      />
    </Tooltip>
  );
}
function DeleteButton(props) {
  return (
    <Tooltip title="Delete">
      <Button
        type="text"
        icon={<DeleteOutlined />}
        onClick={() => showDeleteConfirm(props.onClick)}
      />
    </Tooltip>
  );
}
function BackButton(props) {
  return <Button type="text" icon={<ArrowLeftOutlined />} {...props} />;
}

function ListViewButton(props) {
  return (
    <Button type="primary" icon={<UnorderedListOutlined />} {...props}>
      View
    </Button>
  );
}
function UploadButton(props) {
  return (
    <Tooltip title="Upload">
      <Button type="text" icon={<UploadOutlined />} {...props} />
    </Tooltip>
  );
}
export {
  AddButton,
  EditButton,
  ViewButton,
  DeleteButton,
  UploadButton,
  BackButton,
  ListViewButton,
  showDeleteConfirm,
};
