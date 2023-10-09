import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Pagination } from "../../shared/pagination/Pagination";
import NoData from "../../shared/ui/NoData";

function SalesTable({ data }) {
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
        <table className="table w-full table-pin-rows table-pin-cols rounded-b-2xl">
          <thead className=" p-0">
            <tr className="font-bold text-3xl text-blackHigh font-lato">
              <th className="bg-fadeLow text-base normal-case py-5">
                Sales ID
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">
                Sales Person
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">
                Customer
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">Status</th>
              <th className="bg-fadeLow text-base normal-case py-5">Date</th>
              <th className="bg-fadeLow text-base normal-case py-5">Qty</th>
              <th className="bg-fadeLow text-base normal-case py-5">
                Paid via
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">Amount</th>
              <th className="bg-fadeLow text-base normal-case py-5 text-center">
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
            <tbody className="font-lato text-blackSemi">
              {currentRows?.map((sales, i) => (
                <tr className=" bg-white text-blackSemi" key={i}>
                  <td className="py-3 text-blueSemi font-semibold">
                    {sales?._id}
                  </td>
                  <td className="py-3">{sales?.salesPerson}</td>
                  <td className="py-3">{sales?.customer}</td>
                  <td className="py-3">{sales?.status}</td>
                  <td className="py-3">
                    {new Date(sales?.timestamp * 1000).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                  <td className="py-3">{sales?.quantity}</td>
                  <td className="py-3">{sales?.method}</td>
                  <td className="py-3">{sales?.amount}</td>

                  <td className="py-3 flex items-center justify-center gap-3">
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M17.8003 2H7.80029C6.70029 2 5.80029 2.9 5.80029 4V6C5.80029 7.1 6.70029 8 7.80029 8H17.8003C18.9003 8 19.8003 7.1 19.8003 6V4C19.8003 2.9 18.9003 2 17.8003 2ZM17.8003 6H7.80029V4H17.8003V6ZM20.8003 22H4.80029C3.70029 22 2.80029 21.1 2.80029 20V19H22.8003V20C22.8003 21.1 21.9003 22 20.8003 22ZM19.3303 10.19C19.0103 9.47 18.2903 9 17.5003 9H8.10029C7.31029 9 6.59029 9.47 6.27029 10.19L2.80029 18H22.8003L19.3303 10.19ZM10.3003 16H9.30029C9.02029 16 8.80029 15.78 8.80029 15.5C8.80029 15.22 9.02029 15 9.30029 15H10.3003C10.5803 15 10.8003 15.22 10.8003 15.5C10.8003 15.78 10.5803 16 10.3003 16ZM10.3003 14H9.30029C9.02029 14 8.80029 13.78 8.80029 13.5C8.80029 13.22 9.02029 13 9.30029 13H10.3003C10.5803 13 10.8003 13.22 10.8003 13.5C10.8003 13.78 10.5803 14 10.3003 14ZM10.3003 12H9.30029C9.02029 12 8.80029 11.78 8.80029 11.5C8.80029 11.22 9.02029 11 9.30029 11H10.3003C10.5803 11 10.8003 11.22 10.8003 11.5C10.8003 11.78 10.5803 12 10.3003 12ZM13.3003 16H12.3003C12.0203 16 11.8003 15.78 11.8003 15.5C11.8003 15.22 12.0203 15 12.3003 15H13.3003C13.5803 15 13.8003 15.22 13.8003 15.5C13.8003 15.78 13.5803 16 13.3003 16ZM13.3003 14H12.3003C12.0203 14 11.8003 13.78 11.8003 13.5C11.8003 13.22 12.0203 13 12.3003 13H13.3003C13.5803 13 13.8003 13.22 13.8003 13.5C13.8003 13.78 13.5803 14 13.3003 14ZM13.3003 12H12.3003C12.0203 12 11.8003 11.78 11.8003 11.5C11.8003 11.22 12.0203 11 12.3003 11H13.3003C13.5803 11 13.8003 11.22 13.8003 11.5C13.8003 11.78 13.5803 12 13.3003 12ZM16.3003 16H15.3003C15.0203 16 14.8003 15.78 14.8003 15.5C14.8003 15.22 15.0203 15 15.3003 15H16.3003C16.5803 15 16.8003 15.22 16.8003 15.5C16.8003 15.78 16.5803 16 16.3003 16ZM16.3003 14H15.3003C15.0203 14 14.8003 13.78 14.8003 13.5C14.8003 13.22 15.0203 13 15.3003 13H16.3003C16.5803 13 16.8003 13.22 16.8003 13.5C16.8003 13.78 16.5803 14 16.3003 14ZM16.3003 12H15.3003C15.0203 12 14.8003 11.78 14.8003 11.5C14.8003 11.22 15.0203 11 15.3003 11H16.3003C16.5803 11 16.8003 11.22 16.8003 11.5C16.8003 11.78 16.5803 12 16.3003 12Z"
                          fill="#797979"
                        />
                      </svg>
                    </button>
                    <button type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M19.8003 8H5.80029C4.14029 8 2.80029 9.34 2.80029 11V15C2.80029 16.1 3.70029 17 4.80029 17H6.80029V19C6.80029 20.1 7.70029 21 8.80029 21H16.8003C17.9003 21 18.8003 20.1 18.8003 19V17H20.8003C21.9003 17 22.8003 16.1 22.8003 15V11C22.8003 9.34 21.4603 8 19.8003 8ZM15.8003 19H9.80029C9.25029 19 8.80029 18.55 8.80029 18V14H16.8003V18C16.8003 18.55 16.3503 19 15.8003 19ZM19.8003 12C19.2503 12 18.8003 11.55 18.8003 11C18.8003 10.45 19.2503 10 19.8003 10C20.3503 10 20.8003 10.45 20.8003 11C20.8003 11.55 20.3503 12 19.8003 12ZM17.8003 3H7.80029C7.25029 3 6.80029 3.45 6.80029 4V6C6.80029 6.55 7.25029 7 7.80029 7H17.8003C18.3503 7 18.8003 6.55 18.8003 6V4C18.8003 3.45 18.3503 3 17.8003 3Z"
                          fill="#797979"
                        />
                      </svg>
                    </button>
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
          <ConfirmationModal title="sales"></ConfirmationModal>
        </div>
      )}
    </div>
  );
}

export default SalesTable;
