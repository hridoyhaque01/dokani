import React from "react";
import RequestLoader from "../../components/loaders/RequestLoader";
import { useSendResetPasswordEmailMutation } from "../../features/auth/authApi";
import NotifyContainer, { errorNotify, infoNotify } from "../../util/getNotify";

const ForgetPasword = () => {
  const [sendResetPasswordEmail, { isLoading }] =
    useSendResetPasswordEmailMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const formData = new FormData();
    formData.append("data", JSON.stringify({ email }));

    sendResetPasswordEmail(formData)
      .unwrap()
      .then((res) => {
        infoNotify("Successfully send request");
        event.target.reset();
      })
      .catch((error) => {
        errorNotify("Failed to send request");
      });
  };

  return (
    <section className="h-screen bg-authBg bg-no-repeat bg-cover bg-whiteSemi w-full px-6">
      <div className="w-full h-full px-6 flex items-center justify-center overflow-hidden ">
        <div className="">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mt-2">
              Forgot Password
            </h1>
          </div>

          <div className=" w-[30rem] max-w-[30rem] py-12 px-10 rounded-lg bg-white shadow-md mx-auto">
            <form
              className="flex flex-col w-full gap-4 "
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-1">
                <span className="text-blackHigh">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  name="email"
                  className={`w-full border border-slateLow  rounded-lg outline-none p-4`}
                />
              </div>
              <button
                className="py-4 normal-case mt-4 mb-6 rounded-lg bg-primaryColor text-white font-semibold"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {isLoading && <RequestLoader></RequestLoader>}
        <div>
          <NotifyContainer></NotifyContainer>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasword;
