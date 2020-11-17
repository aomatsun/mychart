import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 2000;

class SplineAreaChart extends Component {
	constructor() {
		super();

		this.state = {
			index: 0
		};
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		this.setState({
			index: xVal
		});
		xVal++;
		if (xVal > 20) {
			xVal = 1;
			dps = [{x: xVal,y: yVal}];
		}
		// if (dps.length >  10 ) {
		// 	dps.shift();
		// }
		// this.chart.render();
	}
/*	
				dataPoints: [
					{ x: new Date(2008, 0), y: 70.735 },
					{ x: new Date(2009, 0), y: 74.102 },
					{ x: new Date(2010, 0), y: 72.569 },
					{ x: new Date(2011, 0), y: 72.743 },
					{ x: new Date(2012, 0), y: 72.381 },
					{ x: new Date(2013, 0), y: 71.406 },
					{ x: new Date(2014, 0), y: 73.163 },
					{ x: new Date(2015, 0), y: 74.270 },
					{ x: new Date(2016, 0), y: 72.525 },
					{ x: new Date(2017, 0), y: 73.121 }
				]
				*/
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Nuclear Electricity Generation in US"
			},
			axisX: {
				minimum: 1,
				maximum: 30,
				labels: {
                        rotate: -15,
                        rotateAlways: true,
                        formatter: function (val, timestamp) {
                            // return moment(new Date(timestamp)).format("DD MMM YY")
                            return val
                        }
                }
			},
			axisY: {
				title: "Net Generation (in Billion kWh)",
				includeZero: false,
				suffix: " kWh"
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "YYYY",
				yValueFormatString: "#,##0.## bn kW⋅h",
				showInLegend: true,
				legendText: "kWh = one kilowatt hour",
				dataPoints : dps
			}]
		}
		
		return (
		<div>
			<h1>React Spline Area Chart</h1>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineAreaChart;