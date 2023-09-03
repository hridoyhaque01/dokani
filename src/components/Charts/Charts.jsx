import React from "react";
import ChartArea from "./ChartTypes/ChartArea";
import ChartLine from "./ChartTypes/ChartLine";

const Charts = () => {
  const data = [
    { name: "Feb", uv: 400, pv: 1100, amt: 1800 },
    { name: "Mar", uv: 200, pv: 1400, amt: 1300 },
    { name: "Apr", uv: 400, pv: 1500, amt: 1200 },
    { name: "May", uv: 100, pv: 1100, amt: 1900 },
    { name: "Jun", uv: 600, pv: 1200, amt: 1400 },
    { name: "Jul", uv: 300, pv: 1200, amt: 1900 },
    { name: "Aug", uv: 100, pv: 1700, amt: 1700 },
    { name: "Sep", uv: 800, pv: 1400, amt: 1100 },
    { name: "Oct", uv: 300, pv: 1600, amt: 1500 },
    { name: "Nov", uv: 100, pv: 1100, amt: 1700 },
    { name: "Dec", uv: 800, pv: 1400, amt: 1100 },
    { name: "Jan", uv: 200, pv: 1700, amt: 1500 },
  ];

  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 items-stretch justify-around gap-6">
      <div className="bg-whiteHigh rounded-xl">
        <ChartArea data={data} title="New Users"></ChartArea>
      </div>
      {/* <div className="bg-whiteHigh rounded-xl p-4 md:p-6">
        <ChartBar data={data} title="cards.totalProfit"></ChartBar>
      </div> */}
      <div className="bg-whiteHigh rounded-xl">
        <ChartLine data={data} title="New Wallpapers"></ChartLine>
      </div>
    </section>
  );
};

export default Charts;