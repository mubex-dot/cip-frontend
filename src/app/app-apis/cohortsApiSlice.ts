import type {
  CohortResponse,
  CohortResponses,
  CreateCohort,
} from "@/types/cohort.types";
import { cipApiSlice } from "../cipApiSlice";

const apiSliceWithTags = cipApiSlice.enhanceEndpoints({
  addTagTypes: ["cohorts"],
});

const cohortsApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getCohorts: builder.query<
      {
        status: string;
        message: string;
        data: CohortResponses;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      { skip?: number; limit?: number }
    >({
      query: ({ skip = 0, limit = 100 }) => ({
        url: "/cohorts",
        params: {
          skip,
          limit,
        },
      }),
      providesTags: ["cohorts"],
    }),

    getSingleCohort: builder.query<
      {
        status: string;
        message: string;
        data: CohortResponse;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      { cohort_id: number }
    >({
      query: ({ cohort_id }) => ({
        url: `/cohorts/${cohort_id}`,
      }),
      providesTags: ["cohorts"],
    }),

    createCohort: builder.mutation<
      {
        status: string;
        message: string;
        data: CohortResponse;
        error?: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any;
        } | null;
      },
      CreateCohort
    >({
      query: (data) => ({
        url: `/cohorts`,
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["cohorts"],
    }),
  }),
});

export const {
  useGetCohortsQuery,
  useGetSingleCohortQuery,
  useCreateCohortMutation,
} = cohortsApiSlice;
