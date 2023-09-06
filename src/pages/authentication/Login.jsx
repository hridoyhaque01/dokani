import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/shared/ui/PasswordInput";
import { setAuth } from "../../features/auth/authSlice";
import showPassword from "../../util/showPassword";

function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowIcon, setIsShowIcon] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      email,
      password,
    };
    localStorage.setItem("genieAuth", JSON.stringify(data));
    dispatch(setAuth(data));
    navigate("/");
  };

  useEffect(() => {
    if (email) {
      navigate("/");
    }
  }, []);
  return (
    <section className="h-screen bg-whiteLow bg-authBg bg-bottom bg-no-repeat bg-cover flex flex-col items-center justify-center w-full">
      <div className="flex flex-col">
        <div className="text-center mb-10">
          <h4 className="text-3xl text-primaryMain">Welcome back!</h4>
          <h1 className="text-5xl text-pureBlackColor font-bold">
            Login to continue
          </h1>
        </div>
        <div className="flex items-center justify-center py-12 px-10 bg-white shadow-md shadow-whiteLow rounded-lg w-[476px]">
          <form className="flex flex-col w-full gap-4 " onSubmit={handleLogin}>
            {/* Email Address */}
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
              ></PasswordInput>
            </div>

            <button
              className="py-4 normal-case mt-4 mb-6 rounded-lg bg-primaryColor text-white font-semibold"
              type="submit"
            >
              {/* <img className="w-12" src={loginBtn} alt="login button" /> */}
              Login
            </button>

            <div className="text-center">
              <Link to="/" className="text-lg font-medium">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
