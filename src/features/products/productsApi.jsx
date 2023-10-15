import { apiSlice } from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products/all",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            dispatch(
              productsApi.util.updateQueryData(
                "getAllProducts",
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

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/update/${id}/`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            dispatch(
              productsApi.util.updateQueryData(
                "getAllProducts",
                undefined,
                (draft) => {
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

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/delete/${id}/`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result?.data?.deletedCount === 1) {
            dispatch(
              productsApi.util.updateQueryData(
                "getAllProducts",
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
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
