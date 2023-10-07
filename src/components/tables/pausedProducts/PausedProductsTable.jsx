import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../modals/ConfirmationModal";
import { Pagination } from "../../shared/pagination/Pagination";
import NoData from "../../shared/ui/NoData";

function PausedProductsTable({ data }) {
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
                    <button
                      type="button"
                      // onClick={() => handleNavigate(product)}
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
                          fill="#FF5858"
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

export default PausedProductsTable;
