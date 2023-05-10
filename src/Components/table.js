import React, { Component } from "react";
import Chart from "react-apexcharts";
import Page from "../utlis/page/page";
import { Row, Typography, Col } from "antd";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      options2: {},
      series2: [44, 55, 41, 17, 15],
      labels: ["A", "B", "C", "D", "E"],
    };
  }

  render() {
    return (
      <Page>
        <Row>
          <Col>
            <div className="mixed-chart">
              <Typography.Title level={8}>Chart Data</Typography.Title>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="700"
                height="300"
              />
            </div>
          </Col>

          <Col style={{ marginLeft: "20%", marginTop: "5%" }}>
            <div className="donut">
              <Chart
                options={this.state.options2}
                series={this.state.series2}
                type="donut"
                width="380"
              />
            </div>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default Table;
