import { apiSlice } from "../api/apiSlice";

const sellersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSellers: builder.query({
      query: () => ({
        url: "/sellers/all/",
      }),
    }),
    registerSeller: builder.mutation({
      query: (data) => ({
        url: "/sellers/register/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            dispatch(
              sellersApi.util.updateQueryData(
                "getAllSellers",
                undefined,
                (draft) => {
                  draft.push(result?.data);
                }
              )
            );
          }
        } catch (error) {
          return error;
        }
      },
    }),

    updateSeller: builder.mutation({
      query: ({ id, data }) => ({
        url: `/sellers/update/${id}/`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          if (result?.data) {
            dispatch(
              sellersApi.util.updateQueryData(
                "getAllSellers",
                undefined,
                (draft) => {
                  console.log(JSON.stringify(draft));
                  const index = draft.findIndex((item) => item._id === id);
                  if (index !== -1) {
                    draft[index] = { ...draft[index], ...result?.data };
                  }
                }
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    deleteSeller: builder.mutation({
      query: (id) => ({
        url: `/sellers/delete/${id}/`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.deletedCount === 1) {
            dispatch(
              sellersApi.util.updateQueryData(
                "getAllSellers",
                undefined,
                (draft) => {
                  const filteredArray = draft.filter(
                    (item) => item?._id !== id
                  );
                  return filteredArray;
                }
              )
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
  useGetAllSellersQuery,
  useRegisterSellerMutation,
  useDeleteSellerMutation,
  useUpdateSellerMutation,
} = sellersApi;
