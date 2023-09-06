import React, { useEffect, useState } from "react";
import { avatar } from "../../assets/getAssets";
import SearchLoader from "../../components/loaders/SearchLoader";
import BackToPrev from "../../components/shared/back/BackToPrev";
import SearchBar from "../../components/shared/searchbar/SearchBar";
import NoData from "../../components/shared/ui/NoData";
import NotificationUsersTable from "../../components/tables/notificationUser/NotificationUsersTable";
import NotificationForm from "../forms/NotificationForm";

function NotificationAdd() {
  const [selectedUser, setSelectedUser] = useState("all");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (value) => {
    setSelectedUser(value);
  };

  const isLoading = false;
  const isError = false;
  const [data, setData] = useState([
    {
      id: 1,
      fileUrl: avatar,
      name: "Mahhen Hasan",
      email: "example@email.com",
      points: 50,
      uploads: 12,
      timestamp: 1691027717,
      gender: "male",
      birthdate: 1693979939,
    },
    {
      id: 2,
      fileUrl: avatar,
      name: "Tusar Ahmed",
      email: "example@email.com",
      points: 40,
      uploads: 7,
      timestamp: 1693700791,
      gender: "male",
      birthdate: 1693979939,
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

  const handleSelectAllCheckbox = (items, e) => {
    const selectedItemList = [];
    if (e?.target?.checked) {
      items?.map((item) => {
        return selectedItemList?.push(item?.id);
      });
    } else {
      setSelectedItems([]);
    }
    setSelectedItems(selectedItemList);
  };

  const handleAllCheckbox = (items) => {
    const selectedItemList = items?.map((item) => item?.id);
    setSelectedItems(selectedItemList);
  };

  const handleSelectCheckbox = (item, e) => {
    const selectedItemList = [...selectedItems];
    if (e?.target?.checked) {
      selectedItemList?.push(item?.id);
    } else {
      const index = selectedItemList?.indexOf(item?.id);
      if (index !== -1) {
        selectedItemList?.splice(index, 1);
      }
    }
    setSelectedItems(selectedItemList);
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
    content = (
      <NotificationUsersTable
        data={newData}
        handleSelectAllCheckbox={handleSelectAllCheckbox}
        handleSelectCheckbox={handleSelectCheckbox}
        selectedItems={selectedItems}
        selectedUser={selectedUser}
      ></NotificationUsersTable>
    );
  }

  useEffect(() => {
    if (selectedUser === "all") {
      handleAllCheckbox(data);
    } else {
      setSelectedItems([]);
    }
  }, [selectedUser]);

  return (
    <section className="px-8 py-6 h-full overflow-auto">
      <BackToPrev path="/notification" title="Select Notification"></BackToPrev>

      <div className="bg-white p-6 rounded-2xl">
        <div>
          <h4 className="text-xl font-bold text-blackHigh">
            Send Notification
          </h4>
        </div>
        <div className="mt-6">
          <NotificationForm
            selectedUser={selectedUser}
            handleChange={handleChange}
          ></NotificationForm>
        </div>
      </div>
      <div className="bg-themeMid shadow-sm w-full h-full rounded-2xl overflow-hidden mt-6">
        <SearchBar
          title="Users"
          path="/sales-add"
          value={searchValue}
          onChange={onChange}
          isNotAddable={true}
        ></SearchBar>
        <div className="h-[calc(100%-78px)]">{content}</div>
      </div>
    </section>
  );
}

export default NotificationAdd;
