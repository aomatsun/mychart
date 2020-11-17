import React from "react";

import { withStyles } from "@material-ui/core/styles";
// import myIcon from '@/assets/my-icon.svg'
import myIcon from './favicon.png'

const styles = theme => ({
    "chart-container": {
        width: 960,
        height: 400
    }
});


var Chart = require("chart.js");
Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";
var pointRadius=[];


// LineChart
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidUpdate() {
      this.myChart.update();
    }

    componentDidMount() {

        var chartPoint  = new Image()
        chartPoint.src = myIcon;


        var imageData = {
          labels: ['one', 'two', 'three', 'four'],
          datasets: [{
            label: 'Label1',
            // pointRadius: [10, 10, 10, 10],
            // pointRadius: pointRadius,
            // pointHoverRadius: 20,
            // pointHitRadius: 20,
            // pointStyle: [chartPoint , 'triangle', 'triangle', 'circle'],
            // pointStyle: chartPoint,
            pointStyle: ['', '', '', chartPoint],
            pointBackgroundColor: "rgba(0,191,255)",
            data: [1.5, 2.5, 3, 2.5]
          }]
        }
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'line',
            data: imageData,
            options: {}
        });
        for(var i=0;i<this.myChart.data.datasets[0].data.length;i++){
          pointRadius.push(0);
        }      
    }

    render() {
        return <canvas ref={this.canvasRef} height="200"/>;
    }
}

class MyChart extends React.Component {
 
  componentDidMount() {
 
  }

  componentWillUnmount() {
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes["chart-container"]}>
        <LineChart
          color="#3E517A"
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MyChart);
