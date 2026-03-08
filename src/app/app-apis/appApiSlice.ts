/* eslint-disable @typescript-eslint/no-explicit-any */
import { cipApiSlice as api } from "../cipApiSlice";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["cohorts", "participants", "sessions"],
});

const injectedRtkApi = apiSliceWithTags.injectEndpoints({
  endpoints: (build) => ({
    signupApiV1AuthSignupPost: build.mutation<
      SignupApiV1AuthSignupPostApiResponse,
      SignupApiV1AuthSignupPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/signup`,
        method: "POST",
        body: queryArg.userCreate,
      }),
    }),
    loginApiV1AuthLoginPost: build.mutation<
      LoginApiV1AuthLoginPostApiResponse,
      LoginApiV1AuthLoginPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/login`,
        method: "POST",
        body: queryArg.userLogin,
      }),
    }),
    refreshTokenApiV1AuthRefreshPost: build.mutation<
      RefreshTokenApiV1AuthRefreshPostApiResponse,
      RefreshTokenApiV1AuthRefreshPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/refresh`,
        method: "POST",
        body: queryArg.bodyRefreshTokenApiV1AuthRefreshPost,
      }),
    }),
    logoutApiV1AuthLogoutPost: build.mutation<
      LogoutApiV1AuthLogoutPostApiResponse,
      LogoutApiV1AuthLogoutPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/auth/logout`,
        method: "POST",
        body: queryArg.bodyLogoutApiV1AuthLogoutPost,
      }),
    }),
    adminOnlyApiV1AuthAdminOnlyGet: build.query<
      AdminOnlyApiV1AuthAdminOnlyGetApiResponse,
      AdminOnlyApiV1AuthAdminOnlyGetApiArg
    >({
      query: () => ({ url: `/api/v1/auth/admin-only` }),
    }),
    listOrganizationsApiV1OrganizationsGet: build.query<
      ListOrganizationsApiV1OrganizationsGetApiResponse,
      ListOrganizationsApiV1OrganizationsGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/organizations/`,
        params: {
          skip: queryArg.skip,
          limit: queryArg.limit,
        },
      }),
    }),
    createOrganizationApiV1OrganizationsPost: build.mutation<
      CreateOrganizationApiV1OrganizationsPostApiResponse,
      CreateOrganizationApiV1OrganizationsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/organizations/`,
        method: "POST",
        body: queryArg.organizationCreate,
      }),
    }),
    getOrganizationApiV1OrganizationsOrgIdGet: build.query<
      GetOrganizationApiV1OrganizationsOrgIdGetApiResponse,
      GetOrganizationApiV1OrganizationsOrgIdGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/organizations/${queryArg.orgId}` }),
    }),
    updateOrganizationApiV1OrganizationsOrgIdPatch: build.mutation<
      UpdateOrganizationApiV1OrganizationsOrgIdPatchApiResponse,
      UpdateOrganizationApiV1OrganizationsOrgIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/organizations/${queryArg.orgId}`,
        method: "PATCH",
        body: queryArg.organizationUpdate,
      }),
    }),
    deleteOrganizationApiV1OrganizationsOrgIdDelete: build.mutation<
      DeleteOrganizationApiV1OrganizationsOrgIdDeleteApiResponse,
      DeleteOrganizationApiV1OrganizationsOrgIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/organizations/${queryArg.orgId}`,
        method: "DELETE",
      }),
    }),
    listCohortsApiV1CohortsGet: build.query<
      ListCohortsApiV1CohortsGetApiResponse,
      ListCohortsApiV1CohortsGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/cohorts`,
        params: {
          skip: queryArg.skip,
          limit: queryArg.limit,
          organization_id: queryArg.organizationId,
        },
      }),
      providesTags: ["cohorts"],
    }),
    createCohortApiV1CohortsPost: build.mutation<
      CreateCohortApiV1CohortsPostApiResponse,
      CreateCohortApiV1CohortsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/cohorts/`,
        method: "POST",
        body: queryArg.cohortCreate,
      }),
      invalidatesTags: ["cohorts"],
    }),
    getCohortApiV1CohortsCohortIdGet: build.query<
      GetCohortApiV1CohortsCohortIdGetApiResponse,
      GetCohortApiV1CohortsCohortIdGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/cohorts/${queryArg.cohortId}` }),
      providesTags: ["cohorts"],
    }),
    updateCohortApiV1CohortsCohortIdPatch: build.mutation<
      UpdateCohortApiV1CohortsCohortIdPatchApiResponse,
      UpdateCohortApiV1CohortsCohortIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/cohorts/${queryArg.cohortId}`,
        method: "PATCH",
        body: queryArg.cohortUpdate,
      }),
      invalidatesTags: ["cohorts"],
    }),
    deleteCohortApiV1CohortsCohortIdDelete: build.mutation<
      DeleteCohortApiV1CohortsCohortIdDeleteApiResponse,
      DeleteCohortApiV1CohortsCohortIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/cohorts/${queryArg.cohortId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cohorts"],
    }),
    listSessionsApiV1SessionsGet: build.query<
      ListSessionsApiV1SessionsGetApiResponse,
      ListSessionsApiV1SessionsGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sessions/`,
        params: {
          skip: queryArg.skip,
          limit: queryArg.limit,
          cohort_id: queryArg.cohortId,
        },
      }),
      providesTags: ["sessions"],
    }),
    getSessionApiV1SessionsSessionIdGet: build.query<
      GetSessionApiV1SessionsSessionIdGetApiResponse,
      GetSessionApiV1SessionsSessionIdGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/sessions/${queryArg.sessionId}` }),
      providesTags: ["sessions"],
    }),
    uploadSessionApiV1SessionsUploadPost: build.mutation<
      UploadSessionApiV1SessionsUploadPostApiResponse,
      UploadSessionApiV1SessionsUploadPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sessions/upload`,
        method: "POST",
        body: queryArg.bodyUploadSessionApiV1SessionsUploadPost,
      }),
      invalidatesTags: ["sessions"],
    }),
    importSessionUrlApiV1SessionsUrlPost: build.mutation<
      ImportSessionUrlApiV1SessionsUrlPostApiResponse,
      ImportSessionUrlApiV1SessionsUrlPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/sessions/url`,
        method: "POST",
        body: queryArg.urlUploadRequest,
      }),
      invalidatesTags: ["sessions"],
    }),
    listParticipantsApiV1ParticipantsGet: build.query<
      ListParticipantsApiV1ParticipantsGetApiResponse,
      ListParticipantsApiV1ParticipantsGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/participants/`,
        params: {
          skip: queryArg.skip,
          limit: queryArg.limit,
          cohort_id: queryArg.cohortId,
          user_id: queryArg.userId,
        },
      }),
    }),
    createParticipantApiV1ParticipantsPost: build.mutation<
      CreateParticipantApiV1ParticipantsPostApiResponse,
      CreateParticipantApiV1ParticipantsPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/participants/`,
        method: "POST",
        body: queryArg.participantCreate,
      }),
    }),
    getParticipantApiV1ParticipantsParticipantIdGet: build.query<
      GetParticipantApiV1ParticipantsParticipantIdGetApiResponse,
      GetParticipantApiV1ParticipantsParticipantIdGetApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/participants/${queryArg.participantId}`,
      }),
    }),
    updateParticipantApiV1ParticipantsParticipantIdPatch: build.mutation<
      UpdateParticipantApiV1ParticipantsParticipantIdPatchApiResponse,
      UpdateParticipantApiV1ParticipantsParticipantIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/participants/${queryArg.participantId}`,
        method: "PATCH",
        body: queryArg.participantUpdate,
      }),
    }),
    deleteParticipantApiV1ParticipantsParticipantIdDelete: build.mutation<
      DeleteParticipantApiV1ParticipantsParticipantIdDeleteApiResponse,
      DeleteParticipantApiV1ParticipantsParticipantIdDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/participants/${queryArg.participantId}`,
        method: "DELETE",
      }),
    }),
    updateParticipantMetricsApiV1ParticipantsParticipantIdMetricsPatch:
      build.mutation<
        UpdateParticipantMetricsApiV1ParticipantsParticipantIdMetricsPatchApiResponse,
        UpdateParticipantMetricsApiV1ParticipantsParticipantIdMetricsPatchApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/participants/${queryArg.participantId}/metrics`,
          method: "PATCH",
          body: queryArg.participantMetricsUpdate,
        }),
      }),
    healthCheckHealthGet: build.query<
      HealthCheckHealthGetApiResponse,
      HealthCheckHealthGetApiArg
    >({
      query: () => ({ url: `/health` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as appApi };
export type SignupApiV1AuthSignupPostApiResponse =
  /** status 201 Successful Response */ ApiResponseUserResponse;
export type SignupApiV1AuthSignupPostApiArg = {
  userCreate: UserCreate;
};
export type LoginApiV1AuthLoginPostApiResponse =
  /** status 200 Successful Response */ ApiResponseToken;
export type LoginApiV1AuthLoginPostApiArg = {
  userLogin: UserLogin;
};
export type RefreshTokenApiV1AuthRefreshPostApiResponse =
  /** status 200 Successful Response */ ApiResponseToken;
export type RefreshTokenApiV1AuthRefreshPostApiArg = {
  bodyRefreshTokenApiV1AuthRefreshPost: BodyRefreshTokenApiV1AuthRefreshPost;
};
export type LogoutApiV1AuthLogoutPostApiResponse = unknown;
export type LogoutApiV1AuthLogoutPostApiArg = {
  bodyLogoutApiV1AuthLogoutPost: BodyLogoutApiV1AuthLogoutPost;
};
export type AdminOnlyApiV1AuthAdminOnlyGetApiResponse =
  /** status 200 Successful Response */ ApiResponseDict;
export type AdminOnlyApiV1AuthAdminOnlyGetApiArg = void;
export type ListOrganizationsApiV1OrganizationsGetApiResponse =
  /** status 200 Successful Response */ ApiResponseListOrganizationResponse;
export type ListOrganizationsApiV1OrganizationsGetApiArg = {
  skip?: number;
  limit?: number;
};
export type CreateOrganizationApiV1OrganizationsPostApiResponse =
  /** status 201 Successful Response */ ApiResponseOrganizationResponse;
export type CreateOrganizationApiV1OrganizationsPostApiArg = {
  organizationCreate: OrganizationCreate;
};
export type GetOrganizationApiV1OrganizationsOrgIdGetApiResponse =
  /** status 200 Successful Response */ ApiResponseOrganizationResponse;
export type GetOrganizationApiV1OrganizationsOrgIdGetApiArg = {
  orgId: number;
};
export type UpdateOrganizationApiV1OrganizationsOrgIdPatchApiResponse =
  /** status 200 Successful Response */ ApiResponseOrganizationResponse;
export type UpdateOrganizationApiV1OrganizationsOrgIdPatchApiArg = {
  orgId: number;
  organizationUpdate: OrganizationUpdate;
};
export type DeleteOrganizationApiV1OrganizationsOrgIdDeleteApiResponse =
  /** status 200 Successful Response */ ApiResponseDict;
export type DeleteOrganizationApiV1OrganizationsOrgIdDeleteApiArg = {
  orgId: number;
};
export type ListCohortsApiV1CohortsGetApiResponse =
  /** status 200 Successful Response */ ApiResponseListCohortResponse;
export type ListCohortsApiV1CohortsGetApiArg = {
  skip?: number;
  limit?: number;
  organizationId?: number | null;
};
export type CreateCohortApiV1CohortsPostApiResponse =
  /** status 201 Successful Response */ ApiResponseCohortResponse;
export type CreateCohortApiV1CohortsPostApiArg = {
  cohortCreate: CohortCreate;
};
export type GetCohortApiV1CohortsCohortIdGetApiResponse =
  /** status 200 Successful Response */ ApiResponseCohortResponse;
export type GetCohortApiV1CohortsCohortIdGetApiArg = {
  cohortId: number;
};
export type UpdateCohortApiV1CohortsCohortIdPatchApiResponse =
  /** status 200 Successful Response */ ApiResponseCohortResponse;
export type UpdateCohortApiV1CohortsCohortIdPatchApiArg = {
  cohortId: number;
  cohortUpdate: CohortUpdate;
};
export type DeleteCohortApiV1CohortsCohortIdDeleteApiResponse =
  /** status 200 Successful Response */ ApiResponseDict;
export type DeleteCohortApiV1CohortsCohortIdDeleteApiArg = {
  cohortId: number;
};
export type ListSessionsApiV1SessionsGetApiResponse =
  /** status 200 Successful Response */ ApiResponseListSessionResponse;
export type ListSessionsApiV1SessionsGetApiArg = {
  skip?: number;
  limit?: number;
  cohortId?: number | null;
};
export type GetSessionApiV1SessionsSessionIdGetApiResponse =
  /** status 200 Successful Response */ ApiResponseSessionResponse;
export type GetSessionApiV1SessionsSessionIdGetApiArg = {
  sessionId: number;
};
export type UploadSessionApiV1SessionsUploadPostApiResponse =
  /** status 202 Successful Response */ ApiResponseUploadResponse;
export type UploadSessionApiV1SessionsUploadPostApiArg = {
  bodyUploadSessionApiV1SessionsUploadPost: BodyUploadSessionApiV1SessionsUploadPost;
};
export type ImportSessionUrlApiV1SessionsUrlPostApiResponse =
  /** status 202 Successful Response */ ApiResponseUploadResponse;
export type ImportSessionUrlApiV1SessionsUrlPostApiArg = {
  urlUploadRequest: UrlUploadRequest;
};
export type ListParticipantsApiV1ParticipantsGetApiResponse =
  /** status 200 Successful Response */ ApiResponseListParticipantResponse;
export type ListParticipantsApiV1ParticipantsGetApiArg = {
  skip?: number;
  limit?: number;
  cohortId?: number | null;
  userId?: number | null;
};
export type CreateParticipantApiV1ParticipantsPostApiResponse =
  /** status 201 Successful Response */ ApiResponseParticipantResponse;
export type CreateParticipantApiV1ParticipantsPostApiArg = {
  participantCreate: ParticipantCreate;
};
export type GetParticipantApiV1ParticipantsParticipantIdGetApiResponse =
  /** status 200 Successful Response */ ApiResponseParticipantResponse;
export type GetParticipantApiV1ParticipantsParticipantIdGetApiArg = {
  participantId: number;
};
export type UpdateParticipantApiV1ParticipantsParticipantIdPatchApiResponse =
  /** status 200 Successful Response */ ApiResponseParticipantResponse;
export type UpdateParticipantApiV1ParticipantsParticipantIdPatchApiArg = {
  participantId: number;
  participantUpdate: ParticipantUpdate;
};
export type DeleteParticipantApiV1ParticipantsParticipantIdDeleteApiResponse =
  /** status 200 Successful Response */ ApiResponseDict;
export type DeleteParticipantApiV1ParticipantsParticipantIdDeleteApiArg = {
  participantId: number;
};
export type UpdateParticipantMetricsApiV1ParticipantsParticipantIdMetricsPatchApiResponse =
  /** status 200 Successful Response */ ApiResponseParticipantResponse;
export type UpdateParticipantMetricsApiV1ParticipantsParticipantIdMetricsPatchApiArg =
  {
    participantId: number;
    participantMetricsUpdate: ParticipantMetricsUpdate;
  };
export type HealthCheckHealthGetApiResponse =
  /** status 200 Successful Response */ any;
export type HealthCheckHealthGetApiArg = void;
export type UserProfile = {
  full_name?: string | null;
  avatar_url?: string | null;
};
export type UserResponse = {
  email: string;
  is_active?: boolean;
  id: number;
  profile?: UserProfile | null;
};
export type ApiResponseUserResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: UserResponse | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserCreate = {
  email: string;
  password: string;
  full_name?: string | null;
};
export type Token = {
  access_token: string;
  refresh_token: string;
  token_type: string;
};
export type ApiResponseToken = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: Token | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type UserLogin = {
  email: string;
  password: string;
};
export type BodyRefreshTokenApiV1AuthRefreshPost = {
  refresh_token: string;
};
export type BodyLogoutApiV1AuthLogoutPost = {
  refresh_token: string;
};
export type ApiResponseDict = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: {
    [key: string]: any;
  } | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type OrganizationResponse = {
  name: string;
  description?: string | null;
  id: number;
  created_at: string;
  updated_at: string;
};
export type ApiResponseListOrganizationResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: OrganizationResponse[] | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type ApiResponseOrganizationResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: OrganizationResponse | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type OrganizationCreate = {
  name: string;
  description?: string | null;
};
export type OrganizationUpdate = {
  name?: string | null;
  description?: string | null;
};
export type CohortResponse = {
  name: string;
  description?: string | null;
  organization_id: number;
  id: number;
  created_at: string;
  updated_at: string;
  sessions: {
    action_items_json: string[];
    cohort_id: number;
    created_at: string;
    id: number;
    questions_asked_json: string[];
    status: string;
    summary: string;
    talk_listen_ratios_json: { talk_ratio: number; listen_ratio: number };
    title: string;
    topics_json: string[];
    transcription_url: string;
    updated_at: string;
    vcon_url: string;
  }[];
};
export type ApiResponseListCohortResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: CohortResponse[] | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type ApiResponseCohortResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: CohortResponse | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type CohortCreate = {
  name: string;
  description?: string | null;
  organization_id: number;
};
export type CohortUpdate = {
  name?: string | null;
  description?: string | null;
  organization_id?: number | null;
};
export type SessionResponse = {
  title: string;
  cohort_id: number;
  id: number;
  vcon_url?: string | null;
  transcription_url?: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  action_items_json: string[];
  questions_asked_json: string[];
  summary: string;
  talk_listen_ratios_json: { talk_ratio: number; listen_ratio: number };
  topics_json: string[];
};
export type ApiResponseListSessionResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: SessionResponse[] | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type ApiResponseSessionResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: SessionResponse | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type UploadResponse = {
  task_id: string;
  status: string;
};
export type ApiResponseUploadResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: UploadResponse | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type BodyUploadSessionApiV1SessionsUploadPost = {
  title: string;
  cohort_id: number;
  file: Blob;
};
export type UrlUploadRequest = {
  title: string;
  cohort_id: number;
  url: string;
};
export type ParticipantResponse = {
  user_id: number;
  cohort_id: number;
  role?: string;
  metadata_json?: {
    [key: string]: any;
  } | null;
  id: number;
  sessions_attended: number;
  average_talk_time_pct: number;
  health_score?: number | null;
  created_at: string;
  updated_at: string;
};
export type ApiResponseListParticipantResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: ParticipantResponse[] | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type ApiResponseParticipantResponse = {
  /** Response status: 'success' or 'failed' */
  status: string;
  /** Status message */
  message: string;
  /** Response data */
  data?: ParticipantResponse | null;
  /** Error details */
  error?: {
    [key: string]: any;
  } | null;
};
export type ParticipantCreate = {
  user_id: number;
  cohort_id: number;
  role?: string;
  metadata_json?: {
    [key: string]: any;
  } | null;
};
export type ParticipantUpdate = {
  role?: string | null;
  metadata_json?: {
    [key: string]: any;
  } | null;
};
export type ParticipantMetricsUpdate = {
  sessions_attended?: number | null;
  average_talk_time_pct?: number | null;
  health_score?: number | null;
};
export const {
  useSignupApiV1AuthSignupPostMutation,
  useLoginApiV1AuthLoginPostMutation,
  useRefreshTokenApiV1AuthRefreshPostMutation,
  useLogoutApiV1AuthLogoutPostMutation,
  useAdminOnlyApiV1AuthAdminOnlyGetQuery,
  useListOrganizationsApiV1OrganizationsGetQuery,
  useCreateOrganizationApiV1OrganizationsPostMutation,
  useGetOrganizationApiV1OrganizationsOrgIdGetQuery,
  useUpdateOrganizationApiV1OrganizationsOrgIdPatchMutation,
  useDeleteOrganizationApiV1OrganizationsOrgIdDeleteMutation,
  useListCohortsApiV1CohortsGetQuery,
  useCreateCohortApiV1CohortsPostMutation,
  useGetCohortApiV1CohortsCohortIdGetQuery,
  useUpdateCohortApiV1CohortsCohortIdPatchMutation,
  useDeleteCohortApiV1CohortsCohortIdDeleteMutation,
  useListSessionsApiV1SessionsGetQuery,
  useGetSessionApiV1SessionsSessionIdGetQuery,
  useUploadSessionApiV1SessionsUploadPostMutation,
  useImportSessionUrlApiV1SessionsUrlPostMutation,
  useListParticipantsApiV1ParticipantsGetQuery,
  useCreateParticipantApiV1ParticipantsPostMutation,
  useGetParticipantApiV1ParticipantsParticipantIdGetQuery,
  useUpdateParticipantApiV1ParticipantsParticipantIdPatchMutation,
  useDeleteParticipantApiV1ParticipantsParticipantIdDeleteMutation,
  useUpdateParticipantMetricsApiV1ParticipantsParticipantIdMetricsPatchMutation,
  useHealthCheckHealthGetQuery,
} = injectedRtkApi;
