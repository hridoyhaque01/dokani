import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <section className="h-screen bg-authBg bg-bottom bg-no-repeat bg-cover bg-whiteLow flex flex-col items-center justify-center w-full">
      <div className="flex flex-col">
        <div className="text-center mb-10">
          <h4 className="text-3xl text-primaryMain">Welcome back!</h4>
          <h1 className="text-5xl text-pureBlackColor font-bold">
            Register to continue
          </h1>
        </div>
        <div className="flex items-center justify-center py-12 px-10 bg-white shadow-md shadow-whiteLow rounded-lg w-[476px]">
          <form className="flex flex-col w-full gap-4 " onSubmit={handleSignup}>
            <div className="inline-flex flex-col justify-start items-start gap-4 ">
              <span className="text-xs text-fadeColor font-medium leading-none">
                First Name
              </span>
              <input
                type="text"
                required
                name="firstName"
                placeholder="Enter your first name"
                className="w-full py-3 px-4 border border-fadeLight outline-none rounded-lg text-black text-sm sm:text-base"
              />
            </div>
            <div>
              <p className="text-sm text-pureBlackColor font-bold mb-2">
                Password
              </p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input bg-transparent border border-whiteLow focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                placeholder="Password"
                className=" bg-whiteLow "
              />
              <p className="text-blackSemi">Remeber me</p>
            </div>
            <button
              className="btn normal-case mt-4 mb-6 rounded-full bg-primaryMain text-whiteHigh border-0 hover:bg-primaryMain"
              type="submit"
            >
              {/* <img className="w-12" src={loginBtn} alt="login button" /> */}
              Login
            </button>

            <div className="text-center">
              <Link to="/" className="text-lg text-primaryMain font-bold">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registration;
