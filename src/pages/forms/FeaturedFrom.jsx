import React, { useState } from "react";
import { avatar } from "../../assets/getAssets";
import SearchLoader from "../../components/loaders/SearchLoader";
import FeaturedCards from "../../components/shared/cards/FeaturedCards";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import SomethingWrong from "../../components/shared/ui/SomethingWrong";

function FeaturedFrom() {
  const isLoading = false;
  const isError = false;
  const [data, setData] = useState([
    {
      id: 1,
      fileUrl: avatar,
      name: "Mahhen Hasan",
      email: "example@email.com",
      points: 50,
      category: "Nature",
      timestamp: 1691027717,
      isTrending: false,
      downloaded: 12,
    },
    {
      id: 2,
      fileUrl: avatar,
      name: "Tusar Ahmed",
      email: "example@email.com",
      points: 40,
      category: "Nature",
      timestamp: 1693700791,
      isTrending: true,
      downloaded: 7,
    },
    {
      id: 3,
      fileUrl: avatar,
      name: "John Doe",
      email: "example@email.com",
      points: 55,
      category: "Nature",
      timestamp: 1694501234,
      isTrending: false,
      downloaded: 10,
    },
    {
      id: 4,
      fileUrl: avatar,
      name: "Jane Smith",
      email: "example@email.com",
      points: 62,
      category: "Nature",
      timestamp: 1695123456,
      isTrending: true,
      downloaded: 18,
    },
    {
      id: 5,
      fileUrl: avatar,
      name: "Alex Johnson",
      email: "example@email.com",
      points: 48,
      category: "Nature",
      timestamp: 1696012345,
      isTrending: false,
      downloaded: 15,
    },
    {
      id: 6,
      fileUrl: avatar,
      name: "Emily Davis",
      email: "example@email.com",
      points: 37,
      category: "Nature",
      timestamp: 1697023456,
      isTrending: false,
      downloaded: 9,
    },
    {
      id: 7,
      fileUrl: avatar,
      name: "Michael Wilson",
      email: "example@email.com",
      points: 43,
      category: "Nature",
      timestamp: 1698009876,
      isTrending: true,
      downloaded: 11,
    },
    {
      id: 8,
      fileUrl: avatar,
      name: "Olivia Brown",
      email: "example@email.com",
      points: 57,
      category: "Nature",
      timestamp: 1699123456,
      isTrending: false,
      downloaded: 14,
    },
    {
      id: 9,
      fileUrl: avatar,
      name: "William Lee",
      email: "example@email.com",
      points: 49,
      category: "Nature",
      timestamp: 1700023456,
      isTrending: false,
      downloaded: 16,
    },
    {
      id: 10,
      fileUrl: avatar,
      name: "Sophia Taylor",
      email: "example@email.com",
      points: 58,
      category: "Nature",
      timestamp: 1700890123,
      isTrending: true,
      downloaded: 13,
    },
    {
      id: 11,
      fileUrl: avatar,
      name: "Ethan Anderson",
      email: "example@email.com",
      points: 61,
      category: "Nature",
      timestamp: 1701754321,
      isTrending: false,
      downloaded: 20,
    },
    {
      id: 12,
      fileUrl: avatar,
      name: "Ava Martin",
      email: "example@email.com",
      points: 46,
      category: "Nature",
      timestamp: 1702876543,
      isTrending: true,
      downloaded: 17,
    },
    {
      id: 13,
      fileUrl: avatar,
      name: "Liam Garcia",
      email: "example@email.com",
      points: 52,
      category: "Nature",
      timestamp: 1703123456,
      isTrending: true,
      downloaded: 8,
    },
    {
      id: 14,
      fileUrl: avatar,
      name: "Mia Hernandez",
      email: "example@email.com",
      points: 39,
      category: "Nature",
      timestamp: 1704012345,
      isTrending: false,
      downloaded: 12,
    },
    {
      id: 15,
      fileUrl: avatar,
      name: "Noah Martinez",
      email: "example@email.com",
      points: 53,
      category: "Nature",
      timestamp: 1705123456,
      isTrending: false,
      downloaded: 11,
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const toggleState = (id) => {
    const updatedData = data?.map((item) => {
      if (item?.id === id) {
        return {
          ...item,
          isTrending: !item?.isTrending,
        };
      } else {
        return item;
      }
    });

    setData(updatedData);
  };

  const sortByTime = (a, b) => {
    return b.timestamp - a.timestamp;
  };

  const filterByTrending = (data) => {
    return !data?.isTrending;
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
    const newData = [...data]
      ?.filter(filterByTrending)
      .sort(sortByTime)
      ?.filter(filterBySearch);
    content = (
      <FeaturedCards data={newData} handler={toggleState}></FeaturedCards>
    );
  }
  return (
    <section className="h-full w-full overflow-auto px-4 md:px-6 py-6">
      <div className="bg-themeMid shadow-sm w-full h-full rounded-2xl overflow-hidden">
        <SearchBar
          title="Featured Add"
          path="/featured-add"
          value={searchValue}
          onChange={onChange}
          isNotAddable={true}
        ></SearchBar>
        <div className="h-[calc(100%-75px)] overflow-auto flex flex-col justify-between flex-wrap">
          {content}
        </div>
      </div>
    </section>
  );
}

export default FeaturedFrom;
