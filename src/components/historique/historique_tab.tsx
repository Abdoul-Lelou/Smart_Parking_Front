import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Chip, Typography } from '@mui/material';
import { useState } from 'react';
import baseUrl from '../../baseUrl';
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
  const [stationUser, setstationUser] = useState("" as any)
  const [user, setUser] = useState("" as any);
  const [simpleUser, setsimpleUser] = useState("" as any);

  
  let token = window.localStorage.getItem('token')
  const userRole = localStorage.getItem('role')?.split(' ').join('')
  const userMatricule = localStorage.getItem('matricule')?.split(' ').join('')

  const uid = localStorage.getItem('uid')?.split(' ').join('')

  React.useEffect(() => {
   
    
    baseUrl.get('/getParking',{headers: {Authorization : token}}).then((res:any) => {
      console.log(res.data);
      if (userRole ==="user") {
        let tab=[]
        for (const iterator of res.data) {
          
          
          if(iterator.user === userMatricule){
            
            tab.push(iterator)
            
            setstationUser(tab)
          }
          
        }
      }
      setStation(res.data)
    })
    baseUrl.get('/getAll',{headers: {Authorization : token}}).then((res:any) => {
      // console.log(res.data);
      if (userRole ==="user") {
        let tab=[]
        for (const iterator of res.data) {
          if(iterator.uid === uid){
            
            tab.push(iterator)
            
            setsimpleUser(tab)
          }
        }
      }
      setUser(res.data)
      
    })

  }, [])

 
  const formatDateAndTime = (dateTimeString:any) => {
    const dateTime = new Date(dateTimeString);
    
    const day = dateTime.getDate().toString().padStart(2, '0');
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const year = dateTime.getFullYear().toString();
    
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      // headerName: 'Nom',
      width: 70,
      editable: false,
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
      editable: false,
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
          params?.row?.entrer === true ? <Chip variant='filled' size='medium' color='success' label="Oui"/>
          : <Chip variant='outlined' color='error' label="Non" />
          }   
        </>
      ),
    },
    {
      field: 'sortie',
      // headerName: 'Etat',
      width: 40,
      editable: false,
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
          params?.row?.sortie === true ? <Chip variant='filled' color='success' label="Oui"/>
          : <Chip variant='outlined' color='error' label="Non" />
          }   
        </>
      ),
    },
    {
      field: 'place',
      // headerName: 'Etat',
      width: 120,
      editable: false,
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
      editable: false,
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
          {/* {moment(params?.row?.dateEntrer).add('days').calendar()} */}
          {formatDateAndTime(params?.row?.dateEntrer)}
        </>
      ),
    },
    {
      field: 'dateSortie',
      // headerName: 'Etat',
      width: 180,
      editable: false,
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
          {/* {params?.row?.dateSortie? moment(params?.row?.dateSortie).add('days').calendar():"Pas encore"} */}
          {params?.row?.dateSortie? formatDateAndTime(params?.row?.dateSortie):"Pas encore"}
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

  const columnsUser: GridColDef[] = [
    
    {
      field: 'entrer',
      // headerName: 'Etat',
      width: 40,
      editable: false,
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
          params?.row?.entrer === true  ? <Chip variant='filled' color='success' label="Oui"/>
          : <Chip variant='outlined' color='error' label="Non" />
          }   
        </>
      ),
    },
    {
      field: 'sortie',
      // headerName: 'Etat',
      width: 40,
      editable: false,
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
          params?.row?.sortie === true ? <Chip variant='filled' color='success' label="Oui"/>
          : <Chip variant='outlined' color='error' label="Non" />
          }   
        </>
      ),
    },
    {
      field: 'place',
      // headerName: 'Etat',
      width: 120,
      editable: false,
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
      editable: false,
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
          {formatDateAndTime(params?.row?.dateEntrer)}
        </>
      ),
    },
    {
      field: 'dateSortie',
      // headerName: 'Etat',
      width: 180,
      editable: false,
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
          {/* {moment(params?.row?.dateSortie).format(' ll  HH:mm:ss')} */}
          {params?.row?.dateSortie? formatDateAndTime(params?.row?.dateSortie):"Pas encore"}
        </>
      ),
    },
  ];

  



  return (
    
    <Box sx={{ width: '90%', m: '0 auto', bgcolor: '#fff',p:1 }}>
      <Typography variant='h5' sx={{p:1, boxShadow: 1, fontWeight: "bold", }} align='center'>HISTORIQUE STATIONNEMENT</Typography>
      &nbsp;


      {userRole !=="user" && <DataGrid
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
      />}

      {userRole ==="user" && <DataGrid
        rows={stationUser}
        columns={columnsUser}
        getRowId={(stationUser) => stationUser._id}
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
      />}


    </Box>

  );
}
