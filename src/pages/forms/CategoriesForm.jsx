import React from "react";
import { useLocation } from "react-router-dom";
import BackToPrev from "../../components/shared/back/BackToPrev";

function CategoriesForm() {
  const { state } = useLocation();
  const { payload, type } = state || {};
  return (
    <section className="py-6 px-8">
      <div>
        <BackToPrev
          path="/categories"
          title={`${type === "edit" ? "Edit" : "Add"} Category`}
        ></BackToPrev>

        <div className="bg-white p-6 rounded-2xl">
          <form action="">
            <div className="">
              <div className="flex flex-col gap-1 text-blackHigh">
                <span>Name</span>
                <input
                  type="text"
                  className="p-4 border border-slateLow rounded-lg outline-none"
                  placeholder="Enter category name"
                  required
                  defaultValue={payload?.name}
                />
              </div>
            </div>
            {/* submit button  */}
            <div className="mt-6">
              <button className=" w-[200px] bg-primaryColor hover:bg-primaryColor py-4 px-10 rounded-lg text-white font-semibold">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CategoriesForm;
