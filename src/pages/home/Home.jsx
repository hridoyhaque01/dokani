import React, { useState } from "react";
import Charts from "../../components/Charts/Charts";
import Card from "../../components/shared/cards/Card";

export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Products",
      number: 21,
      background: "bg-secondaryColor",
      svgBg: "bg-errorHigh",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.3"
            d="M5 19H19V5H5V19ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z"
            fill="white"
          />
          <path
            d="M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM19 19H5V5H19V19Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Total Sales",
      number: 55,
      background: "bg-orangeLight",
      svgBg: "bg-orangeColor",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4.47192 6H6.47192V7C6.47192 8.1 7.37192 9 8.47192 9H14.4719C15.5719 9 16.4719 8.1 16.4719 7V6H18.4719V11H20.4719V6C20.4719 4.9 19.5719 4 18.4719 4H14.2919C13.8719 2.84 12.7719 2 11.4719 2C10.1719 2 9.07192 2.84 8.65192 4H4.47192C3.37192 4 2.47192 4.9 2.47192 6V20C2.47192 21.1 3.37192 22 4.47192 22H10.4719V20H4.47192V6ZM11.4719 4C12.0219 4 12.4719 4.45 12.4719 5C12.4719 5.55 12.0219 6 11.4719 6C10.9219 6 10.4719 5.55 10.4719 5C10.4719 4.45 10.9219 4 11.4719 4Z"
            fill="white"
          />
          <path
            d="M21.2219 13.25C20.8119 12.84 20.1319 12.84 19.7219 13.25L14.9819 18L12.7219 15.75C12.3119 15.34 11.6419 15.34 11.2219 15.75C10.8119 16.16 10.8119 16.84 11.2219 17.25L14.2719 20.29C14.6619 20.68 15.2919 20.68 15.6819 20.29L21.2119 14.75C21.6319 14.34 21.6319 13.66 21.2219 13.25Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Revenue",
      number: 200,
      background: "bg-infoLight",
      svgBg: "bg-infoHigh",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V18.67C13.41 19.4 12.81 20 12.08 20H12.07C11.34 20 10.74 19.4 10.74 18.67V18.07C9.41 17.79 8.23 17.06 7.73 15.83C7.5 15.28 7.93 14.67 8.53 14.67H8.77C9.14 14.67 9.44 14.92 9.58 15.27C9.87 16.02 10.63 16.54 12.09 16.54C14.05 16.54 14.49 15.56 14.49 14.95C14.49 14.12 14.05 13.34 11.82 12.81C9.34 12.21 7.64 11.19 7.64 9.14C7.64 7.42 9.03 6.3 10.75 5.93V5.33C10.75 4.6 11.35 4 12.08 4H12.09C12.82 4 13.42 4.6 13.42 5.33V5.95C14.8 6.29 15.67 7.15 16.05 8.21C16.25 8.76 15.83 9.34 15.24 9.34H14.98C14.61 9.34 14.31 9.08 14.21 8.72C13.98 7.96 13.35 7.47 12.09 7.47C10.59 7.47 9.69 8.15 9.69 9.11C9.69 9.95 10.34 10.5 12.36 11.02C14.38 11.54 16.54 12.41 16.54 14.93C16.52 16.76 15.15 17.76 13.41 18.09Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Returns",
      number: 4,
      background: "bg-successLight",
      svgBg: "bg-successColor",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 15H16V11H12V8L7 13L12 18V15ZM19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C4.86 4 4.73 4.01 4.6 4.04C4.21 4.12 3.86 4.32 3.59 4.59C3.41 4.77 3.26 4.99 3.16 5.23C3.06 5.46 3 5.72 3 6V20C3 20.27 3.06 20.54 3.16 20.78C3.26 21.02 3.41 21.23 3.59 21.42C3.86 21.69 4.21 21.89 4.6 21.97C4.73 21.99 4.86 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 3.75C12.41 3.75 12.75 4.09 12.75 4.5C12.75 4.91 12.41 5.25 12 5.25C11.59 5.25 11.25 4.91 11.25 4.5C11.25 4.09 11.59 3.75 12 3.75ZM19 20H5V6H19V20Z"
            fill="white"
          />
        </svg>
      ),
    },
  ]);
  return (
    <section className="h-full relative overflow-auto p-6">
      <div className="flex flex-col gap-8">
        {/* cards  */}
        <div className="w-full bg-white p-6 rounded-2xl">
          {/* title  */}
          <div>
            <h4 className="text-[20px] text-blackHigh font-bold">Dashboard</h4>
            <p className="mt-2 text-">A glance about your business</p>

            <div className="grid grid-cols-4 items-stretch gap-8 mt-12">
              {/* card one  */}
              {data?.map((item, i) => (
                <Card data={item} key={i}></Card>
              ))}
            </div>
          </div>

          {/* charts  */}
        </div>

        <div className="">
          <Charts></Charts>
        </div>
      </div>
    </section>
  );
}
