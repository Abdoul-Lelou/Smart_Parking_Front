import { useEffect, useState } from 'react'
import HistoriqueTab from '../../components/historique/historique_tab'
import ShowBackdrop from '../../components/backdrop';

const Historique = () => {
  const [loading, setloading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])
    
  return (
    <>
       {loading ? <ShowBackdrop />  :  <HistoriqueTab />}
    </>
  )
}

export default Historique