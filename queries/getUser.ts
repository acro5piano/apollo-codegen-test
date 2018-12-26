export const UserFragment = gql`
  fragment UserFragment on User {
    id
    name
    isActive
  }
`

export const getUser = gql`
  query getUser {
    user {
      ...UserFragment
    }
  }
`
