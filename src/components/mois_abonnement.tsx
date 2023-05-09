import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { IconButton } from '@mui/joy';
import MoisArchive from './mois_archive';
import { Chip } from '@mui/material';
import { Delete, Done } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MoisAbonnement() {

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
  
  const rows = [
    { id: 1, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 2, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 3, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 4, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 5, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 6, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 7, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 8, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
    { id: 9, prenom: 'Richard',  nom: 'Snow', matricule: 'M58dds', inscription: "25 mars 2023" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mt={1} sx={{width:'80%', m:"auto"}}>
        <Grid item xs={8}>
          <Item sx={{boxShadow:5}}>
            <Chip label="ABONNEMENT EN COURS" color='success' deleteIcon={<Done />}/>
            </Item>
          <Item sx={{mt:1,boxShadow:5}}>
          <DataGrid
                rows={rows}
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
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{boxShadow:5}}>
            <Chip label="ABONNEMENT EXPIRÉ" color='error' deleteIcon={<Delete />}/>
          </Item>
          <Item sx={{mt:1, boxShadow:5,maxHeight:'85%'}}>
            <MoisArchive />
          </Item>

        </Grid>
      </Grid>
    </Box>
  );
}