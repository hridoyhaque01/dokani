import React, { useState } from "react";
import { Link } from "react-router-dom";
import { product1 } from "../../assets/getAssets";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
import ActiveProductsTable from "../../components/tables/activeProducts/ActiveProductsTable";

function ActiveProducts() {
  const isLoading = false;
  const isError = false;
  const data = [
    {
      _id: 1,
      fileUrl: product1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      timestamp: 1696468268,
    },
    {
      _id: 2,
      fileUrl: product1,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      timestamp: 1696468269,
    },
    {
      _id: 3,
      fileUrl: product1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      inventoryTwo: 30,
      buyingPriceTwo: 200,
      sellingPriceTwo: 250,
      timestamp: 1696468270,
    },
    {
      _id: 4,
      fileUrl: product1,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      inventoryTwo: 30,
      buyingPriceTwo: 200,
      sellingPriceTwo: 250,
      timestamp: 1696468271,
    },
    {
      _id: 5,
      fileUrl: product1,
      name: "Eva Williams",
      email: "eva.williams@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      inventoryTwo: 30,
      buyingPriceTwo: 200,
      sellingPriceTwo: 250,
      timestamp: 1696468272,
    },
    {
      _id: 6,
      fileUrl: product1,
      name: "Michael Davis",
      email: "michael.davis@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      timestamp: 1696468273,
    },
    {
      _id: 7,
      fileUrl: product1,
      name: "Olivia Wilson",
      email: "olivia.wilson@example.com",
      phone: 223448632,
      veriant: "250g",
      Lot: "L1",
      inventory: 45,
      buyingPrice: 250,
      sellingPrice: 300,
      inventoryTwo: 30,
      buyingPriceTwo: 200,
      sellingPriceTwo: 250,
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
      content = <ActiveProductsTable data={newData}></ActiveProductsTable>;
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
          title="Active Products"
          subtitle="All products with the inventory"
          value={searchValue}
          onChange={onChange}
        >
          <div>
            <Link
              to="/add-product"
              className="flex items-center gap-2 bg-primaryColor max-w-max rounded-full text-white p-2.5 font-semibold"
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
              <span>Add Product</span>
            </Link>
          </div>
        </SearchBar>

        <div className="h-[calc(100%-108px)]">{content}</div>
      </div>
    </section>
  );
}

export default ActiveProducts;
