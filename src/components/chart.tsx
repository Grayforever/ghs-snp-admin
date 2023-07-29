import ReactApexChart from "react-apexcharts";
import theme from "../theme";

const chartData = {
  options: {
    fill: {
      colors: [theme.palette.primary.main],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },

  series: [
    {
      data: [10, 3, 5, 2, 8, 4, 6, 9, 11, 12, 1, 7],
    },
  ],
};

const Chart = () => {
  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type={"bar"}
      width={"100%"}
      height={"100%"}
    />
  );
};
export default Chart;
