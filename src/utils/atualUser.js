import {useFetchUser} from './useFetchUser'

 const atualUser = async () => {
  const token = await useFetchUser();
  return <p>{token}</p>
}


export default atualUser
