import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, MenuItem, Tab, Tabs, TextField, Typography } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import { useState } from 'react';
import baseUrl from '../../baseUrl';



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

  const [open, setOpen] = React.useState(false);

  
  const [value, setValue] = React.useState(0);
  const [abonnementMois, setabonnementMois] = useState("" as any)
  const [abonnementSemaine, setabonnementSemaine] = useState("" as any)
  const [editId, seteditId] = useState("" as any)
  const [abonnement, setabonnement] = useState("" as any)
  const [successMsg, setsuccessMsg] = useState(false)


  let token = window.localStorage.getItem('token')
  React.useEffect(() => {
    
    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      let tab1 = []
      let tab2 = [];
      for (const iterator of res.data) {
        if(iterator.typeAbonnement =="mois"){

          tab1.push(iterator)
          console.log("tab1: ....",tab1);
          setabonnementMois(tab1)
        }else if(iterator.typeAbonnement =="semaine"){
          tab2.push(iterator)
          console.log("tab2: ....",tab2);
          setabonnementSemaine(tab2)
        }
        
      }
      
    })
  }, [successMsg])

  const editAbonnement =(e:any)=>{

    e.preventDefault();

    const user = {"typeAbonnement": abonnement}




    const token = localStorage.getItem('token')

    const config = { headers: { Authorization: token } }
    const data = user;
    // console.log(uidedit?.split(' ').join(''));
    console.log(editId);
    
    
    baseUrl.patch(`/update/${editId}`, data, config).then((res: any) => {
     
      if (res.data.includes("result modifier")) {
       console.log("tout va bien");
       
        setsuccessMsg(true);
        setTimeout(() => {
          setsuccessMsg(false);
          handleClose();
        }, 2000);
      }
    }).catch((error: any) => {
      // console.log(error);

      // seterrorStatus(true);
      // setTimeout(() => {
      //   seterrorStatus(false);
      // }, 2000);
    })
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'email',
      // headerName: 'Email',
      width: 100,
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
    {
      field: 'matricule',
      // headerName: 'Matricule',
      width: 100,
      editable: false,
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
            onClick={()=> {handleClickOpen(); seteditId(params?.row?._id)} }
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

  return (
    
    <>
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
                  rows={abonnementMois}
                  getRowId={(abonnementMois) => abonnementMois._id}
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
                />

              </TabPanel>
                      
      </Box>
      <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>TYPE ABONNEMENT</DialogTitle>
        <DialogContent>
          {successMsg && <DialogContentText color="green">Modifié</DialogContentText>}
          <TextField
              autoFocus
              select
              margin="dense"
              id="name"
              label={!successMsg && "Changer Type"}
              type="email"
              fullWidth
              variant="standard"
              onChange={(e)=>setabonnement(e.target.value)}
            > 
              <MenuItem  value="mois">
                Mois
              </MenuItem>
              <MenuItem  value="semaine">
                Semaine
              </MenuItem>
            </TextField>
        </DialogContent>
        <DialogActions>
          <Button disabled={!abonnement} onClick={(e)=> editAbonnement(e)}>Modifier</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}
