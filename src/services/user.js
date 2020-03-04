import request from '@/utils/request';
import { useLazyQuery } from '@apollo/react-hooks';
import {GET_MYSELF} from '@/atomic_data/query'

// const UserList = () => {
//   const { data, error, loading } = useQuery(GET_MYSELF)
// console.log(data)
//   return(
//   )
// }



export async function query() {
  return request('/api/users');
}




export async function queryCurrent() {

  try{

    return request('/api/currentUser');


  }catch(error){
    // return error
    console.log(error)
    return request('/api/currentUser');

  }
}


export async function queryNotices() {
  return request('/api/notices');
}
