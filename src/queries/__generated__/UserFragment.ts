/* tslint:disable */
// This file was automatically generated and should not be edited.

import { Episode } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment_bankAccounts {
  __typename: "BankAccount";
  id: number;
}

export interface UserFragment {
  __typename: "User";
  id: number;
  name: string | null;
  isActive: boolean;
  episode: Episode | null;
  bankAccounts: (UserFragment_bankAccounts | null)[];
}
