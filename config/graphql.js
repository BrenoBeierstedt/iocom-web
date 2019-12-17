
import { setContext } from 'apollo-link-context'


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  // console.log('token:', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  }
})
export const cacheOptions = {
};

export const httpLinkOptions = {
};

export const stateLinkOptions = {
};
export const clientOptions = {
};

export const providerOptions = {
};

export const extraLinks = [
  authLink,
]
