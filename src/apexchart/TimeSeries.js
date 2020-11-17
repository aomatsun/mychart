import React from 'react';
import Chart from 'react-apexcharts'
import moment from 'moment'

class Timeseries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'PRODUCT A',
        data: [
                    { x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }
        ]
      }, {
        name  : 'PRODUCT B',
        data: [
                    { x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }
                    ]
      }, {
        name: 'PRODUCT C',
        data: [
                    { x: 1, y: 10 }, { x: 2, y: 13 }, { x: 3, y: 18 }, { x: 4, y: 20 }, { x: 5, y: 17 }, { x: 6, y: 10 }, { x: 7, y: 13 }, { x: 8, y: 18 }, { x: 9, y: 20 }, { x: 10, y: 17 }
        ]
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        fill: {
          type: 'gradient',
          gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100]
            },
        },
        yaxis: {
          labels: {
              style: {
                  colors: '#8e8da4',
              },
              offsetX: 0,
              formatter: function(val) {
                return (val / 1000000).toFixed(2);
              },
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false
          }
        },
        xaxis: {
          type: 'datetime',
          tickAmount: 8,
          // min: new Date("02/07/2018").getTime(),
          // max: new Date("03/20/2018").getTime(),
          min: 1,
          max: 20,
          labels: {
              rotate: -15,
              rotateAlways: true,
              formatter: function(val, timestamp) {
                // return moment(new Date(timestamp)).format("DD MMM YY")
                return val
            }
          }
        },
        title: {
          text: 'Irregular Data in Time Series',
          align: 'left',
          offsetX: 14
        },
        tooltip: {
          shared: true
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetX: -10
        }
      },
    };
  }


  render() {
    return (
      <div id="chart">
      <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}

export default Timeseries;