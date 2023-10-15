import { apiSlice } from "../api/apiSlice";
import { setAuth, updateAuth } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/admins/login/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const responseData = result?.data;
          const tokenExpiration = 7 * 24 * 60 * 60 * 1000;
          const expireIn = Date.now() + tokenExpiration;
          localStorage.setItem(
            "dokani",
            JSON.stringify({
              accessToken: responseData?.token,
              auth: responseData?.admin,
              expireIn,
            })
          );
          dispatch(
            setAuth({
              accessToken: responseData?.token,
              auth: responseData?.admin,
            })
          );
        } catch (error) {
          return error;
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/admins/register/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?._id) {
            dispatch(authApi.endpoints.login.initiate(data));
          }
        } catch (error) {
          return error;
        }
      },
    }),
    sendResetPasswordEmail: builder.mutation({
      query: (data) => ({
        url: "/admins/reset/",
        method: "POST",
        body: data,
      }),
    }),

    // admin password reset
    adminResetPassword: builder.mutation({
      query: (data) => ({
        url: `/admins/reset/`,
        method: "PATCH",
        body: data,
      }),
    }),

    // user password reset

    userResetPassword: builder.mutation({
      query: (data) => ({
        url: `/users/reset/`,
        method: "PATCH",
        body: data,
      }),
    }),

    // owner password reset

    ownerResetPassword: builder.mutation({
      query: (data) => ({
        url: `/owners/reset/`,
        method: "PATCH",
        body: data,
      }),
    }),

    updateAdmin: builder.mutation({
      query: ({ data, id, token }) => ({
        url: `/admins/update/${id}/`,
        method: "PATCH",
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
      async onQueryStarted({ data }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data) {
            const { data } = result || {};
            dispatch(updateAuth(data));
            const localAuth = localStorage?.getItem("dokani");
            const adminData = JSON.parse(localAuth);
            const { accessToken, auth, expireIn } = adminData || {};
            const newData = { ...auth, ...data };
            localStorage.setItem(
              "dokani",
              JSON.stringify({
                accessToken,
                auth: newData,
                expireIn,
              })
            );
          }
        } catch (error) {
          return error;
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSendResetPasswordEmailMutation,
  useUpdateAdminMutation,
  useAdminResetPasswordMutation,
  useUserResetPasswordMutation,
  useOwnerResetPasswordMutation,
} = authApi;
