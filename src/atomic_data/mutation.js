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

export const CREATE_CLIENT = gql`
  mutation CreateClient($email: String!, $full_name: String!, $customer_type: String!, $cellphone: String!, $social_security: String! ){
    CreateClient(
      dataClientInput: {
        email: $email
        full_name: $full_name
        customer_type:$customer_type
        cellphone:$cellphone
        social_security:$social_security
      }
    ){
    ID
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

export const CREATE_USER = gql`
mutation CreateUser($email: String!, $full_name: String!, $password: String!) {
  CreateUser(
   dataUserInput: {
    email: $email
    full_name: $full_name
    password: $password
   }
  )
  {
    ID
  }
}`
