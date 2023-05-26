import { EditOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/joy';
import { Chip, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl';
import moment from 'moment';



const List_client=() => {

  const [clientData, setclientData] = useState("" as any)
  let token = window.localStorage.getItem('token')
  useEffect(() => {
    
    baseUrl.get('/getAll',{headers: {Authorization : token}}).then((res:any) => {
      // if (res.data === "Token is invalid") {
      //   window.location.pathname ="login";
      //   return;
      // }
      // setDataUser([...res.data])
      console.log(res.data);
      setclientData(res.data)
    })
  }, [])

  const checkDate =(dateInMilliseconds: string | number | Date)=>{
    // const dateInMilliseconds = 1651161600000; // Replace this with the actual date in milliseconds
    const dateObject = new Date(dateInMilliseconds);
    const currentDate = new Date();

    currentDate.setMonth(currentDate.getMonth() - 1); // Subtract one month from the current date

    if (dateObject > currentDate) {
      // console.log('The date is within the last month.');
      return false
    } else {
      // console.log('The date is more than a month ago.');
      return true
    }
  }

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
          field: 'nom',
          // headerName: 'Email',
          width: 100,
          editable: false,
          align:'center', flex:10, headerAlign:'center',
          renderHeader: (params: GridColumnHeaderParams) => (
            <strong>
              {'Nom '}
                {/* <span role="img" aria-label="enjoy">
                  🎂
                </span> */}
            </strong>
          ),
        },
        {
            field: 'prenom',
            // headerName: 'Email',
            width: 100,
            editable: false,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Prénom '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
          },
          {
            field: 'email',
            // headerName: 'Email',
            width: 150,
            editable: false,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Email '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
          },  
        // {
        //   field: 'matricule',
        //   // headerName: 'Matricule',
        //   width: 100,
        //   editable: false,
        //   align:'center', flex:10, headerAlign:'center',
        //   renderHeader: (params: GridColumnHeaderParams) => (
        //     <strong>
        //       {'Matricule '}
        //         {/* <span role="img" aria-label="enjoy">
        //           🎂
        //         </span> */}
        //     </strong>
        //   ),
        // },
        {
            field: 'code',
            // headerName: 'Email',
            width: 20,
            editable: false,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Code Accès '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
          },
          {
            field: 'rfid',
            // headerName: 'Email',
            width: 100,
            editable: false,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Rfid '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
          },
          {
            field: 'telephone',
            // headerName: 'Email',
            width: 100,
            editable: false,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Tel '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
          },
          {
            field: 'dateInscrit',
            // headerName: 'Email',
            width: 120,
            editable: false,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Inscrit '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
            renderCell: (params) => (
                <>
                  {/* {moment(params?.row?.dateInscrit).format("L")} */}
                  {formatDateAndTime(params?.row?.dateInscrit)}
                </>
              ),
          },
        {
            field: 'Restant',
            // headerName: 'Actions',
            width: 120,
            sortable: false,
            renderCell: (params) => (
              <>      
                
                    {

                        


                   
                    checkDate( Date.parse(params?.row?.dateInscrit)) || !params?.row?.etat?
                      <Chip variant='filled' sx={{boxShadow:5}} size='small' color='error' label={"Expiré"} />
                    : 
                      <Chip variant='filled' sx={{boxShadow:5}} size='small' color='success' label={"Valide"} />
                    
                    }
                  {/* <EditOutlined sx={{ color: 'red' }} /> */}
               
              </>
            ),
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Status '}
                  {/* <span role="img" aria-label="enjoy">
                    🎂
                  </span> */}
              </strong>
            ),
          },
      
        
      ];
      
      const rows = [
        { _id: 1, prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D' },
        { _id: 2,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { _id: 3,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { id: 4,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'} ,
        { id: 5,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { id: 6,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { id: 7,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { id: 8,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { id: 9,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
      ];


      
  return (
    <Box sx={{p:1, width: '90%', m: '0 auto', bgcolor: '#fff' }}>
      <Typography variant='h5' sx={{p:1,m:1, boxShadow: 1, fontWeight: "bold" }} align='center'>LISTE CLIENTS</Typography>
      &nbsp;
        <DataGrid
                rows={clientData}
                columns={columns}
                getRowId={(clientData) => clientData._id}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
                sx={{
                  boxShadow:3
                }}
            />
    </Box>
  )
}

export default List_client