import {createApi} from '@reduxjs/toolkit/query/react';

import {Executor} from '@models/executors';

import {dynamicBaseQuery} from '@utils/fetchUtils';

// useUpdateCustomExecutor
export const executorsApi = createApi({
  reducerPath: 'executorsApi',
  baseQuery: dynamicBaseQuery,
  endpoints: builder => ({
    getExecutors: builder.query<Executor[], null | void>({
      query: () => '/executors',
    }),
    createExecutor: builder.mutation<void, any>({
      query: body => ({
        url: `/executors`,
        method: 'POST',
        body,
      }),
    }),
    updateCustomExecutor: builder.mutation<void, any>({
      query: ({body, executorId}) => ({
        url: `/executors/${executorId}`,
        method: 'PATCH',
        body,
      }),
    }),
    getExecutorDetails: builder.query<any, string>({
      query: id => `/executors/${id}`,
    }),
    deleteExecutor: builder.mutation<void, any>({
      query: id => ({
        url: `/executors/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetExecutorsQuery,
  useCreateExecutorMutation,
  useGetExecutorDetailsQuery,
  useDeleteExecutorMutation,
  useUpdateCustomExecutorMutation,
} = executorsApi;
