import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApproveModal from "../../modals/ApproveModal";
import ConfirmationModal from "../../modals/ConfirmationModal";
import ViewModal from "../../modals/ViewModal";
import { Pagination } from "../../shared/pagination/Pagination";
import NoData from "../../shared/ui/NoData";

function NotificationTable({ data }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNavigate = (item) => {
    navigate("/category-edit", {
      state: {
        payload: item,
        type: "edit",
      },
    });
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className=" overflow-x-auto">
        <table className="table w-full table-pin-rows table-pin-cols">
          <thead className="px-0">
            <tr className="font-bold text-3xl text-blackHigh">
              <th className="bg-themeSemi text-base normal-case py-5">Sl.</th>
              <th className="bg-themeSemi text-base normal-case py-5">Image</th>
              <th className="bg-themeSemi text-base normal-case py-5">Title</th>
              <th className="bg-themeSemi text-base normal-case py-5">
                Message
              </th>
              <th className="bg-themeSemi text-base normal-case py-5">
                Date Sent
              </th>
              <th className="bg-themeSemi text-base normal-case py-5">Coins</th>
              <th className="bg-themeSemi text-base normal-case py-5 text-center">
                Actions
              </th>
            </tr>
          </thead>
          {currentRows?.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="10" className="">
                  <NoData></NoData>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody className="">
              {currentRows?.map((category, i) => (
                <tr className=" bg-white text-blackSemi" key={i}>
                  <td className="py-3">
                    {currentPage === 1 && i + 1 < 10
                      ? "0" + (rowsPerPage * (currentPage - 1) + i + 1)
                      : rowsPerPage * (currentPage - 1) + i + 1}
                  </td>

                  <td className="py-3">
                    <img src={category?.fileUrl} alt="" className="w-12 h-12" />
                  </td>
                  <td className="py-3">{category?.title}</td>
                  <td className="py-3">{category?.message}</td>
                  <td className="py-3">{category?.coins}</td>
                  <td className="py-3">
                    {new Date(category?.timestamp * 1000).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                  <td className="py-3 flex items-center justify-center gap-4">
                    <span
                      className={` ${
                        category?.status === "pending"
                          ? "bg-blueLight text-blueColor"
                          : "bg-successLow text-successMid"
                      }  text-sm py-1.5 px-2 rounded-md capitalize`}
                    >
                      {category?.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <div className="w-full">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalRows={data?.length}
        ></Pagination>
        <ConfirmationModal title="wallpaper request"></ConfirmationModal>
        <ApproveModal></ApproveModal>
        <ViewModal url={selectedImage}></ViewModal>
      </div>
    </div>
  );
}

export default NotificationTable;
