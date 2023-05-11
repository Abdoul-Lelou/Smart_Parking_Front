import { useEffect, useState } from 'react'
import Dashboard_component from '../../components/component_dashboard'
import ShowBackdrop from '../../components/backdrop'

const Dashboard = () => {

    const [loading, setloading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])
    
    return (
        <>
            {loading ? <ShowBackdrop />  :  <Dashboard_component />}
        </>
    )
}

export default Dashboard