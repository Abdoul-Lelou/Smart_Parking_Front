import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, IconButton, MenuItem, Switch, Tab, Tabs, TextField, Typography } from '@mui/material';
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
  const [tab, setTab] = useState("" as any)
  const [successMsg, setsuccessMsg] = useState(false)
  const [valideStatus, setvalideStatus] = useState(false)


  let token = window.localStorage.getItem('token')
  React.useEffect(() => {
    
    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      let tab1 = []
      let tab2 = [];
      setTab(res.data)
      for (const iterator of res.data) {
        if(iterator.typeAbonnement =="mois"){

          tab1.push(iterator)
          setabonnementMois(tab1)
        }else if(iterator.typeAbonnement =="semaine"){
          tab2.push(iterator)
          setabonnementSemaine(tab2)
        }
        
      }
      
    })
  }, [successMsg])

  const editAbonnement =(e:any)=>{

    e.preventDefault();

    
    let userStatus = tab && tab?.find((x:any)=> x?._id === editId)
    let etat = userStatus?.etat
    
    const user = {"typeAbonnement": abonnement, "dateInscrit": new Date(), "etat": !etat}

    const token = localStorage.getItem('token')

    const config = { headers: { Authorization: token } }
    const data = user;
    // console.log(uidedit?.split(' ').join(''));
    //console.log(editId);
    
    
    baseUrl.patch(`/update/${editId}`, data, config).then((res: any) => {
     
      if (res.data.includes("result modifier")) {
       
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

  const editUser = (e: any) => {
    e.preventDefault();

    let userStatus = tab && tab?.find((x:any)=> x?._id === editId)
    let etat = userStatus?.etat?false:true
    setvalideStatus(etat)
    // etat ? setvalideStatus(false):setvalideStatus(true)
    const config = { headers: { Authorization: token } }
    if(userStatus.etat=== true){
      let data = {"etat":false, "dateInscrit": "2020-01-01T00:00:00.054Z",}
      baseUrl.patch(`/update/${userStatus?._id}`, data, config).then((res: any) => {
     
        if (res.data.includes("result modifier")) {
         
          setsuccessMsg(true);
          setTimeout(() => {
            setsuccessMsg(false);
            handleClose();
          }, 2000);
        }
      })
    }
    else{
      let data = {"etat":true,"dateInscrit": new Date()}
      baseUrl.patch(`/update/${userStatus?._id}`, data, config).then((res: any) => {
     
        if (res.data.includes("result modifier")) {
         
          setsuccessMsg(true);
          setTimeout(() => {
            setsuccessMsg(false);
            handleClose();
          }, 2000);
        }
      })
    }
    

    // return;
    
   
  }

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
      field: 'status',
      // headerName: 'Matricule',
      width: 100,
      editable: false,
      align:'center', flex:10, headerAlign:'center',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong>
          {'Status '}
            {/* <span role="img" aria-label="enjoy">
              🎂
            </span> */}
        </strong>
      ),
      renderCell: (params) => (
        <>      
          
              {
             
              checkDate( Date.parse(params?.row?.dateInscrit)) || !params?.row?.etat?
                <Chip variant='filled' sx={{boxShadow:5}} size='small' color='error' label={"Expiré"} />
              : 
                <Chip variant='outlined' sx={{boxShadow:5}} size='small' color='success' label={"Valide"} />
              
              }
            {/* <EditOutlined sx={{ color: 'red' }} /> */}
         
        </>
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
            onClick={()=> {handleClickOpen(); seteditId(params?.row?._id); setvalideStatus(params?.row?.etat)} }
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
              type="text"
              fullWidth
              variant="standard"
              onChange={(e)=>{
                setabonnement(e.target.value);
                setTimeout(() => {
                  setabonnement('')
                }, 2000);
              }}
            > 
              <MenuItem selected={true} disableGutters disabled sx={{display:'flex', justifyContent:'center'}}>
                .....Choisir.....
              </MenuItem>
              <MenuItem  value="mois">
                Mois
              </MenuItem>
              <MenuItem  value="semaine">
                Semaine
              </MenuItem>
          </TextField>
          &nbsp;
          <FormGroup>
            <FormControlLabel 
              control={
                <Switch 
                  defaultChecked={valideStatus} 
                  onChange={(e)=>editUser(e)}
                />
              } 
              label={!valideStatus ? "Reactiver": "Activer"} 
            />

            
          </FormGroup>
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
