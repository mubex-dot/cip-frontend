import {
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { logout } from "@/pages/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_CIP_API,
});

// Custom base query function with authentication and token refresh handling.
const baseQueryWithErrorHandling: BaseQueryFn<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  string | FetchArgs | any,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  let retryCount = 0;
  while (
    result.error &&
    "originalStatus" in result.error &&
    result.error.originalStatus === 502 &&
    retryCount < 1
  ) {
    //icrement and retry
    retryCount++;
    result = await baseQuery(args, api, extraOptions);
  }

  if (result.error && result.error.status === 401) {
    alert("Session expired, Please signin to continue");
    api.dispatch(logout());

    return {
      error: { status: result.error.status, data: result.error.data },
    };
  }

  if (result.error) {
    // handle all other errors here
    return {
      error: result.error,
    };
  }

  //return the response
  return result;
};

export const cipApiSlice = createApi({
  reducerPath: "cipApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
});
