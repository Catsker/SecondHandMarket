import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit, skip, search, sort, category }) => {
        let url = '/products';
        const params = {
          limit,
          skip,
          select: 'id,title,price,thumbnail,rating,category,returnPolicy,shippingInformation',
          sortBy: sort && 'price',
          order: sort === 'Ascending price' ? 'asc' : 'desc',
        };

        if (search) {
          url = '/products/search';
          params.q = search;
        } else if (category) {
          url = `/products/category/${category}`;
        }

        return { url, params };
      },

      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}-${queryArgs.search ?? ''}`,

      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip;
      },

      merge: (currentCache, newData, { arg }) => {
        if (arg.skip === 0) {
          currentCache.products = newData.products ?? [];
          currentCache.total = newData.total ?? 0;
        } else {
          const existingIds = new Set(currentCache.products.map(p => p.id));
          const newUnique = (newData.products ?? []).filter(p => !existingIds.has(p.id));
          currentCache.products.push(...newUnique);
          currentCache.total = newData.total ?? currentCache.total;
        }
      },

      transformResponse: (response) => ({
        products: response.products || [],
        total: response.total || 0,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
