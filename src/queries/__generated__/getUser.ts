/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Episode } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user_bankAccounts {
  __typename: "BankAccount";
  id: number;
}

export interface getUser_user {
  __typename: "User";
  id: number;
  name: string | null;
  isActive: boolean;
  episode: Episode | null;
  bankAccounts: (getUser_user_bankAccounts | null)[];
}

export interface getUser {
  user: getUser_user | null;
}
