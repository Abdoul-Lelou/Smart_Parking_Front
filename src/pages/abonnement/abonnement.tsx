import * as React from 'react';
import DataTable from '../../components/submit_type';
import ShowBackdrop from '../../components/backdrop';



export default function Abonnement() {

  const [loading, setloading] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])

  return (
    <>
       {loading ? <ShowBackdrop />:<DataTable />}
    </>
  );
}
