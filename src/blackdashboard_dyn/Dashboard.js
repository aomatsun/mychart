import React from "react";
import classNames from "classnames";

// import { MDBContainer } from "mdbreact";
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

var updateInterval = 2000;


class ChartsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      dataLine: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
        ]
      }
    };
    this.updateChart = this.updateChart.bind(this);
  }
  
  componentDidMount() {
    setInterval(this.updateChart, updateInterval);
  }
  updateChart() {
    var dataLine = this.state.dataLine;
    dataLine.labels.push("January");
    dataLine.datasets[0].data.push(36);
    this.setState({
      dataLine: dataLine
    });
    // chart.data.datasets.forEach((dataset) => {
    //     dataset.data.push(data);
    // });
  }

  render() {
    const data = {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: "My First dataset",
          backgroundColor: "rgba(95,186,88,0.7)",
          borderColor: "rgba(95,186,88,1)",
          pointBackgroundColor: "rgba(0,0,0,0)",
          pointBorderColor: "rgba(0,0,0,0)",
          pointHoverBackgroundColor: "rgba(95,186,88,1)",
          pointHoverBorderColor: "rgba(95,186,88,1)",
          data: []
        }]
      }
    }
      const options = {
      responsive: true,
      legend: {
          display: false
      },
      scales: {
          xAxes: [{
              type: 'realtime',
              gridLines: {
                  offsetGridLines: false,
              }
          }, {
              id: 'x-axis-2',
              type: 'linear',
              position: 'bottom',
              display: false,
              ticks: {
                  min: 0,
                  max: 105,
                  stepSize: 15
              }
          }],                
          yAxes: [{
              display: true,
              position: 'right',
              ticks: {
                  beginAtZero: false,
                  min: 0,
                  max: 50,
                  stepSize: 200
              }
            }]
      },
      plugins: {
      streaming: {
        onRefresh: function(chart) {
          chart.data.labels.push(Date.now());
          chart.data.datasets[0].data.push(
            Math.floor(10 + Math.random() * 80)
          );
        },
        delay: 2000
      }
    }
    }    
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Shipments</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <h3 className="mt-5">Line chart</h3>
                    <Line data={data} options={{ responsive: true }} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );    
  }
}

export default ChartsPage;