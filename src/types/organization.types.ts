export interface getOrganizations {
  status: string;
  message: string;
  data: OrganizationsResponse;
  error?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  } | null;
}

export type OrganizationResponse = {
  name: string;
  description: string;
  id: number;
  created_at: string;
  updated_at: string;
};

export interface CreateOrganization {
  name: string;
  description?: string;
}

export interface MyOrganizationResponse {
  id: number;
  name: string;
  role: string;
}

export interface SwitchOrganizationResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export type OrganizationsResponse = OrganizationResponse[];
export type MyOrganizationResponses = MyOrganizationResponse[];
