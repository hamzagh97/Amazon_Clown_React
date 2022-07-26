import React from "react";
import "./Chart.css";
import ChartItem from "./ChartItem";

function Chart(props) {
  const maxValueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...maxValueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartItem
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
