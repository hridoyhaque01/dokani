import React from "react";

const HistoryModal = ({ items }) => {
  return (
    <section>
      <input type="checkbox" id="historyPopup" className="modal-toggle" />
      <label
        htmlFor="historyPopup"
        className="modal modal-bottom sm:modal-middle bg-black-70"
      >
        <div className="w-full max-w-[600px] flex flex-col gap-4 bg-white p-6 rounded-2xl relative z-50">
          <div>
            <h2 className="text-xl text-blackHigh font-bold">
              Inventory history
            </h2>
            <p className="text-blackSemi mt-2">
              Here all the previous inventory history will be found
            </p>
          </div>

          {/* table content  */}
          <div>
            <table className="table w-full table-pin-rows table-pin-cols">
              <thead className=" p-0">
                <tr className="font-bold text-3xl text-blackHigh font-lato">
                  <th className="bg-fadeLow text-base normal-case py-5">
                    Image
                  </th>
                  <th className="bg-fadeLow text-base normal-case py-5">
                    Product Name
                  </th>
                  <th className="bg-fadeLow text-base normal-case py-5 ">
                    Inventory
                  </th>
                  <th className="bg-fadeLow text-base normal-case py-5">
                    Buy Price
                  </th>
                  <th className="bg-fadeLow text-base normal-case py-5">
                    Sale Price
                  </th>
                </tr>
              </thead>
              {items?.previous?.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="10" className="">
                      <NoData></NoData>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody className="font-lato text-blackSemi">
                  {items?.previous?.map((product, i) => (
                    <tr className=" bg-white " key={i}>
                      <td className="py-3">
                        <img
                          src={product?.fileUrl}
                          alt=""
                          className="w-10 h-10 rounded object-cover bg-center"
                        />
                      </td>
                      <td className="py-3 max-w-[200px]">{product?.name}</td>
                      <td className="py-3">{product?.inventory}</td>
                      <td className="py-3">{product?.buyingPrice}</td>
                      <td className="py-3">{product?.sellingPrice}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </label>
    </section>
  );
};

export default HistoryModal;
