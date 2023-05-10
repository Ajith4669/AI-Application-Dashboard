import { useState } from "react";
import { Col, Row, Button, Layout } from "antd";

const {  Content } = Layout;
function Page(props) {
  const [open, setOpen] = useState(false);
  const toggleFilter = () => {
    setOpen((value) => !value);
  };

  return (
    <Layout>
      <Content>
        {(props.filter || props.action) && (
          <div style={{ marginBottom: "10px" }}>
            <Row justify="space-between">
              <Col>{props.filter}</Col>
              <Col>{props.action}</Col>
            </Row>
          </div>
        )}
        {props.children}
      </Content>
    </Layout>
  );
}

export default Page;
