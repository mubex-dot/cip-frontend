// import { cipApiSlice } from "../cipApiSlice";
// import type {
//   GetApplications,
//   GetSingleApplication,
// } from "@/types/application.types";
// import type { Meta } from "@/types/user.types";

// const apiSliceWithTags = cipApiSlice.enhanceEndpoints({
//   addTagTypes: ["applications"],
// });

// const MessagesApiSlice = apiSliceWithTags.injectEndpoints({
//   endpoints: (builder) => ({
//     getApplications: builder.query<
//       { success: boolean; message: string; data: GetApplications; meta: Meta },
//       { page?: number; limit?: number; search?: string; status?: string }
//     >({
//       query: ({ page, limit, search, status }) => ({
//         url: "/applications",
//         params: {
//           page,
//           limit,
//           search,
//           // Don't pass status if to get all the applications
//           ...(status ? { status } : {}),
//         },
//       }),
//       providesTags: ["applications"],
//     }),
//     getSingleApplication: builder.query<
//       { success: boolean; message: string; data: GetSingleApplication },
//       { id: string }
//     >({
//       query: ({ id }) => `/applications/${id}`,
//       providesTags: ["applications"],
//     }),
//     submitApplicationDecision: builder.mutation<
//       unknown,
//       { id: string; status: string; adminNote: string }
//     >({
//       query: ({ id, ...body }) => ({
//         url: `/applications/${id}/decision`,
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["applications"],
//     }),
//     // createApplication: builder.mutation<ApplicationResponse, ApplicationInput>({
//     //   query: (values) => ({
//     //     url: "/broadcast",
//     //     method: "POST",
//     //     body: { ...values },
//     //   }),
//     //   invalidatesTags: ["applications"],
//     // }),
//   }),
// });

// export const {
//   useGetApplicationsQuery,
//   useGetSingleApplicationQuery,
//   useSubmitApplicationDecisionMutation,
// } = MessagesApiSlice;
