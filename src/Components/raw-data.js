import React, { Component } from "react";

import { Button, Table } from "antd";
import Page from "../utlis/page/page";
import { Space, Tag, Typography } from "antd";

class RawData extends Component {
  title = "Data";
  columns = [
    {
      title: "App Name",
      dataIndex: "appname",
      key: "name",
    },
    {
      title: "Version",
      dataIndex: "version",
      key: "version",
    },

    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "blue" : "blue";
            if (tag === "Developed") {
              color = "blue";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">View</Button>
        </Space>
      ),
    },
  ];
  data = [
    {
      sno: "1",
      appname: "AR",
      version: 3.2,
      tags: ["developed"],
    },
    {
      key: "2",
      appname: "AI",
      version: 1.8,
      tags: ["developed"],
    },
    {
      key: "3",
      appname: "VR",
      version: 4.1,
      tags: ["developed"],
    },
    {
      key: "4",
      appname: "Animation",
      version: 3.8,
      tags: ["developed"],
    },
  ];

  render() {
    return (
      <Page title="Data">
        <Typography.Title level={8}>Datas</Typography.Title>
        <Table
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            size: "default",
          }}
          scroll={{ x: 980 }}
          dataSource={this.data}
          columns={this.columns}
          size="middle"
        />
        {/* <CountryForm {...this.state.popup} close={this.onClose} /> */}
      </Page>
    );
  }
}

export default RawData;
