import React, { useState } from "react";
import BackToPrev from "../../../components/shared/back/BackToPrev";
import PasswordInput from "../../../components/shared/ui/PasswordInput";
import NotifyContainer, { errorNotify } from "../../../util/getNotify";
import showPassword from "../../../util/showPassword";

function AddSalesPerson() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowConfirmIcon, setIsShowConfirmIcon] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      errorNotify("Password does not match");
      return;
    }

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(data);
  };

  return (
    <section className="py-6 px-8">
      <div>
        <BackToPrev
          path="/sales-person"
          title={`Add Sales Person`}
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
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Password</span>
                <PasswordInput
                  isShowPassword={isShowPassword}
                  setIsShowPassword={setIsShowPassword}
                  isShowIcon={isShowIcon}
                  onInput={(e) => showPassword(setIsShowIcon, e)}
                  name="password"
                  placeholder={"Enter your password"}
                  required
                ></PasswordInput>
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
                  required
                ></PasswordInput>
              </div>
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

export default AddSalesPerson;
