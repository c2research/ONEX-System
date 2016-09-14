var React = require('react');
var ReactDOM = require('react-dom');


// require `react-d3-core` for Chart component, which help us build a blank svg and chart title.
var Chart = require('react-d3-core').Chart;
// require `react-d3-basic` for Line chart component.
var LineChart = require('react-d3-basic').LineChart;

var Legend = require('react-d3-core').Legend;
var Xaxis = require('react-d3-core').Xaxis;
var Yaxis = require('react-d3-core').Yaxis;
var Line = require('react-d3-basic').Line;
var Xgrid = require('react-d3-core').Xgrid;
var Ygrid = require('react-d3-core').Ygrid;


/**
 * This is a prototype for an initial view
 */
var InsightView = React.createClass({
   render: function() {

     //TODO: incorporate answer
     //var data =//this.props.result;
     var chartData = this.props.qValues;

     var margins = {left: 35, right: 35, top: 35, bottom: 35};
     var title = this.props.qSeq != null ? "Query" + this.props.qSeq : "No Query Chosen";

      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line

      // your x accessor
      var x = function(d) {
       return d.index;
      }

      var chartSeries = [
      {
         field: 'value',
         color: '#ff7f0e',
         legend: false,
         style: {
           "strokeWidth": 2,
           "strokeOpacity": 1,
           "fillOpacity": 0.5
         }
        }
      ];

    var legendJSX = <Legend
        width= {this.props.width}
        chartSeries = {chartSeries}
        swatchShape= 'circle'
        legendPosition = 'right'
        offset = '200'
      />;

    var
       xLabel = "Data",
       yLabel = "Time",
       yTicks = [0.1],
       yDomain = [0, 1.0];

     console.log("length: ", chartData.length, this.props.width);

     var d3JSX = chartData != null ? <LineChart
       margins={margins}
       title={title}
       yDomain={yDomain}
       width= {this.props.width - 100}
       height= {this.props.height}
       data= {chartData}
       chartSeries= {chartSeries}
       x= {x}
     /> : null;


     return <div className="containerD3">{d3JSX}</div>
   }
});

module.exports = InsightView;
