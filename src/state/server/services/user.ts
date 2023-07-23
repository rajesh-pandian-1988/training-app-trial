// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserData } from '../../../models/userModels'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://linuxappservice07152023.azurewebsites.net/api/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserData[], string>({query: () => `UserItems`, providesTags: ['User']}),
    addUsers: builder.mutation<UserData[], UserData>({
      query: (payload) => ({
        url: `UserItems`,
        method: "POST",
        body: payload,
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        },
      }), 
      invalidatesTags: ['User']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUsersQuery, useAddUsersMutation } = userApi