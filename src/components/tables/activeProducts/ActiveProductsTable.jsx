import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Pagination } from "../../shared/pagination/Pagination";
import NoData from "../../shared/ui/NoData";

function ActiveProductsTable({ data }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  const handleNavigate = (item) => {
    navigate("/edit-product", {
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
              <th className="bg-fadeLow text-base normal-case py-5">Image</th>
              <th className="bg-fadeLow text-base normal-case py-5">Name</th>
              <th className="bg-fadeLow text-base normal-case py-5">Variant</th>
              <th className="bg-fadeLow text-base normal-case py-5">Lot</th>
              <th className="bg-fadeLow text-base normal-case py-5 ">
                Inventory
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">
                Buy Price
              </th>
              <th className="bg-fadeLow text-base normal-case py-5">
                Sale Price
              </th>
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
              {currentRows?.map((product, i) => (
                <tr className=" bg-white " key={i}>
                  <td className="py-3">
                    <img
                      src={product?.fileUrl}
                      alt=""
                      className="w-10 h-10 rounded object-cover bg-center"
                    />
                  </td>
                  <td className="py-3 max-w-[200]">{product?.name}</td>
                  <td className="py-3">{product?.veriant}</td>
                  <td className="py-3">{product?.Lot}</td>
                  <td className="py-3">{product?.inventory}</td>
                  <td className="py-3">${product?.buyingPrice}</td>
                  <td className="py-3">${product?.sellingPrice}</td>
                  <td className="py-3 flex items-center justify-center gap-3">
                    <label
                      htmlFor="confirmationPopup"
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM18 4H15.5L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4Z"
                          fill="#FF5858"
                        />
                      </svg>
                    </label>
                    <label
                      htmlFor="confirmationPopup"
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        <path
                          d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM17.5 13H7.5V11H17.5V13Z"
                          fill="#797979"
                        />
                      </svg>
                    </label>
                    <button
                      type="button"
                      onClick={() => handleNavigate(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.0585 9.02L14.9785 9.94L5.91854 19H4.99854V18.08L14.0585 9.02ZM17.6585 3C17.4085 3 17.1485 3.1 16.9585 3.29L15.1285 5.12L18.8785 8.87L20.7085 7.04C21.0985 6.65 21.0985 6.02 20.7085 5.63L18.3685 3.29C18.1685 3.09 17.9185 3 17.6585 3ZM14.0585 6.19L2.99854 17.25V21H6.74854L17.8085 9.94L14.0585 6.19Z"
                          fill="#FF9F43"
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
        </div>
      )}
      <ConfirmationModal title="product"></ConfirmationModal>
    </div>
  );
}

export default ActiveProductsTable;
