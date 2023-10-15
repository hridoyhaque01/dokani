import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RequestLoader from "../../../components/loaders/RequestLoader";
import BackToPrev from "../../../components/shared/back/BackToPrev";
import PasswordInput from "../../../components/shared/ui/PasswordInput";
import { useUpdateSellerMutation } from "../../../features/sellers/sellersApi";
import checkStrong from "../../../util/CheckStrong";
import NotifyContainer, { errorNotify } from "../../../util/getNotify";
import showPassword from "../../../util/showPassword";

function UpdateSalesPerson() {
  const [updateSeller, { isLoading }] = useUpdateSellerMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowConfirmIcon, setIsShowConfirmIcon] = useState(false);
  const [isStrong, setIsStrong] = useState(false);
  const { state } = useLocation();
  const { payload } = state || {};
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form?.password?.value;
    const confirmPassword = form?.confirmPassword?.value;

    const data = {
      name,
      email,
    };

    if (password) {
      if (password !== confirmPassword) {
        errorNotify("Password does not match");
        return;
      } else {
        data.password = password;
      }
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    updateSeller({ id: payload?._id, data: formData })
      .unwrap()
      .then((res) => {
        navigate("/sales-person");
      })
      .catch((error) => {
        errorNotify("Failed to update seller");
      });
  };

  return (
    <section className="py-6 px-8">
      <div>
        <BackToPrev
          path="/sales-person"
          title={`Update Sales Person`}
        ></BackToPrev>

        <div className="bg-white p-6 rounded-2xl">
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-x-10 gap-y-6">
              {/* name */}
              <div className="flex flex-col gap-1 text-blackHigh">
                <span>Name</span>
                <input
                  type="text"
                  className="p-4 border border-slateLow rounded-lg outline-none"
                  placeholder="Enter full name"
                  required
                  name="name"
                  defaultValue={payload?.name}
                />
              </div>
              {/* name */}
              <div className="flex flex-col gap-1 text-blackHigh">
                <span>Email</span>
                <input
                  type="email"
                  className="p-4 border border-slateLow rounded-lg outline-none"
                  placeholder="Enter email"
                  required
                  name="email"
                  defaultValue={payload?.email}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Password</span>
                <div>
                  <PasswordInput
                    isShowPassword={isShowPassword}
                    setIsShowPassword={setIsShowPassword}
                    isShowIcon={isShowIcon}
                    onInput={(e) => checkStrong(setIsShowIcon, setIsStrong, e)}
                    name="password"
                    placeholder={"Enter your password"}
                  ></PasswordInput>
                  {isShowIcon && !isStrong && (
                    <p className="text-xs text-fadeColor mt-1">
                      Must contain more than 7 character with uppercase,
                      lowercase, symble and number
                    </p>
                  )}
                </div>
              </div>
              {/* Password */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Re-Enter Password</span>
                <PasswordInput
                  isShowPassword={isShowConfirmPassword}
                  setIsShowPassword={setIsShowConfirmPassword}
                  isShowIcon={isShowConfirmIcon}
                  onInput={(e) => showPassword(setIsShowConfirmIcon, e)}
                  name="confirmPassword"
                  placeholder={"Re-Enter your password"}
                ></PasswordInput>
              </div>
            </div>
            {/* submit button  */}
            <div className="mt-8">
              <button
                className=" w-[200px] bg-primaryColor hover:bg-primaryColor py-4 px-10 rounded-lg text-white font-semibold"
                disabled={isShowIcon && !isStrong}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <NotifyContainer></NotifyContainer>
      {isLoading && <RequestLoader></RequestLoader>}
    </section>
  );
}

export default UpdateSalesPerson;
