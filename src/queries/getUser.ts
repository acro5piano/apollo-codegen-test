export const UserFragment = gql`
  fragment UserFragment on User {
    id
    name
    isActive
    episode
    bankAccounts {
      id
    }
  }
`

export const getUser = gql`
  query getUser {
    user {
      ...UserFragment
    }
  }
`
