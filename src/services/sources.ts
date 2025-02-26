import {createApi} from '@reduxjs/toolkit/query/react';

import {Repository} from '@models/repository';
import {SourceWithRepository} from '@models/sources';

import {dynamicBaseQuery} from '@utils/fetchUtils';

export type SourceFormField = {name: string; type: 'git-dir'; repository: Repository};

type AddSourcesPayload = {
  batch: SourceFormField[];
};

export const sourcesApi = createApi({
  reducerPath: 'sourcesApi',
  baseQuery: dynamicBaseQuery,
  endpoints: builder => ({
    getSources: builder.query<SourceWithRepository[], null>({
      query: () => '/test-sources',
    }),
    addSources: builder.mutation<any, AddSourcesPayload>({
      query: body => {
        return {
          url: '/test-sources',
          method: 'PATCH',
          body,
        };
      },
    }),
    createSource: builder.mutation<any, SourceWithRepository>({
      query: body => {
        return {
          url: '/test-sources',
          method: 'POST',
          body,
        };
      },
    }),
    getSourceDetails: builder.query<SourceWithRepository, string>({
      query: id => `/test-sources/${id}`,
    }),
    deleteSource: builder.mutation<void, any>({
      query: id => ({
        url: `/test-sources/${id}`,
        method: 'DELETE',
      }),
    }),
    updateSource: builder.mutation<any, SourceWithRepository>({
      query: body => {
        return {
          url: `/test-sources/${body.name}`,
          method: 'PATCH',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetSourcesQuery,
  useAddSourcesMutation,
  useGetSourceDetailsQuery,
  useCreateSourceMutation,
  useDeleteSourceMutation,
  useUpdateSourceMutation,
} = sourcesApi;
