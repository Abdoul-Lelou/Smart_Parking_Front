import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Chip, Typography } from '@mui/material';
import { useState } from 'react';
import baseUrl from '../baseUrl';
import moment from 'moment';




interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HistoriqueTab() {


  const [station, setStation] = useState("" as any)
  const [user, setUser] = useState("" as any);
  
  let token = window.localStorage.getItem('token')
  React.useEffect(() => {
   
    
    baseUrl.get('/getParking',{headers: {Authorization : token}}).then((res:any) => {
      // console.log(res.data);
      setStation(res.data)
    })
    baseUrl.get('/getAll',{headers: {Authorization : token}}).then((res:any) => {
      // console.log(res.data);
      setUser(res.data)
    })
    console.log(station);
    

    // tabStation();
  }, [])

 
  const tabStation =()=>{

    const newTabs = [...station];
    console.log(station);
    
    for (const iterator1 of station) {
      for (const iterator2 of user) {
        if(iterator1.user === iterator1._id){
          
          // newTabs[1].items.push(pickedItem);
        }
        // setTabs(newTabs);
        // setstationTab(...[{ matricule: iterator1?.matricule, entrer: iterator1.entrer, sortie: iterator1.sortie, site: iterator1.place, dateEntrer: iterator1.dateEntrer, dateSortie:iterator1.dateSortie }])
      }
    }
  }

  // console.log("test :", stationTa);
  

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      // headerName: 'Nom',
      width: 70,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Matricule '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
    },
    {
      field: 'entrer',
      // headerName: 'Etat',
      width: 40,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Entrée '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>      
          {
          params?.row?.sortie ==="1" ? <Chip variant='filled' color='success' label="Oui"/>
          : <Chip variant='outlined' color='error' label="Non" />
          }   
        </>
      ),
    },
    {
      field: 'sortie',
      // headerName: 'Etat',
      width: 40,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Sortie '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>        
          {
          params?.row?.sortie ==="1" ? <Chip variant='filled' color='success' label="Oui"/>
          : <Chip variant='outlined' color='error' label="Non" />
          }   
        </>
      ),
    },
    {
      field: 'place',
      // headerName: 'Etat',
      width: 120,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Site '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
    },
    {
      field: 'dateEntrer',
      // headerName: 'Etat',
      width: 180,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Date entrée '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>      
          {moment(params?.row?.dateEntrer).format('LL')}
        </>
      ),
    },
    {
      field: 'dateSortie',
      // headerName: 'Etat',
      width: 180,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Date sortie '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>      
          
          {moment(params?.row?.dateSortie).format('LL')}
        </>
      ),
    },
    //   {
    //       field: 'action',
    //       headerName: 'Actions',
    //       width: 150,
    //       sortable: false,
    //       renderCell: (params) => (
    //         <div>      
    //           <IconButton 
    //           // onClick={()=> enableUser(params.id)}
    //           >
    //             <EditOutlined sx={{ color: 'red' }} />
    //           </IconButton>
    //         </div>
    //       ),
    //     },
  
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];



  return (
    
    <Box sx={{ width: '90%', m: '0 auto', bgcolor: '#fff',p:1 }}>
      <Typography variant='h5' sx={{p:1, boxShadow: 1, fontWeight: "bold", }} align='center'>HISTORIQUE STATIONNEMENT</Typography>
      &nbsp;


      <DataGrid
        rows={station}
        columns={columns}
        getRowId={(station) => station._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          sorting: {
            sortModel: [{ field: 'dateEntrer', sort: 'asc' }],
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
        
        sx={{
          boxShadow: 3,
          '.MuiDataGrid-columnSeparator': {
            display: 'block',
          },
         
        }}
      />


    </Box>

  );
}
