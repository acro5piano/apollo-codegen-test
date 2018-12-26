/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user {
  __typename: "User";
  id: number;
  name: string | null;
  isActive: boolean;
}

export interface getUser {
  user: getUser_user | null;
}
