import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/joy';
import SemaineArchive from './semaine_archive';
import { Chip } from '@mui/material';
import { Delete, Done } from '@mui/icons-material';
import { useState } from 'react';
import baseUrl from '../baseUrl';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SemaneAbonnement() {

  const [abonnementSemaine, setabonnementSemaine] = useState("" as any)
  const [abonnements, setabonnements] = useState("" as any)


  let token = window.localStorage.getItem('token')
  const userRole = localStorage.getItem('role')?.split(' ').join('')
  const uid = localStorage.getItem('uid')?.split(' ').join('')

  React.useEffect(() => {
   
    console.log("res.data");
    
    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      let tab = []; let tabUser = [];
      for (const iterator of res.data) {
        if(iterator.typeAbonnement =="semaine"){

          tab.push(iterator)
          console.log(tab);
          setabonnementSemaine(tab)
        }else if(userRole ==="user"){
          if (iterator._id === uid) {
            tabUser.push(iterator);
            setabonnements(tabUser)
          }
        }
        
      }
      
    })


  }, [])

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'prenom',
      // headerName: 'Email',
      width: 100,
      editable: true,
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
      field: 'nom',
      // headerName: 'Email',
      width: 100,
      editable: true,
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
      field: 'matricule',
      // headerName: 'Matricule',
      width: 100,
      editable: true,
      align:'center', flex:10, headerAlign:'center',
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
      field: 'inscription',
      // headerName: 'Matricule',
      width: 100,
      editable: true,
      align:'center', flex:10, headerAlign:'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Inscription '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>      
          {moment(params.row.dateInscrit).format('ll')}
        </>
      ),
    },
    {
        field: 'action',
        // headerName: 'Actions',
        width: 100,
        sortable: false,
        renderCell: (params) => (
          <div>      
            <IconButton 
            // onClick={()=> enableUser(params.id)}
            >
              {/* <EditOutlined sx={{ color: 'red' }} /> */}
              supp
            </IconButton>
          </div>
        ),
        renderHeader: (params: GridColumnHeaderParams) => (
          <strong>
            {'Action '}
              {/* <span role="img" aria-label="enjoy">
                🎂
              </span> */}
          </strong>
        ),
      },
  ];

  const columnsUser: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'prenom',
      // headerName: 'Email',
      width: 80,
      editable: true,
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
      field: 'nom',
      // headerName: 'Email',
      width: 80,
      editable: true,
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
      field: 'matricule',
      // headerName: 'Matricule',
      width: 80,
      editable: true,
      align:'center', flex:10, headerAlign:'center',
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
      field: 'inscription',
      // headerName: 'Matricule',
      width: 100,
      editable: true,
      align:'center', flex:10, headerAlign:'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Inscription '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>      
          {moment(params.row.dateInscrit).format('ll')}
        </>
      ),
    },
    {
        field: 'typeAbonnement',
        width: 150,
        sortable: false,
        renderHeader: () => (
          <strong>
            {'Abonnement '}
              {/* <span role="img" aria-label="enjoy">
                🎂
              </span> */}
          </strong>
        ),
      },
  ];
  
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mt={1} sx={{width:'80%', m:"auto"}}>
        
        {userRole !=="user" && <Grid item xs={8}>
          <Item sx={{boxShadow:5}}>
            <Chip label="ABONNEMENT EN COURS" color='success' deleteIcon={<Done />}/>
            </Item>
          <Item sx={{mt:1,boxShadow:5}}>
          {userRole !=="user" &&<DataGrid
                rows={abonnementSemaine}
                getRowId={(abonnementSemaine) => abonnementSemaine._id}
                columns={columns}
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
            />}

            {userRole ==="user" &&<DataGrid
                rows={abonnements}
                getRowId={(abonnements) => abonnements._id}
                columns={columnsUser}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                sx={{
                  boxShadow:3
                }}
            />}
          </Item>
        </Grid>}

        {userRole ==="user" && 
        <Grid item xs={12}>
          <Item sx={{boxShadow:5}}>
            <Chip label="ABONNEMENT EN COURS" color='success' deleteIcon={<Done />}/>
            </Item>
          <Item sx={{mt:1,boxShadow:5}}>
          {userRole !=="user" &&<DataGrid
                rows={abonnementSemaine}
                getRowId={(abonnementSemaine) => abonnementSemaine._id}
                columns={columns}
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
            />}

            {userRole ==="user" &&<DataGrid
                rows={abonnements}
                getRowId={(abonnements) => abonnements._id}
                columns={columnsUser}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                sx={{
                  boxShadow:3
                }}
            />}
          </Item>
        </Grid>}

        {userRole !=="user" && <Grid item xs={4}>
          <Item sx={{boxShadow:5}}>
            <Chip label="ABONNEMENT EXPIRÉ" color='error' deleteIcon={<Delete />}/>
          </Item>
          <Item sx={{mt:1, boxShadow:5,maxHeight:'85%'}}>
            <SemaineArchive />
          </Item>

        </Grid>}
      </Grid>
    </Box>
  );
}