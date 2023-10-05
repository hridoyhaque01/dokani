import React, { useState } from "react";
import { product1 } from "../../assets/getAssets";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
import CustomersTable from "../../components/tables/customers/CustomersTable";

function Customers() {
  const isLoading = false;
  const isError = false;
  const data = [
    {
      Id: 1,
      fileUrl: product1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: 223448632,
      timestamp: 1696468268,
    },
    {
      Id: 2,
      fileUrl: product1,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: 223448632,
      timestamp: 1696468269,
    },
    {
      Id: 3,
      fileUrl: product1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: 223448632,
      timestamp: 1696468270,
    },
    {
      Id: 4,
      fileUrl: product1,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: 223448632,
      timestamp: 1696468271,
    },
    {
      Id: 5,
      fileUrl: product1,
      name: "Eva Williams",
      email: "eva.williams@example.com",
      phone: 223448632,
      timestamp: 1696468272,
    },
    {
      Id: 6,
      fileUrl: product1,
      name: "Michael Davis",
      email: "michael.davis@example.com",
      phone: 223448632,
      timestamp: 1696468273,
    },
    {
      Id: 7,
      fileUrl: product1,
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      phone: 223448632,
      timestamp: 1696468274,
    },
  ];

  const filterBySearch = (data) => {
    if (searchValue.trim().length > 0) {
      return data?.name?.toLowerCase().includes(searchValue?.toLowerCase());
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
      content = <CustomersTable data={newData}></CustomersTable>;
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
        <SearchBar
          title="Customers"
          subtitle="Product description along with customer info"
          value={searchValue}
          onChange={onChange}
        ></SearchBar>

        <div className="h-[calc(100%-108px)]">{content}</div>
      </div>
    </section>
  );
}

export default Customers;
