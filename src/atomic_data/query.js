import gql from 'graphql-tag'

export const GET_USERS = gql`
{
    Users
    {
      id
      full_name
      email
      avatar
      active
      roles {
        name
      }
    }
  }
`

export const GET_CLIENTS = gql`
  {
    Clients
    {
      ID
      full_name
      email
      active

    }
  }
`

export const GET_DEVICES = gql`
{
    Devices
    {
      ID
      mac_address
      topic
      logs {
        ID
        DailyLogs{
          ID
          traces{
            ID
            volume
          }
        }
      }

    }
  }
`

export const GET_COUNTRIES = gql`
{
  Countries(orderBy: active_desc) {
    code
    code3
    iso_numeric
    name
    phone_code
    active
  }
}
`

export const GET_CONTRACTS = gql`
  {
    Contracts(orderBy: active_desc) {
      active
      client{
        full_name
      }
      ID
    }
  }
`


export const GET_USER_BY_ID = gql`
  query UserById($ID: String!) {
    UserById (
      ID: $ID
    )
    {
      ID,
      full_name,
      email,

      roles {
        name
      }
    }
  }
`

export const GET_MYSELF = gql`
  query Myself($email: String!) {
    Myself (
     searchUserInput: {
      email: $email
    }
    )
    {
      ID,
      full_name,
      email,
      roles {
        name
      }
    }
  }
`
