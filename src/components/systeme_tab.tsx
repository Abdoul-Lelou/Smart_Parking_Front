import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Tab, Tabs, Typography } from '@mui/material';
import { Chip } from '@mui/joy';
import { useEffect, useState } from 'react';



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



export default function SystemTab() {

  const [isActive, setisActive] = useState(true);
  const [isActives, setisActives] = useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  

  const columns: GridColDef[] = [
    {
      field: 'nom',
      width: 150,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Nom '}
        </strong>
      ),
    },
    {
      field: 'etat',
      width: 150,
      editable: true,
      align: 'center', flex: 10, headerAlign: 'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Etat '}
        </strong>
      ),
      renderCell: (params) => (
        <div>      
          {isActive && <Chip variant='solid' color='success' sx={{boxShadow:4}}>en marche</Chip>}
          {isActives && <Chip variant='solid' color='danger' sx={{boxShadow:4}}>À l'arret</Chip>}
  
        </div>
      ),
    },
    
  ];
  
  const rows = [
    { id: 1, nom: 'Buzzer', etat: 'en marche' },
    { id: 2, nom: 'Ecran LCD', etat: 'À l\'arret' },
    { id: 3, nom: 'Keypad', etat: 'en marche' },
    { id: 4, nom: 'Pompe', etat: 'en marche' },
    { id: 5, nom: 'Servo Moteur', etat: 'en marche' },
    { id: 6, nom: 'Capteur Mouvement', etat: "en marche" },
    { id: 7, nom: 'Capteur de Flamme', etat: "en marche" },
    { id: 8, nom: 'Capteur RFID', etat: "À l'arret" },
    //   { id: 7, nom: 'Clifford', etat: 'Ferrara' },
    //   { id: 8, nom: 'Frances', etat: 'Rossini' },
    //   { id: 9, nom: 'Roxie', etat: 'Harvey' },
  ];

  return (

    <Box sx={{ width: '80%', m: '0 auto', bgcolor: '#fff' }}>
      {/* <Typography variant='h4' sx={{ boxShadow: 1, fontWeight: "bold" }} align='center'>Supervision du système</Typography>
      &nbsp; */}

        <Box sx={{  borderColor: 'divider',borderBottom:1 }}>
            <Tabs value={value} sx={{width:'50%',p:1, m:'auto',display:'flex', justifyContent:'center'}} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={<Chip variant="soft" sx={{boxShadow:4}} color='success'>MANDELA</Chip>} {...a11yProps(0)} sx={{borderRight:'1px solid'}}/>
                <Tab label={<Chip variant="soft" sx={{boxShadow:4}} color='info'>SURETÉ</Chip>} {...a11yProps(1)}  />
                <Tab label={<Chip variant="soft" sx={{boxShadow:4}} color='warning'>SIMPLON</Chip>} {...a11yProps(2)} sx={{borderLeft:' 1px solid'}} />
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
              boxShadow: 3,
              '.MuiDataGrid-columnSeparator': {
                display: 'block',
              },
            
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
              boxShadow: 3,
              '.MuiDataGrid-columnSeparator': {
                display: 'block',
              },
            
            }}
          />

        </TabPanel>
        <TabPanel value={value} index={2}>
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

        </TabPanel>


    </Box>

  );
}
