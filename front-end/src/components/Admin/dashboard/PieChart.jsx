import { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";
import axios from '../../../axios/AdminAxios';



function PieChart() {
  const chartRef = useRef(null);


  const [data ,setData ] = useState({})
 

  useEffect(() => {
    axios.get( '/admin/getDashboard').then((res)=>{
      setData(res.data)
  })
  }, [])




  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, {
      series: [data.userCount, data.premiumCount, data.postCount, data.diaryCount],
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
      labels: ["users", "premium users", "posts", "diaries"],
    });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div ref={chartRef}></div>;
}

export default PieChart;