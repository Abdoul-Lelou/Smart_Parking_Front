import { EditOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/joy';
import { Typography } from '@mui/material';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import React from 'react'

const List_client = () => {
    const columns: GridColDef[] = [
        // { field: 'id', headerName: 'ID', width: 90 },
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
            field: 'email',
            // headerName: 'Email',
            width: 150,
            editable: true,
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
            field: 'adresse',
            // headerName: 'Email',
            width: 100,
            editable: true,
            align:'center', flex:10, headerAlign:'center',
            renderHeader: (params: GridColumnHeaderParams) => (
              <strong>
                {'Adresse '}
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
            editable: true,
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
            field: 'action',
            // headerName: 'Actions',
            width: 100,
            sortable: false,
            renderCell: (params) => (
              <div>      
                <IconButton 
                // onClick={()=> enableUser(params.id)}
                >
                    hhhh
                  {/* <EditOutlined sx={{ color: 'red' }} /> */}
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
        { id: 1, prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D' },
        { id: 2,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
        { id: 3,  prenom: 'Andre', nom: 'Merlin', email: 'Andre@gmail.com', matricule: 'M52dd5', adresse: 'Dakar', rfid:'C8D986D'},
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
    </Box>
  )
}

export default List_client