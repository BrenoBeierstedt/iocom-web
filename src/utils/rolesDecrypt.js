import React from "react";
import jwt_decode from 'jwt-decode'
import useFetchUser from "@/utils/useFetchUser";
export async function userAuth (payload){
  let authenticated
  let decoded

  try{
    decoded = jwt_decode(payload.auth)
    authenticated = {
      status : 'ok',
      type : payload.type,
      currentAuthority : decoded.role,
      email: payload.email
    }
  }catch(error){
    authenticated = {
      status : 'error',
      type : payload.type,
      currentAuthority : ""
    }
    console.log(error)
  }


  return authenticated
}


export async function userFetch (payload){
  let user
  let decoded

  try{
    decoded = jwt_decode(payload)
    user = {
      email: decoded.email,
      avatar: decoded.avatar,
      full_name: decoded.full_name

    }
  }catch(error){
    user = {
      status : 'error',
      currentAuthority : ""
    }
    console.log(error)
  }


  return user
}

export async function userDataa (){
  let user
  let decoded
  try{
    decoded = jwt_decode(localStorage.getItem("idome_authority_token"))
    user = {
      id: decoded.id,
      full_name: decoded.full_name,
      email: decoded.email,
      avatar: decoded.avatar
    }
  }catch(error){
    user = decoded
    console.log(error)
  }

  return user
}
export async function userData (payload){
  let user = payload
  return user
}


export function userEmail (){

  let decoded
    try {
    decoded = jwt_decode(localStorage.getItem("idome_authority_token"))
      const email  = decoded.email
      return email
    }catch(error){
    console.log(error)
      return "error"
    }


}

export function userRoles (){

  let decoded
  try {
    decoded = jwt_decode(localStorage.getItem("idome_authority_token"))
    console.log(decoded)
    const roles  = decoded.roles
    return roles
  }catch(error){
    console.log(error)
    return "error"
  }


}
