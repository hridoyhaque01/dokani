import React, { useState } from "react";
import { Link } from "react-router-dom";
import { product1 } from "../../assets/getAssets";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
import SalesmanTable from "../../components/tables/salesPerson/SalesmanTable";
import { useGetAllSellersQuery } from "../../features/sellers/sellersApi";

function SalesPerson() {

  const {data,isLoading,isError} = useGetAllSellersQuery()

  const filterBySearch = (data) => {
    if (searchValue.trim().length > 0) {
      return data?.name?.toLowerCase().startsWith(searchValue?.toLowerCase());
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
