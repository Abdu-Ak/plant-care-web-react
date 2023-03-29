import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

function PieChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
    });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div ref={chartRef}></div>;
}

export default PieChart;