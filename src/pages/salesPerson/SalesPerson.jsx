import React, { useState } from "react";
import { Link } from "react-router-dom";
import { product1 } from "../../assets/getAssets";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
import SalesmanTable from "../../components/tables/salesPerson/SalesmanTable";

function SalesPerson() {
  const isLoading = false;
  const isError = false;
  const data = [
    {
      Id: 1,
      fileUrl: product1,
      name: "John Doe",
      email: "john.doe@example.com",
      timestamp: 1696468268,
    },
    {
      Id: 2,
      fileUrl: product1,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      timestamp: 1696468269,
    },
    {
      Id: 3,
      fileUrl: product1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      timestamp: 1696468270,
    },
    {
      Id: 4,
      fileUrl: product1,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      timestamp: 1696468271,
    },
    {
      Id: 5,
      fileUrl: product1,
      name: "Eva Williams",
      email: "eva.williams@example.com",
      timestamp: 1696468272,
    },
    {
      Id: 6,
      fileUrl: product1,
      name: "Michael Davis",
      email: "michael.davis@example.com",
      timestamp: 1696468273,
    },
    {
      Id: 7,
      fileUrl: product1,
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      timestamp: 1696468274,
    },
    {
      Id: 8,
      fileUrl: product1,
      name: "William Lee",
      email: "william.lee@example.com",
      timestamp: 1696468275,
    },
    {
      Id: 9,
      fileUrl: product1,
      name: "Sophia Clark",
      email: "sophia.clark@example.com",
      timestamp: 1696468276,
    },
    {
      Id: 10,
      fileUrl: product1,
      name: "James Anderson",
      email: "james.anderson@example.com",
      timestamp: 1696468277,
    },
    {
      Id: 11,
      fileUrl: product1,
      name: "Linda Hernandez",
      email: "linda.hernandez@example.com",
      timestamp: 1696468278,
    },
    {
      Id: 12,
      fileUrl: product1,
      name: "David Martin",
      email: "david.martin@example.com",
      timestamp: 1696468279,
    },
    {
      Id: 13,
      fileUrl: product1,
      name: "Ava Taylor",
      email: "ava.taylor@example.com",
      timestamp: 1696468280,
    },
    {
      Id: 14,
      fileUrl: product1,
      name: "Robert White",
      email: "robert.white@example.com",
      timestamp: 1696468281,
    },
    {
      Id: 15,
      fileUrl: product1,
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
      timestamp: 1696468282,
    },
    {
      Id: 16,
      fileUrl: product1,
      name: "Joseph Harris",
      email: "joseph.harris@example.com",
      timestamp: 1696468283,
    },
    {
      Id: 17,
      fileUrl: product1,
      name: "Mia Rodriguez",
      email: "mia.rodriguez@example.com",
      timestamp: 1696468284,
    },
    {
      Id: 18,
      fileUrl: product1,
      name: "Charles Lewis",
      email: "charles.lewis@example.com",
      timestamp: 1696468285,
    },
    {
      Id: 19,
      fileUrl: product1,
      name: "Sophia Martinez",
      email: "sophia.martinez@example.com",
      timestamp: 1696468286,
    },
    {
      Id: 20,
      fileUrl: product1,
      name: "Daniel Hall",
      email: "daniel.hall@example.com",
      timestamp: 1696468287,
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
      content = <SalesmanTable data={newData}></SalesmanTable>;
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
          title="Sales Person"
          subtitle="All products with the inventory"
          value={searchValue}
          onChange={onChange}
        >
          <div>
            <Link
              to="/add-sales-person"
              className="flex items-center gap-2 bg-primaryColor max-w-max rounded-full text-white py-2.5 px-4 font-semibold"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Add</span>
            </Link>
          </div>
        </SearchBar>

        <div className="h-[calc(100%-108px)]">{content}</div>
      </div>
    </section>
  );
}

export default SalesPerson;
