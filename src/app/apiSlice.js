import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
    endpoints: (builder) => ({
        getBook: builder.query({
            query: (title) => `volumes?q=${title}&key=AIzaSyBERZqi8XtOIIEAtjTKVXWrQgJxeawnG_8`,
        }),
    }),
});

export const { useGetBookQuery } = booksApi