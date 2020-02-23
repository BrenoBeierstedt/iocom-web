import jwt_decode from 'jwt-decode'

export async function userAuth (payload){
  let authenticated
  let decoded

  try{
    decoded = jwt_decode(payload.auth)
    authenticated = {
      status : 'ok',
      type : payload.type,
      currentAuthority : decoded.role
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

export async function userId (){

  const decoded = jwt_decode(localStorage.getItem("token"))
  const id  = decoded.ID

  return id
}
