import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RequestLoader from "../../components/loaders/RequestLoader";
import PasswordInput from "../../components/shared/ui/PasswordInput";
import { useAdminResetPasswordMutation } from "../../features/auth/authApi";
import checkStrong from "../../util/CheckStrong";
import NotifyContainer, { errorNotify } from "../../util/getNotify";

function AdminReset() {
  const [adminResetPassword, { isLoading }] = useAdminResetPasswordMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowIcon, setIsShowIcon] = useState(false);
  const [isStrong, setIsStrong] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowConfirmIcon, setIsShowConfirmIcon] = useState(false);
  const navigate = useNavigate();
  const handleInputTwo = (event) => {
    setIsShowConfirmIcon(event.target.value.trim().length > 0);
  };
  const { email } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;
    if (newPassword !== confirmPassword) {
      errorNotify("Password doesn't match");
      return;
    }
    const data = {
      email: email,
      newPassword,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    adminResetPassword(formData)
      .unwrap()
      .then((res) => {
        if (res?.modifiedCount === 1) {
          navigate("/login");
          form.reset();
        } else {
          errorNotify("Password update failed");
        }
      })
      .catch((error) => {
        errorNotify("Password update failed");
      });
  };

  return (
    <section className="min-h-screen w-full bg-authBg bg-cover bg-center object-cover flex items-center justify-center overflow-auto px-6">
      <div className="w-[30rem] max-w-[30rem] py-12 px-10 rounded-lg bg-whiteHigh shadow-md mx-auto">
        <div className="w-full max-w-[400px] mx-auto ">
          <div className="text-center">
            <div className="text-center flex items-center justify-center lg:text-left mb-6"></div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mt-2">
              Reset Password
            </h1>
          </div>

          <form action="" className="w-full mt-10" onSubmit={handleSubmit}>
            {/* NEW PASSWORD  */}

            <div className="flex flex-col gap-1">
              <span className="text-blackHigh">New Password</span>
              <div className="w-full">
                <PasswordInput
                  isShowPassword={isShowPassword}
                  setIsShowPassword={setIsShowPassword}
                  isShowIcon={isShowIcon}
                  onInput={(e) => checkStrong(setIsShowIcon, setIsStrong, e)}
                  name="newPassword"
                  placeholder={"Enter new password"}
                ></PasswordInput>
                {!isStrong && (
                  <p className="text-[10px] text-fadeColor md:mt-1">
                    Must contain more than 7 character with uppercase,
                    lowercase, symble and number
                  </p>
                )}
              </div>
            </div>
            {/* CONFIRM PASSWORD  */}

            <div className="flex flex-col gap-1 mt-6">
              <span className="text-blackHigh">Confirm Password</span>
              <div className="w-full">
                <PasswordInput
                  isShowPassword={isShowConfirmPassword}
                  setIsShowPassword={setIsShowConfirmPassword}
                  isShowIcon={isShowConfirmIcon}
                  onInput={(e) => handleInputTwo(e)}
                  name="confirmPassword"
                  placeholder={"Confirm password"}
                ></PasswordInput>
              </div>
            </div>
            <div className="mt-8 w-full">
              <button
                className="py-4 normal-case mt-4 mb-6 w-full rounded-lg bg-primaryColor text-white font-semibold"
                type="submit"
                disabled={!isStrong}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <RequestLoader></RequestLoader>}
      <div>
        <NotifyContainer></NotifyContainer>
      </div>
    </section>
  );
}

export default AdminReset;
