import React from "react";
import { Row, Typography, Card, Col } from "antd";
import CardData from "./card";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

class CardDesign extends React.Component {
  render() {
    return (
      <div>
        <div className="image">
          <Typography.Title level={8}>Apps</Typography.Title>
          <img
            src="../img.png"
            preview={false}
            style={{ width: "100%", height: "400px" }}
          />
          <div>
            <Typography class="title"> DIGITAL APPS STORE</Typography>
            <Typography class="title1">
              For Smart Connected Protection System
            </Typography>
          </div>
        </div>

        <Row>
          <Col style={{ marginTop: "16px" }}>
            <div>
              <AiFillLeftCircle
                style={{
                  width: "50px",
                  height: "100px",
                  color: "white",
                  marginTop: "9.5%",
                }}
              />

              <img
                src="../img5.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginTop: "70px",
                  marginLeft: "1px",
                }}
              />

              <img
                src="../img4.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginLeft: "15px",
                  marginTop: "70px",
                }}
              />
              <img
                src="../img3.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginLeft: "15px",
                  marginTop: "70px",
                }}
              />
              <img
                src="../img2.png"
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  height: "200px",
                  marginLeft: "15px",
                  marginTop: "70px",
                }}
              />

              <AiFillRightCircle
                style={{
                  width: "50px",
                  height: "100px",
                  color: "white",
                  marginTop: "9.5%",
                }}
              />
            </div>
          </Col>
        </Row>

        <Card size="small" style={{ background: "#f5f5f5" }}>
          <CardData />
        </Card>
      </div>
    );
  }
}

export default CardDesign;
