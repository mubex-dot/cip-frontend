import {
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "./store";
import { logout, setCredentials } from "@/pages/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_CIP_API,

  prepareHeaders: (headers, { getState }) => {
    const access_token = (getState() as RootState).auth.access_token;

    if (access_token) {
      headers.set("authorization", `Bearer ${access_token}`);
    }

    return headers;
  },
});

const isRefreshRequest = (args: string | FetchArgs) => {
  if (typeof args === "string") {
    return args.includes("/auth/refresh");
  }

  return args.url?.includes("/auth/refresh");
};

const extractTokenPayload = (data: unknown) => {
  if (!data || typeof data !== "object") return null;

  const payload = data as Record<string, unknown>;
  const maybeToken = payload.data ?? payload;
  const tokenData =
    typeof maybeToken === "object" && maybeToken !== null
      ? ((maybeToken as Record<string, unknown>).tokens ?? maybeToken)
      : maybeToken;

  if (
    typeof tokenData === "object" &&
    tokenData !== null &&
    "access_token" in tokenData &&
    "refresh_token" in tokenData
  ) {
    const typedToken = tokenData as Record<string, unknown>;
    const access_token = typedToken.access_token as string | undefined;
    const refresh_token = typedToken.refresh_token as string | undefined;

    if (access_token && refresh_token) {
      return { access_token, refresh_token };
    }
  }

  return null;
};

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
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
    retryCount++;
    result = await baseQuery(args, api, extraOptions);
  }

  const is401 =
    result.error &&
    (("originalStatus" in result.error &&
      result.error.originalStatus === 401) ||
      result.error.status === 401);

  if (is401 && !isRefreshRequest(args)) {
    const refresh_token = (api.getState() as RootState).auth.refresh_token;

    if (!refresh_token) {
      api.dispatch(logout());
      return result;
    }

    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        body: { refresh_token },
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const tokenPayload = extractTokenPayload(refreshResult.data);
      if (tokenPayload) {
        api.dispatch(setCredentials(tokenPayload));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const cipApiSlice = createApi({
  reducerPath: "cipApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
});
