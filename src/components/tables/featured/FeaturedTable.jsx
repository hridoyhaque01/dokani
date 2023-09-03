import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Pagination } from "../../shared/pagination/Pagination";

function FeaturedTable({ data }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);
  const [selectedItems, setSelectedItems] = useState(null);

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

  const handleSelectCheckbox = (item, e) => {
    const selectedItemList = [...selectedItems];
    if (e?.target?.checked) {
      selectedItemList?.push(item?._id);
    } else {
      const index = selectedItemList?.indexOf(item?._id);
      if (index !== -1) {
        selectedItemList?.splice(index, 1);
      }
    }
    setSelectedItems(selectedItemList);
  };

  const handleNavigate = (item) => {
    navigate("/customer-edit", {
      state: {
        payload: item,
        type: "edit",
      },
    });
  };

  return (
    <div className="h-full overflow-auto flex flex-col items-end justify-between gap-4 select-none">
      <table className="table w-full">
        <thead className=" p-0">
          <tr className="font-bold  text-3xl text-blackHigh">
            <th className="bg-themeSemi text-base normal-case flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-error rounded border-blackSemi hover:border-blackSemi"
                onChange={(e) => handleSelectAllCheckbox(currentRows, e)}
                checked={selectedItems?.length > 0 ? true : false}
              />
              <span>Sl.</span>
            </th>
            <th className="bg-themeSemi text-base normal-case p-2">Image</th>
            <th className="bg-themeSemi text-base normal-case">User Name</th>
            <th className="bg-themeSemi text-base normal-case">Email</th>
            <th className="bg-themeSemi text-base normal-case">Category</th>
            <th className="bg-themeSemi text-base normal-case">Date</th>
            <th className="bg-themeSemi text-base normal-case text-center">
              Actions
            </th>
          </tr>
        </thead>
        {currentRows?.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan="6" className="">
                "noData"
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="">
            {currentRows?.map((request, i) => (
              <tr className=" bg-white text-blackSemi" key={i}>
                <td className="py-3 flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-error rounded border-blackSemi hover:border-blackSemi"
                    checked={
                      selectedItems?.includes(request?.id) || request?.status
                        ? true
                        : false
                    }
                    onChange={(e) => handleSelectCheckbox(request, e)}
                  />
                  <span>
                    {currentPage === 1 && i + 1 < 10
                      ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                      : rowsPerPage * (currentPage - 1) + i + 1}
                  </span>
                </td>
                <td className="py-3">
                  <img
                    src={request?.fileUrl}
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />
                </td>
                <td className="py-3">{request?.name}</td>
                <td className="py-3">{request?.email}</td>
                <td className="py-3">{request?.category}</td>
                <td className="py-3">
                  {new Date(request?.timestamp * 1000).toLocaleDateString(
                    "en-US"
                  )}
                </td>
                <td className="py-3 flex items-center justify-center gap-4">
                  <label htmlFor="confirmationPopup" className="cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.49 7.80863V7.81V16.19C21.49 17.9106 20.9791 19.2238 20.0964 20.1064C19.2138 20.9891 17.9006 21.5 16.18 21.5H7.81C6.08945 21.5 4.77634 20.9891 3.89377 20.1054C3.01114 19.2217 2.5 17.9059 2.5 16.18V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9107 2.5 19.2237 3.01097 20.105 3.89333C20.9861 4.77559 21.4947 6.08838 21.49 7.80863ZM15.7136 15.7136C16.1988 15.2283 16.1988 14.4317 15.7136 13.9464L13.7671 12L15.7136 10.0536C16.1988 9.56829 16.1988 8.77171 15.7136 8.28645C15.2283 7.80118 14.4317 7.80118 13.9464 8.28645L12 10.2329L10.0536 8.28645C9.56829 7.80118 8.77171 7.80118 8.28645 8.28645C7.80118 8.77171 7.80118 9.56829 8.28645 10.0536L10.2329 12L8.28645 13.9464C7.80118 14.4317 7.80118 15.2283 8.28645 15.7136C8.53516 15.9623 8.85455 16.08 9.17 16.08C9.48545 16.08 9.80484 15.9623 10.0536 15.7136L12 13.7671L13.9464 15.7136C14.1952 15.9623 14.5145 16.08 14.83 16.08C15.1455 16.08 15.4648 15.9623 15.7136 15.7136Z"
                        fill="#FF6B6B"
                        stroke="#FF6B6B"
                      />
                    </svg>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      <div className="w-full">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalRows={data?.length}
        ></Pagination>
        <ConfirmationModal title="wallpaper request"></ConfirmationModal>
      </div>
    </div>
  );
}

export default FeaturedTable;
