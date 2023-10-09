import { Select } from "antd";
import React, { useState } from "react";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
import SalesTable from "../../components/tables/sales/SalesTable";

function Sales() {
  const isLoading = false;
  const isError = false;
  const data = [
    {
      _id: "D55241106",
      salesPerson: "John Smith",
      customer: "Alice Johnson",
      status: "returned",
      timestamp: 1696468287,
      quantity: 5,
      method: "bank",
      amount: 100,
    },
    {
      _id: "D55241126",
      salesPerson: "Jane Doe",
      customer: "Bob Brown",
      status: "verified",
      timestamp: 1696468290,
      quantity: 3,
      method: "Paypal",
      amount: 50,
    },
    {
      _id: "D55241216",
      salesPerson: "Eva Williams",
      customer: "David Martin",
      status: "returned",
      timestamp: 1696468295,
      quantity: 7,
      method: "bank",
      amount: 150,
    },
    {
      _id: "D55241136",
      salesPerson: "Michael Davis",
      customer: "Olivia Wilson",
      status: "verified",
      timestamp: 1696468300,
      quantity: 2,
      method: "Paypal",
      amount: 30,
    },
    {
      _id: "D55241146",
      salesPerson: "William Lee",
      customer: "Sophia Clark",
      status: "returned",
      timestamp: 1696468305,
      quantity: 4,
      method: "bank",
      amount: 80,
    },
    {
      _id: "D55241156",
      salesPerson: "James Anderson",
      customer: "Linda Hernandez",
      status: "verified",
      timestamp: 1696468310,
      quantity: 6,
      method: "Paypal",
      amount: 70,
    },
    {
      _id: "D55241166",
      salesPerson: "Ava Taylor",
      customer: "Robert White",
      status: "returned",
      timestamp: 1696468315,
      quantity: 8,
      method: "bank",
      amount: 200,
    },
  ];

  const filterBySearch = (data) => {
    if (searchValue.trim().length > 0) {
      return data?.salesPerson
        ?.toLowerCase()
        .startsWith(searchValue?.toLowerCase());
    } else {
      return true;
    }
  };

  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  let content = null;

  if (isLoading) {
    content = <SearchLoader></SearchLoader>;
  } else if (!isLoading && isError) {
    content = <SomethingWrong></SomethingWrong>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <NoData></NoData>;
  } else if (!isLoading && !isError && data?.length > 0) {
    const newData = [...data]?.filter(filterBySearch);
    if (newData?.length > 0) {
      content = <SalesTable data={newData}></SalesTable>;
    } else {
      content = (
        <div className="bg-whiteLow h-full rounded-b-2xl">
          <NoData></NoData>
        </div>
      );
    }
  }

  return (
    <section className="h-full overflow-auto p-6">
      <div className="rounded-2xl h-full">
        <div className="bg-white rounded-t-2xl">
          <SearchBar
            title="Sales Person"
            subtitle="All products with the inventory"
            value={searchValue}
            onChange={onChange}
          ></SearchBar>
          <div className="grid grid-cols-3 gap-6 ml-6 pb-6">
            <div>
              <Select
                className="w-full border border-slateLow rounded-lg outline-none adSetting"
                aria-required
                defaultValue="all"
              >
                <Select.Option value="all">All Sales</Select.Option>
                <Select.Option value="bestSales">Best Sales</Select.Option>
              </Select>
            </div>
            <div>
              <Select
                className="w-full border border-slateLow rounded-lg outline-none adSetting"
                aria-required
                defaultValue="today"
              >
                <Select.Option value="today">Today</Select.Option>
                <Select.Option value="prevWeek">Previous week</Select.Option>
                <Select.Option value="prevMonth">Previous Month</Select.Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="h-[calc(100%-190px)]">{content}</div>
      </div>
    </section>
  );
}

export default Sales;
