import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
mutation LoginUser($email: String!, $password: String!){
  LoginUser(
    loginUserInput: {
      email: $email
      password: $password
    }
  ){
    token
    status
  }
}
`

export const DELETE_USER = gql`
mutation DeleteUser($email: String!){
  DeleteUser(
    searchUserInput: {
      email: $email
    }
  ) {
    deleted
  }
}
`

export const UPDATE_PASSWORD = gql`
mutation ForgotPassword($phone_country: String!, $phone_number: String!) {
  ForgotPassword(
    phoneInput: {
      phone_country: $phone_country
      phone_number: $phone_number
    }
  )
}`
