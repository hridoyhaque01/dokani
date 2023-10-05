import React from "react";

function SearchBar({ title, subtitle, value, onChange, children }) {
  return (
    <div className="p-6 flex items-center justify-between bg-white rounded-t-2xl">
      <div className="font-lato">
        <h2 className="text-xl text-blackHigh font-bold">{title}</h2>
        <p className="text-blackSemi mt-2">{subtitle}</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="border border-slateReg w-[320px] rounded-lg flex items-center gap-2 px-2">
          <label htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="#707D9B"
              />
              <path
                d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
                fill="#707D9B"
              />
            </svg>
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="text-sm text-black placeholder:text-blackLow font-poppins outline-none w-full py-3 bg-transparent"
            value={value}
            onChange={(e) => onChange(e)}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default SearchBar;
