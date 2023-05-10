import React from "react";
import { ControlFilled } from "@ant-design/icons";
import { Tooltip, Card, Row, Col, Avatar, Typography } from "antd";
import Page from "../utlis/page/page";

const { Title } = Typography;

class CardData extends React.Component {
  render() {
    return (
      <Page>
        <Typography
          style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "3%" }}
        >
          Remote Service Apps
        </Typography>
        <br></br>
        <br></br>
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <Tooltip title="Remote Asset Monitoring">
              {/* <Navigate to="../live-monitoring"> */}
              <Card className="card">
                <Card.Meta
                  avatar={
                    <Avatar
                      icon={<ControlFilled />}
                      shape="square"
                      size={70}
                      FontAwesomeIcon={"fa-solid fa-computer"}
                      style={{
                        backgroundColor: "#80abc2",
                        borderRadius: 5,
                        verticalAlign: "middle",
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Remote Asset Monitoring
                      <p className="p">
                        Real-Time Energy Monitoring and Diagnostics
                      </p>
                    </Title>
                  }
                ></Card.Meta>
              </Card>
              {/* </Navigate> */}
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Energy Monitoring & Analytics">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      FontAwesomeIcon={"fa-solid fa-computer"}
                      size={70}
                      style={{
                        backgroundColor: "#80abc2",
                        borderRadius: 7,
                        verticalAlign: "middle",
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Energy Monitoring & Analytics
                      <p className="p">Energy Monitoring and Analytics</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Digital Twin">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#8a92a6",
                        verticalAlign: "middle",
                        borderRadius: 5,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Digital Twin
                      <p className="p">Replica of reality</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Predictive Service Insights">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#87568f",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Predictive Service Insights
                      <p className="p">Proactive rather Reactive Service</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Fire Station Management">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#80abc2",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Fire Station Management
                      <p className="p">
                        Emergency and FireEngine Allocation Management
                      </p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Service Insights">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#8a92a6",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Service Insights
                      <p className="p">Service Business Intelligence</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Service Resource Management ">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#8a92a6",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Service Resource Management
                      <p className="p">
                        Field Service Capacity Performance Management
                      </p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Cyber Physical Security">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#cc708c",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Cyber Physical Security
                      <p className="p">Teck stack Security</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Real Time Remote Control">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#80abc2",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Real Time Remote Control
                      <p className="p">Remote Asset Control Management</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Remote Software Management">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#80abc2",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Remote Software Management
                      <p className="p">Remote Device Software Configuration</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        {/*Second Card row  */}
        <Typography
          style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "3%" }}
        >
          Field Efficiency Apps
        </Typography>
        <br></br>
        <Row gutter={[20, 20]}>
          <Col span={8}>
            <Tooltip title="Preventive Maintenance">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      icon={<ControlFilled />}
                      shape="square"
                      size={70}
                      style={{
                        backgroundColor: "#50bd89",
                        borderRadius: 5,
                        verticalAlign: "middle",
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Preventive Maintenance
                      <p className="p">Paperless Maintenance & Workflow</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Audit/Inspection Management">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#87568f",
                        borderRadius: 7,
                        verticalAlign: "middle",
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Audit/Inspection Management
                      <p className="p">Inspection Management</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Fire Incident">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      icon={<ControlFilled />}
                      shape="square"
                      size={70}
                      style={{
                        backgroundColor: "#50bd89",
                        verticalAlign: "middle",
                        borderRadius: 5,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Fire Incident
                      <p className="p">Fire incident & Workflow Management</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="MR Work Instruction-Hololens">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#d78d61",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      MR Work Instruction-Hololens
                      <p className="p">
                        Mixed Reality & Paperless Work Instruction
                      </p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Web AR Product Catalogue">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#d78d61",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Web AR Product Catalogue
                      <p className="p">AR Based Formfit & Function</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="AR - Reomte Assistance">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#d78d61",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      AR - Reomte Assistance
                      <h6>Real-Time Remote Assistance</h6>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" AR Work Instruction-Tablet ">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#d78d61",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      AR Work Instruction-Tablet
                      <p className="p">AR Based Work Instruction</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title=" Smart BOT">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#87568f",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Smart BOT
                      <p className="p">AI Based RCA/CAPA Recommendations</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="VR Based Firesafety Training">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#d78d61",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      VR Based Firesafety Training
                      <p className="p">VR Firesafety Training</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Knowledge Base">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#dd7a6d",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Knowledge Base
                      <p className="p">Enterprise Knowledge Base</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="VR Based Product Training">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#d78d61",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      VR Based Product Training
                      <p className="p">VR Based Product Training</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>

          <Col span={8}>
            <Tooltip title="Spare Parts Inventory">
              <Card className="card">
                {/* <Link to="../live-monitoring"> */}
                <Card.Meta
                  avatar={
                    <Avatar
                      shape="square"
                      icon={<ControlFilled />}
                      size={70}
                      style={{
                        backgroundColor: "#8a92a6",
                        verticalAlign: "middle",
                        borderRadius: 7,
                      }}
                    />
                  }
                  title={
                    <Title
                      level={4}
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Spare Parts Inventory
                      <p className="p">Spare Parts & Inventory Management</p>
                    </Title>
                  }
                ></Card.Meta>
                {/* </Link> */}
              </Card>
            </Tooltip>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default CardData;
