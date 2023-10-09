import React from "react";

function Card({ data }) {
  const { background, svgBg, number, title, svg } = data || {};
  return (
    <div className={`p-6 ${background} rounded-2xl`}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${svgBg}`}
      >
        {svg}
      </div>
      <div className="mt-6">
        <p className="text-2xl font-bold text-blackHigh">{number}</p>
        <p className="font-poppins font-medium text-blackSemi">{title}</p>
      </div>
    </div>
  );
}

export default Card;
