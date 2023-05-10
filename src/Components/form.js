import React from "react";
import {
  BellFilled,
  HomeOutlined,
  AppstoreOutlined,
  FileOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Layout,
  Menu,
  Input,
  Space,
  Tooltip,
  Avatar,
  Badge,
  Drawer,
  List,
} from "antd";
import "../App.css";
import CardDesign from "./card-design";
import Page from "../utlis/page/page";

const { Header, Content, Sider } = Layout;

const { Search } = Input;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const FormPage = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders("AI", "VR", "Animations");
  }, []);
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} style={{ background: "#001529" }}>
          <Menu
            theme="dark"
            className="menu"
            mode="inline"
            items={[
              getItem(
                "Home",
                "1",
                <Link to="/box">
                  <HomeOutlined style={{ fontSize: "35px", color: "grey" }} />
                </Link>
              ),
              getItem(
                "Application",
                "2",
                <Link to="/card-design">
                  <AppstoreOutlined
                    style={{ fontSize: "35px", color: "grey" }}
                  />
                </Link>
              ),
              getItem(
                "Activities",
                "3",
                <Link to="/table">
                  <FileOutlined style={{ fontSize: "35px", color: "grey" }} />
                </Link>
              ),
              getItem(
                "Insights",
                "4",
                <Link to="/raw-data">
                  <LayoutOutlined style={{ fontSize: "35px", color: "grey" }} />
                </Link>
              ),
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <Space style={{ marginLeft: "90%" }}>
              <Tooltip placement="topLeft" title="Country">
                <Avatar src="../flag.png"></Avatar>
              </Tooltip>
              <p style={{ marginBottom: "2%", fontSize: 15, color: "black" }}>
                EN
              </p>

              <Tooltip placement="topLeft" title="Notification">
                <Badge count={orders.length}>
                  <BellFilled
                    style={{ fontSize: 30, color: "orange" }}
                    onClick={() => {
                      setNotificationsOpen(true);
                    }}
                  />
                </Badge>
              </Tooltip>
              <br></br>
              <Tooltip placement="topLeft" title="Logout">
                <Avatar src="../human.png"></Avatar>
              </Tooltip>
            </Space>
          </Header>
          <Content
            style={{
              margin: "16px",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return <List.Item>Item ordered!</List.Item>;
          }}
        ></List>
      </Drawer>
    </>
  );
};

export default FormPage;
