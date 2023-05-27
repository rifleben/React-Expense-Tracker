import React from "react";
import Chart from "../Chart/Chart";


const ExpensesChart = (props) => {

    const chartDataPoints = [];
    

    return (
        <Chart dataPoints={props.dataPoints} />
    )
}

export default ExpensesChart;