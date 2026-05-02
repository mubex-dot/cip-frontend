// export interface User {
//   id: number;
//   email: string;
//   role: string;
//   phone: string;
//   name: string;
//   profile_icon: string;
//   joined_at: string;
// }
export interface User {
  access_token: string;
  refresh_token: string;
  token_type: string;
}
