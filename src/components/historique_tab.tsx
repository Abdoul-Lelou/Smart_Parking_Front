import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'matricule',
    // headerName: 'Nom',
    width: 150,
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
    field: 'entree',
    // headerName: 'Etat',
    width: 150,
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
  },
  {
    field: 'sortie',
    // headerName: 'Etat',
    width: 150,
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
  },
  {
    field: 'site',
    // headerName: 'Etat',
    width: 150,
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

const rows = [
  { id: 1, matricule: 'M14555', entree: 'Jon', sortie: 'Jon', site: 'Fann Hock' },
  { id: 2,matricule: 'M14576', entree: 'Jon', sortie: 'Jon', site: 'Medina' },
  { id: 3, matricule: 'M14525', entree: 'Jon', sortie: 'Jon', site: 'Fann Hock' },
  { id: 4, matricule: 'M14522', entree: 'Jon', sortie: 'Jon', site: 'Grand Dakar' },
  { id: 5,matricule: 'M14730', entree: 'Jon', sortie: 'Jon', site: 'Fann Hock' },
  { id: 6, matricule: 'M14734', entree: 'Jon', sortie: 'Jon', site: 'Medina' },
  { id: 7, matricule: 'M14700', entree: 'Jon', sortie: 'Jon', site: 'Grand Dakar' },
  { id: 8, matricule: 'M14733', entree: 'Jon', sortie: 'Jon', site: 'Medina' },
  { id: 9, matricule: 'M14701', entree: 'Jon', sortie: 'Jon', site: 'Grand Dakar' },
  { id: 10, matricule: 'M13874', entree: 'Jon', sortie: 'Jon', site: 'Medina' },
  { id: 11, matricule: 'M13274', entree: 'Jon', sortie: 'Jon', site: 'Fann Hock' },
  //   { id: 7, nom: 'Clifford', etat: 'Ferrara' },
  //   { id: 8, nom: 'Frances', etat: 'Rossini' },
  //   { id: 9, nom: 'Roxie', etat: 'Harvey' },
];

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



  return (
    
    <Box sx={{ width: '80%', m: '0 auto', bgcolor: '#fff',p:1 }}>
      <Typography variant='h5' sx={{p:1, boxShadow: 1, fontWeight: "bold", }} align='center'>HISTORIQUE STATIONNEMENT</Typography>
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
          boxShadow: 3,
          '.MuiDataGrid-columnSeparator': {
            display: 'block',
          },
         
        }}
      />


    </Box>

  );
}
