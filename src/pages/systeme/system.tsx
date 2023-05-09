import React, { useState } from 'react'
import SystemTab from '../../components/systeme'
import ShowBackdrop from '../../components/backdrop';

const System = () => {
  const [loading, setloading] = useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])
  return (
    
    <>
       {loading ?
        <ShowBackdrop />
       :
        <SystemTab />
       }
    </>

  )
}

export default System