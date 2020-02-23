import React from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks'
import User  from './userFetch';
import client from '@/pages/.umi/apollo/index'
import { Query, Mutation } from 'react-apollo';
import {GET_MYSELF} from "@/atomic_data/query";
import {userId} from "@/utils/rolesDecrypt"
import jwt_decode from "jwt-decode"
import request from '@/utils/request';


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
