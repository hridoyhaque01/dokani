import { Select } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NotificationForm() {
  const [selectedUser, setSelectedUser] = useState("all");

  const handleChange = (value) => {
    setSelectedUser(value);
  };
  return (
    <section className="px-8 py-6 h-full overflow-auto">
      <div className="mb-5">
        <Link to="/notification" className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M22.9862 12C22.9862 12.552 22.5392 13 21.9862 13H6.40021L11.6932 18.293C12.0842 18.684 12.0842 19.3161 11.6932 19.7071C11.4982 19.9021 11.2422 20 10.9862 20C10.7302 20 10.4741 19.9021 10.2791 19.7071L3.2801 12.708C3.1871 12.615 3.11405 12.5051 3.06305 12.3821C2.96205 12.1381 2.96205 11.862 3.06305 11.618C3.11405 11.495 3.1871 11.385 3.2801 11.292L10.2791 4.29301C10.6701 3.90201 11.3022 3.90201 11.6932 4.29301C12.0842 4.68401 12.0842 5.31607 11.6932 5.70707L6.40021 11H21.9862C22.5392 11 22.9862 11.448 22.9862 12Z"
              fill="#25314C"
            />
          </svg>
          <span className="text-blackHigh font-bold text-xl">
            Select Notification
          </span>
        </Link>
      </div>
      <div className="bg-white p-6 rounded-2xl">
        <div>
          <h4 className="text-xl font-bold text-blackHigh">
            Send Notification
          </h4>
        </div>
        <div className="mt-6">
          <form action="">
            <div className="grid grid-cols-3 gap-x-10 gap-y-6">
              {/* Title */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Title</span>
                <input
                  type="text"
                  placeholder="Title here"
                  required
                  name="title"
                  className={`w-full border border-slateLow rounded-lg outline-none p-4`}
                />
              </div>
              {/* Message */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Message</span>
                <input
                  type="text"
                  placeholder="Message body here"
                  required
                  name="message"
                  className={`w-full border border-slateLow rounded-lg outline-none p-4`}
                />
              </div>
              {/* user */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Primary Ad Network:</span>
                <div className="w-full">
                  <Select
                    className="w-full border border-slateLow rounded-lg outline-none adSetting"
                    defaultValue={selectedUser}
                    onChange={handleChange}
                    aria-required
                  >
                    <Select.Option value="all">All</Select.Option>
                    <Select.Option value="custom">Custom</Select.Option>
                  </Select>
                </div>
              </div>
              {/* image  */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Image</span>
                <div className="w-full relative">
                  <input
                    type="file"
                    id="imageId"
                    className="absolute opacity-0 invisible"
                    //   className="border border-slateLow px-2 py-[9px] w-full rounded-lg outline-none"
                  />
                  <label
                    htmlFor="imageId"
                    className="flex items-center gap-2 py-[9px] px-2 border border-slateLow rounded-lg cursor-pointer"
                  >
                    <span className="inline-block px-4 py-2 bg-fadeColor text-white text-sm rounded-lg">
                      Chose File
                    </span>
                    <span className="text-xs text-blackSemi">Upload Image</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className={`btn w-52 h-14 bg-primaryColor text-white hover:bg-primaryColor hover:text-white capitalize`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NotificationForm;
