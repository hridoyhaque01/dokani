import React, { useState } from "react";
import SearchLoader from "../../components/loaders/SearchLoader";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
// import SalesTable from "../../components/tables/sales/SalesTable";
import { avatar } from "../../assets/getAssets";
import CategoriesTable from "../../components/tables/categories/CategoriesTable";
function Categories() {
  const isLoading = false;
  const isError = false;
  const [data] = useState([
    {
      id: 1,
      fileUrl: avatar,
      name: "Random",
      email: "example@email.com",
      points: 50,
      category: "Nature",
      timestamp: 1691027717,
      downloaded: 40,
      wallpapers: 12,
    },
    {
      id: 2,
      fileUrl: avatar,
      name: "Featured",
      email: "example@email.com",
      points: 40,
      category: "Nature",
      timestamp: 1693700791,
      downloaded: 50,
      wallpapers: 7,
    },
  ]);
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const sortByTime = (a, b) => {
    return b.timestamp - a.timestamp;
  };

  const filterBySearch = (data) => {
    if (searchValue.trim().length > 0) {
      return data?.name?.toLowerCase().includes(searchValue?.toLowerCase());
    } else {
      return true;
    }
  };

  let content = null;

  if (isLoading) {
    content = <SearchLoader></SearchLoader>;
  } else if (!isLoading && isError) {
    content = <SomethingWrong></SomethingWrong>;
  } else if (!isLoading && !isError && data?.length === 0) {
    content = <NoData></NoData>;
  } else if (!isLoading && !isError && data?.length > 0) {
    const newData = [...data]?.sort(sortByTime)?.filter(filterBySearch);
    content = <CategoriesTable data={newData}></CategoriesTable>;
  }

  return (
    <section className="h-full w-full overflow-auto px-4 md:px-6 py-6">
      <div className="bg-themeMid shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar
          title="Categories"
          path="/category-add"
          value={searchValue}
          onChange={onChange}
        ></SearchBar>

        <div className="h-[calc(100%-75px)] overflow-auto flex flex-col justify-between flex-wrap">
          {content}
        </div>
      </div>
    </section>
  );
}

export default Categories;
