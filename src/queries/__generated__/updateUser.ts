/* tslint:disable */
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: updateUser
// ====================================================

export interface updateUser_updateUser {
  __typename: "User";
  id: number;
}

export interface updateUser {
  updateUser: updateUser_updateUser | null;
}

export interface updateUserVariables {
  input?: UpdateUserInput | null;
}
