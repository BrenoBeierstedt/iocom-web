import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_MYSELF, GET_USERS} from "@/atomic_data/query";
import {userEmail} from "@/utils/rolesDecrypt";
import jwt_decode from "jwt-decode";

const email = userEmail()
export default (callback) => {


  if(email === "error"){
    return "error"
  }
    const {loading, error, data} = useQuery(GET_MYSELF, {variables : {email}});
  if (loading) {
     return "loading"
  }
  if (error) {
    console.log(error)
    return`error`
  }
  return data

}


