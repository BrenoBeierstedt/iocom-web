import jwt_decode from 'jwt-decode'

export async function userAuth (payload){

  const decoded = jwt_decode(payload.auth)
  const authenticated = {
    status : 'ok',
    type : payload.type,
    currentAuthority : decoded.role
  }

  return authenticated
}

export async function userId (){

  const decoded = jwt_decode(localStorage.getItem("token"))
  const id  = decoded.ID

  return id
}
