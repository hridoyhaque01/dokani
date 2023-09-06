import React, { useState } from "react";
import SearchLoader from "../../components/loaders/SearchLoader";
import NoData from "../../components/shared/ui/NoData";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";
// import SalesTable from "../../components/tables/sales/SalesTable";
import { trophy } from "../../assets/getAssets";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NotificationTable from "../../components/tables/notification/NotificationTable";
function Notifications() {
  const isLoading = false;
  const isError = false;
  const [data, setData] = useState([
    {
      id: 1,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "pending",
      coins: 50,
      timestamp: 1693700791,
    },
    {
      id: 2,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "pending",
      coins: 40,
      timestamp: 1693700791,
    },
    {
      id: 3,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "active",
      coins: 60,
      timestamp: 1693700791,
    },
    {
      id: 4,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "pending",
      coins: 55,
      timestamp: 1693700791,
    },
    {
      id: 5,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "active",
      coins: 58,
      timestamp: 1693700791,
    },
    {
      id: 6,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "pending",
      coins: 50,
      timestamp: 1693700791,
    },
    {
      id: 7,
      fileUrl: trophy,
      title: "Winner Bird!",
      message: "You are a super player!",
      status: "pending",
      coins: 50,
      timestamp: 1693700791,
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
      return data?.title?.toLowerCase().includes(searchValue?.toLowerCase());
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
    content = <NotificationTable data={newData}></NotificationTable>;
  }

  return (
    <section className="h-full w-full px-4 md:px-6 py-6">
      <div className="bg-themeMid shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar
          title="Notifications History"
          path="/notification-add"
          value={searchValue}
          onChange={onChange}
        ></SearchBar>

        <div className="h-[calc(100%-78px)]">{content}</div>
      </div>
    </section>
  );
}

export default Notifications;
