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
  const [status, setStatus] = useState("");
  const [currentObj, setCurrentObj] = useState({});


  const handleItem = (item, itemStatus) => {
    setStatus(itemStatus);
    setCurrentObj(item);
  };

  const handler = () => {
    if (status === "pause") {
      const data = {
        status: "paused",
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      updateItem({ id: currentObj?._id, data: formData })
        .unwrap()
        .then((res) => {
          infoNotify("Successfully update item");
        })
        .catch((error) => {
          errorNotify("Failed to update item");
        });
    } else if (status === "delete") {
      deleteItem(currentObj?._id)
        .unwrap()
        .then((res) => {
          infoNotify("Successfully delete item");
        })
        .catch((error) => {
          errorNotify("Failed to delete item");
        });
    }
  };

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
                      src={product?.imageUrl}
                      alt=""
                      className="w-10 h-10 rounded object-cover bg-center"
                    />
                  </td>
                  <td className="py-3 max-w-[200]">{product?.name}</td>
                  <td className="py-3">{product?.variant}</td>
                  <td className="py-3">{product?.quantity}</td>
                  <td className="py-3">${product?.buyingPrice}</td>
                  <td className="py-3">${product?.sellingPrice}</td>
                  <td className="py-3 flex items-center justify-center gap-3">
                    <label
                      htmlFor="confirmationPopup"
                      className="cursor-pointer"
                      onClick={() => handleItem(product, "delete")}
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
                    </label>
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
      <ConfirmationModal
        title="Product"
        status={status}
        handleStatus={handler}
      ></ConfirmationModal>
    </div>
  );
}

export default PausedProductsTable;
