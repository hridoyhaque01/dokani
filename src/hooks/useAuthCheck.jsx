import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("dokani");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      const validUser = auth?.accessToken && auth?.expireIn > Date.now();
      if (validUser) {
        dispatch(setAuth(auth));
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);
  return authChecked;
}
