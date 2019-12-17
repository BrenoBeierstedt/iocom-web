import gql from 'graphql-tag'

export const GET_USERS = gql`
{
    Users
    {
      ID
      full_name
      email
      avatar
      roles {
        name
      }
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

export const GET_CURRENCIES = gql`
{
  Currencies(orderBy: active_asc)
  {
    code
    name
    flag
    active
    worthvalue
    worthstatus
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
      token,
      phone {
        phone_country,
        phone_number
      }
      roles {
        name
      }
    }
  }
`
