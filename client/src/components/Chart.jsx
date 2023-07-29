import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Chart({ sparkline, priceChange }) {
  const [chartOptions] = useState({
    series: [{
      data: [...sparkline.price],
    }],
    chart: {
      type: 'area',
    //   height: 35,
      width:50, // Set the height of the chart here (adjust as needed)
      sparkline: { enabled: true },
      animations: { enabled: false }
    },
    tooltip: { enabled: false },
    stroke: { width: 1 },
    colors: [chartColor(priceChange)]
  });

  function chartColor(priceChange) {
    return priceChange <= 0 ? '#ff3131' : '#25df3e';
  }

  return (
    <ReactApexChart options={chartOptions} series={chartOptions.series} />
  );
}

export default Chart;
