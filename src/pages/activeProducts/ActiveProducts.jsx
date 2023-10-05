import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/shared/searchbar/SearchBar";

function ActiveProducts() {
  return (
    <section className="h-full overflow-auto p-6">
      <div className="bg-white rounded-2xl">
        <SearchBar
          title="Active Products"
          subtitle="All products with the inventory"
        >
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 bg-primaryColor max-w-max rounded-full text-white p-2.5 font-semibold"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span>Add Product</span>
            </Link>
          </div>
        </SearchBar>
      </div>
    </section>
  );
}

export default ActiveProducts;
