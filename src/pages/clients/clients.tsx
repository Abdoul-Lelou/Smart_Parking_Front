import React, { useEffect } from 'react'
import List_client from '../../components/list_client'
import baseUrl from '../../baseUrl'

const Client = () => {

  let token = window.localStorage.getItem('token')
  useEffect(() => {
    console.log('rrr');
    
    baseUrl.get('/getAll',{headers: {Authorization : token}}).then((res:any) => {
      // if (res.data === "Token is invalid") {
      //   window.location.pathname ="login";
      //   return;
      // }
      // setDataUser([...res.data])
      console.log(res.data);
      
    })
  }, [])
  
  return (
    <>
        <List_client />
    </>
  )
}

export default Client