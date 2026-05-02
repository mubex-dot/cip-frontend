import type { sessions } from "./sessions.types";

export interface CohortResponse {
  name: string;
  description?: string | null;
  organization_id: number;
  id: number;
  created_at: string;
  updated_at: string;
  sessions: sessions;
}

export interface CreateCohort {
  name: string;
  description?: string;
}

export type CohortResponses = CohortResponse[];
