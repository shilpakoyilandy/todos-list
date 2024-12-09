import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: () => 'todos?_limit=15', 
      }),
    }),
  });

  export const { useGetTodosQuery } = apiSlice;