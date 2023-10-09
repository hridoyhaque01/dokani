import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import BackToPrev from "../../../components/shared/back/BackToPrev";
import NotifyContainer from "../../../util/getNotify";

function EditProduct() {
  const [isAddInventory, setIsAddInventory] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [file, setFile] = useState(null);
  const [typeError, setTypeError] = useState(false);
  const fileRef = useRef();
  const { state } = useLocation();
  const { payload } = state || {};

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (
      file?.type === "image/jpg" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/png"
    ) {
      setFile(file);
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
      setTypeError(false);
    } else {
      setFile("");
      setImagePreview("");
      setTypeError(true);
      fileRef.current.value = "";
    }
  };

  const handleFileDelete = () => {
    setImagePreview(null);
    setFile(null);
    setTypeError(false);
    fileRef.current.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form?.productName?.value;
    const variant = form?.variant?.value;
    const inventoryOne = form?.inventory?.value;
    const buyingPrice = form?.buyingPrice?.value;
    const sellingPrice = form?.sellingPrice?.value;
    const inventoryTwo = form?.inventoryTwo?.value;
    const buyingPriceTwo = form?.buyingPriceTwo?.value;
    const sellingPriceTwo = form?.sellingPriceTwo?.value;

    const data = {
      productName,
      variant,
      inventoryOne,
      buyingPrice,
      sellingPrice,
    };

    if (isAddInventory) {
      data.inventoryTwo = inventoryTwo;
      data.buyingPriceTwo = buyingPriceTwo;
      data.sellingPriceTwo = sellingPriceTwo;
    }
  };

  useEffect(() => {
    if (payload?._id) {
      setImagePreview(payload?.fileUrl);
    }
  }, [payload?._id, payload?.fileUrl]);

  useEffect(() => {
    if (payload?.inventoryTwo) {
      setIsAddInventory(true);
    }
  }, [payload?.inventoryTwo, payload?.fileUrl]);

  return (
    <section className="py-6 px-8">
      <div>
        <BackToPrev
          path="/active-products"
          title={`Update Products`}
        ></BackToPrev>

        <div className="bg-white p-6 rounded-2xl">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-x-10">
                {/* image  */}
                <div className="flex flex-col gap-1">
                  <span className="text-blackHigh">Image</span>
                  <div>
                    <div className="w-full relative">
                      <input
                        type="file"
                        id="imageId"
                        className="absolute opacity-0"
                        onChange={(e) => handleFileChange(e)}
                        required
                        ref={fileRef}
                        //   className="border border-slateLow px-2 py-[9px] w-full rounded-lg outline-none"
                      />
                      <label
                        htmlFor="imageId"
                        className="flex items-center gap-2 py-[10px] px-2 border border-slateLow rounded-lg cursor-pointer"
                      >
                        <span className="inline-block px-4 py-2 bg-fadeColor text-white text-sm rounded-lg">
                          Chose File
                        </span>
                        <span className="text-xs text-blackSemi">
                          Upload Image
                        </span>
                      </label>
                    </div>
                    {typeError && (
                      <p className="text-xs text-errorColor mt-1 font-medium">
                        Only JPG, JPEG or PNG file are supported
                      </p>
                    )}
                  </div>
                </div>
                {/* image preview */}
                {imagePreview && (
                  <div className="flex flex-col gap-1">
                    <span className="text-blackHigh">Image Preview</span>
                    <div className="w-full border border-slateLow rounded-lg outline-none p-2 flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 overflow-hidden">
                        <img
                          src={imagePreview}
                          alt=""
                          className="w-10 h-10 rounded-sm bg-center object-cover"
                        />
                        <p className="text-blackSemi text-base">
                          {file?.name?.length > 35
                            ? file?.name?.slice(0, 35) + "..."
                            : file?.name}
                        </p>
                      </div>
                      <div>
                        <button
                          className="flex items-center justify-center"
                          onClick={handleFileDelete}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21.49 7.80863V7.81V16.19C21.49 17.9106 20.9791 19.2238 20.0964 20.1064C19.2138 20.9891 17.9006 21.5 16.18 21.5H7.81C6.08945 21.5 4.77634 20.9891 3.89377 20.1054C3.01114 19.2217 2.5 17.9059 2.5 16.18V7.81C2.5 6.08944 3.01093 4.77618 3.89355 3.89355C4.77618 3.01093 6.08944 2.5 7.81 2.5H16.19C17.9107 2.5 19.2237 3.01097 20.105 3.89333C20.9861 4.77559 21.4947 6.08838 21.49 7.80863ZM15.7136 15.7136C16.1988 15.2283 16.1988 14.4317 15.7136 13.9464L13.7671 12L15.7136 10.0536C16.1988 9.56829 16.1988 8.77171 15.7136 8.28645C15.2283 7.80118 14.4317 7.80118 13.9464 8.28645L12 10.2329L10.0536 8.28645C9.56829 7.80118 8.77171 7.80118 8.28645 8.28645C7.80118 8.77171 7.80118 9.56829 8.28645 10.0536L10.2329 12L8.28645 13.9464C7.80118 14.4317 7.80118 15.2283 8.28645 15.7136C8.53516 15.9623 8.85455 16.08 9.17 16.08C9.48545 16.08 9.80484 15.9623 10.0536 15.7136L12 13.7671L13.9464 15.7136C14.1952 15.9623 14.5145 16.08 14.83 16.08C15.1455 16.08 15.4648 15.9623 15.7136 15.7136Z"
                              fill="#FF6B6B"
                              stroke="#FF6B6B"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-x-10">
                {/* product name */}

                <div className="flex flex-col gap-1 text-blackHigh">
                  <span>Product Name</span>
                  <input
                    type="text"
                    className="p-4 border border-slateLow rounded-lg outline-none"
                    placeholder="Enter product name"
                    required
                    name="productName"
                    defaultValue={payload?.name}
                  />
                </div>
                {/* product variant */}
                <div className="flex flex-col gap-1 text-blackHigh">
                  <span>Variant</span>
                  <input
                    type="text"
                    className="p-4 border border-slateLow rounded-lg outline-none"
                    placeholder="Enter product variant"
                    required
                    name="variant"
                    defaultValue={payload?.veriant}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-x-10">
                {/* inventory */}

                <div className="flex flex-col gap-1 text-blackHigh">
                  <span>Inventory</span>
                  <input
                    type="number"
                    className="p-4 border border-slateLow rounded-lg outline-none"
                    placeholder="Enter inventory"
                    required
                    name="inventory"
                    defaultValue={payload?.inventory}
                  />
                </div>

                {/* Buying Price */}
                <div className="flex flex-col gap-1 text-blackHigh">
                  <span>Buying Price</span>
                  <input
                    type="number"
                    className="p-4 border border-slateLow rounded-lg outline-none appearance-none"
                    placeholder="Enter buying price"
                    required
                    name="buyingPrice"
                    defaultValue={payload?.buyingPrice}
                  />
                </div>

                {/* Selling Price */}
                <div className="flex flex-col gap-1 text-blackHigh">
                  <span>Selling Price</span>
                  <input
                    type="number"
                    className="p-4 border border-slateLow rounded-lg outline-none appearance-none"
                    placeholder="Enter selling price"
                    required
                    name="sellingPrice"
                    defaultValue={payload?.sellingPrice}
                  />
                </div>

                {!isAddInventory && (
                  <div>
                    <button
                      onClick={() => setIsAddInventory(true)}
                      type="button"
                      className="mt-4 text-primaryColor font-poppins"
                    >
                      Add another inventory
                    </button>
                  </div>
                )}
              </div>

              {/* second inventory  */}

              {isAddInventory && (
                <div className="grid grid-cols-3 gap-x-10 border-t border-slateReg pt-4">
                  {/* inventory two */}
                  <div className="flex flex-col gap-1 text-blackHigh">
                    <span>Inventory 2</span>
                    <input
                      type="number"
                      className="p-4 border border-slateLow rounded-lg outline-none"
                      placeholder="Enter inventory"
                      required
                      name="inventoryTwo"
                      defaultValue={payload?.inventoryTwo}
                    />
                  </div>
                  {/* Buying Price two  */}
                  <div className="flex flex-col gap-1 text-blackHigh">
                    <span>Buying Price</span>
                    <input
                      type="number"
                      className="p-4 border border-slateLow rounded-lg outline-none appearance-none"
                      placeholder="Enter buying price"
                      required
                      name="buyingPriceTwo"
                      defaultValue={payload?.buyingPriceTwo}
                    />
                  </div>
                  {/* Selling Price two  */}
                  <div className="flex flex-col gap-1 text-blackHigh">
                    <span>Selling Price</span>
                    <input
                      type="number"
                      className="p-4 border border-slateLow rounded-lg outline-none appearance-none"
                      placeholder="Enter selling price"
                      required
                      name="sellingPriceTwo"
                      defaultValue={payload?.sellingPriceTwo}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* submit button  */}
            <div className="mt-8">
              <button className=" w-[200px] bg-primaryColor hover:bg-primaryColor py-4 px-10 rounded-lg text-white font-semibold">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <NotifyContainer></NotifyContainer>
    </section>
  );
}

export default EditProduct;
