import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { IconButton, Tab, Tabs, Typography } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';

const columns: GridColDef[] = [
  // { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'email',
    // headerName: 'Email',
    width: 100,
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
      field: 'action',
      // headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <div>      
          <IconButton 
          // onClick={()=> enableUser(params.id)}
          >
            <EditOutlined sx={{ color: 'red' }} />
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
  { id: 1, email: 'Snow', matricule: 'Jon', age: 35 },
  { id: 2, email: 'Lannister', matricule: 'Cersei', age: 42 },
  { id: 3, email: 'Lannister', matricule: 'Jaime', age: 45 },
  { id: 4, email: 'Stark', matricule: 'Arya', age: 16 },
  { id: 5, email: 'Targaryen', matricule: 'Daenerys', age: null },
  { id: 6, email: 'Melisandre', matricule: null, age: 150 },
  { id: 7, email: 'Clifford', matricule: 'Ferrara', age: 44 },
  { id: 8, email: 'Frances', matricule: 'Rossini', age: 36 },
  { id: 9, email: 'Roxie', matricule: 'Harvey', age: 65 },
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

export default function Abonnement_component() {


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };

  return (
    

    <Box sx={{ width: '80%', m:'0 auto',bgcolor:'#fff', p:1 }}>
      {/* <Typography variant='h4' sx={{p:1,boxShadow:1, fontWeight:"bold"}} align='center'>TYPE ABONNEMENT</Typography> */}
            {/* &nbsp; */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} sx={{width:438, m:'0 auto', display:"flex", justifyContent:'center'}} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Abonnement un mois"  {...a11yProps(0)} sx={{borderRight:'1px solid'}}/>
                    {/* <Divider orientation='vertical'/> */}
                    <Tab label="Abonnement une semaine"  {...a11yProps(1)} sx={{borderLeft:'1px solid'}} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>

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

            </TabPanel>
            <TabPanel value={value} index={1}>

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

            </TabPanel>
                    
    </Box>

  );
}
