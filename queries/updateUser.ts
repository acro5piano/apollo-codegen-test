export const updateUser = gql`
  mutation updateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      id
    }
  }
`
