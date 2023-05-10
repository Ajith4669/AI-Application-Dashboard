import {
  BellFilled,
  HomeOutlined,
  AppstoreOutlined,
  FileOutlined,
  LayoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../App.css";
import {
  Layout,
  Menu,
  Space,
  Input,
  Avatar,
  Badge,
  Tooltip,
  Typography,
} from "antd";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const { Search } = Input;
const { Header, Sider } = Layout;
const MainContainer = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          top: 0,
          alignItems: "center",
          background: "transparent",
          boxShadow: "none",
          backgroundColor: "white",
          position: "sticky",
          zIndex: 1,
          width: "100%",
        }}
      >
        <img src="/logo.png" />

        <Search
          onSearch={Search}
          placeholder="Search App and more"
          style={{
            width: 500,
            marginLeft: "25%",
          }}
        />
        <Space style={{ marginLeft: "20%" }}>
          <Tooltip placement="topLeft" title="Country">
            <Avatar src="../flag.png"></Avatar>
          </Tooltip>
          <p style={{ marginTop: "20px", fontSize: 15, color: "grey" }}>EN</p>
          <br></br>
          <Tooltip placement="topLeft" title="Notification">
            <Badge count={1}>
              <BellFilled style={{ fontSize: 30, color: "orange" }} />
            </Badge>
          </Tooltip>
          <br></br>
          <Tooltip placement="topLeft" title="Logout">
            <Avatar src="../human.png"></Avatar>
          </Tooltip>
        </Space>
      </Header>
      <Layout>
        <Sider theme="light" width={80}>
          <Menu
            className="menu"
            mode="inline"
            items={[
              getItem(
                "Home",
                "1",

                <HomeOutlined style={{ fontSize: "35px", color: "grey" }} />
              ),
              getItem(
                "Apps",
                "2",

                <AppstoreOutlined style={{ fontSize: "35px", color: "grey" }} />
              ),
              getItem(
                "Activities",
                "3",
                <FileOutlined style={{ fontSize: "35px", color: "grey" }} />
              ),
              getItem(
                "Insights",
                "4",
                <LayoutOutlined style={{ fontSize: "35px", color: "grey" }} />
              ),
              getItem(
                "Settings",
                "5",
                <SettingOutlined style={{ fontSize: "35px", color: "grey" }} />
              ),
            ]}
          />
        </Sider>

        <Layout>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default MainContainer;
