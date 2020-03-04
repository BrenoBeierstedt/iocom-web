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

export const FORGOT_PASSWORD = gql`
mutation ForgotPassword($email: String!) {
  ForgotPassword(
    dataUserInput:{
      email: $email
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
    id
  }
}`

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($recovery_pwd: String!, $new_password: String!) {
    ChangePassword(
      dataChangePasswordInput: {
        recovery_pwd: $recovery_pwd
        new_password: $new_password
      }
    )
    {
      changed
    }
  }`
