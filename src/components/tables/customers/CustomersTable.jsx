import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Pagination } from "../../shared/pagination/Pagination";
import NoData from "../../shared/ui/NoData";

function CustomersTable({ data }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  const handleNavigate = (item) => {
    navigate("/update-sales-person", {
      state: {
        payload: item,
      },
    });
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className=" overflow-x-auto">
        <table className="table w-full table-pin-rows table-pin-cols">
          <thead className=" p-0">
            <tr className="font-bold text-3xl text-blackHigh font-lato">
              <th className="bg-fadeLow text-base normal-case py-5">
                Customer Name
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">
                Phone Number
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">Date</th>
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
            <tbody className="font-lato text-blackSemi">
              {currentRows?.map((salesman, i) => (
                <tr className=" bg-white " key={i}>
                  <td className="py-3">{salesman?.name}</td>
                  <td className="py-3">{salesman?.phone}</td>
                  <td className="py-3">
                    {new Date(salesman?.timestamp * 1000).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {data?.length > 10 && (
        <div className="w-full">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            totalRows={data?.length}
          ></Pagination>
          <ConfirmationModal title="salesman"></ConfirmationModal>
        </div>
      )}
    </div>
  );
}

export default CustomersTable;
