import { cipApiSlice } from "../cipApiSlice";
import type {
  CreateOrganization,
  MyOrganizationResponses,
  OrganizationResponse,
  OrganizationsResponse,
  SwitchOrganizationResponse,
} from "@/types/organization.types";

const apiSliceWithTags = cipApiSlice.enhanceEndpoints({
  addTagTypes: ["organization"],
});

const organizationApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getOrganizations: builder.query<
      {
        status: string;
        message: string;
        data: OrganizationsResponse;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      { skip?: number; limit?: number }
    >({
      query: ({ skip = 0, limit = 100 }) => ({
        url: "/organizations",
        params: {
          skip,
          limit,
        },
      }),
      providesTags: ["organization"],
    }),

    getMyOrganizations: builder.query<
      {
        status: string;
        message: string;
        data: MyOrganizationResponses;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      void
    >({
      query: () => ({
        url: "/profile/me/organizations",
      }),
      providesTags: ["organization"],
    }),

    switchOrganization: builder.mutation<
      {
        status: string;
        message: string;
        data: SwitchOrganizationResponse;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      { org_id: number }
    >({
      query: (data) => ({
        url: "/auth/switch-org",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["organization"],
    }),

    createOrganization: builder.mutation<
      {
        status: string;
        message: string;
        data: OrganizationResponse;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      CreateOrganization
    >({
      query: (data) => ({
        url: `/organizations`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["organization"],
    }),
  }),
});

export const {
  useGetOrganizationsQuery,
  useGetMyOrganizationsQuery,
  useSwitchOrganizationMutation,
  useCreateOrganizationMutation,
} = organizationApiSlice;
