import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { CircularProgress, IconButton, ModalClose, Sheet } from '@mui/joy';
import MoisArchive from '../mois_archive';
import { Avatar, Button, Chip, Dialog, DialogContent, Divider, List, ListItem, ListItemAvatar, ListItemText, MenuItem, Modal, Tabs, TextField, Typography } from '@mui/material';
import { ClearOutlined, Delete, Done, DoneOutline, EditOutlined, UnarchiveOutlined } from '@mui/icons-material';
import baseUrl from '../../baseUrl';
import { useState } from 'react';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MoisAbonnement() {

  const [abonnementMois, setabonnementMois] = useState("" as any)
  const [uidedit, setuidedit] = useState('' as any);
  const [prenom, setprenom] = useState('' as any);
  const [nom, setnom] = useState('' as any);
  const [tel, settel] = useState('' as any);
  const [carte, setcarte] = useState('' as any);
  const [abonnement, setabonnement] = useState('' as any);
  const [rfid, setrfid] = useState('' as any);
  const [code, setcode] = useState('' as any);
  const [etat, setetat] = useState('' as any);
  const [isCheckPass, setisCheckPass] = useState(false)
  const [error, setError] = useState('' as any);
  const [isCode, setisCode] = useState(false);
  const [isPassLength, setisPassLength] = useState(false);
  const [lenTel, setlenTel] = useState(false)
  const [loading, setloading] = useState(true);
  const [loader, setloader] = useState(false);
  const [suivant, setsuivant] = useState(false)
  const [successStatus, setsuccessStatus] = useState(false)
  const [errorStatus, seterrorStatus] = useState(false)
  const [email, setEmail] = useState('' as any);
  const [openEdit, setopenEdit] = React.useState(false);
  const [abonnementArchive, setabonnementArchive] = useState("" as any)
  const [successArchiveStatus, setsuccessArchiveStatus] = useState(false)
  const [abonnements, setabonnements] = useState("" as any)

  //Archive
  const [value, setValue] = React.useState(0);
  
  const [openedit, setopenedit] = useState("" as any);

  

  const [archive, setArchive] = useState(false);

  let token = window.localStorage.getItem('token')
  const userRole = localStorage.getItem('role')?.split(' ').join('')
  const uid = localStorage.getItem('uid')?.split(' ').join('')

  React.useEffect(() => {
   
   
    
    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      // let tab = []
      // for (const iterator of res.data) {
      //   if(iterator.typeAbonnement =="mois" && iterator.etat){

      //     tab.push(iterator)
         
      //     setabonnementMois(tab)
      //   }
        
      // }

      let tab = []; let tabUser = []; let tabArchive=[];

      for (const iterator of res.data) {

        if (iterator.typeAbonnement === "mois") {
          
          if (!iterator.etat) {
            tabArchive.push(iterator)
            setabonnementArchive(tabArchive)

          }else{
            
            tab.push(iterator)
            setabonnementMois(tab)
          }

        } else if (userRole === "user") {
          if (iterator._id === uid) {
            tabUser.push(iterator);
            setabonnements(tabUser)
          }
        } 

      }

    })

    setTimeout(() => {
      setloading(false)
    }, 300);

    return () => {
      // Effectue les opérations de nettoyage
      setabonnementArchive("");
      // setabonnements("");
      // setabonnementMois("");
    };
      
  },[successStatus || successArchiveStatus])


  const openEditDialog = () => {
    setopenEdit(true);
  };

  const handleClose = () => {
    setopenEdit(false);
  };

  const switchForm = () => {
    suivant ? setsuivant(false) : setsuivant(true)
  }

  const editUser = (e: any) => {
    e.preventDefault();

    const user = {
      "nom": nom, "prenom": prenom, "email": email, "telephone": tel, 
      "code": code, "typeAbonnement": abonnement, "rfid": carte, "etat":etat
    }




    const token = localStorage.getItem('token')

    const config = { headers: { Authorization: token } }
    const data = user;
    console.log(uidedit?.split(' ').join(''));
    console.log(user);
    
    
    baseUrl.patch(`/update/${uidedit}`, data, config).then((res: any) => {
     
      if (res.data.includes("result modifier")) {
       
        setsuccessStatus(true);
        setTimeout(() => {
          setsuccessStatus(false);
          handleClose();
          setsuivant(false)
          
        }, 2000);
      }
    }).catch((error: any) => {
      // console.log(error);

      seterrorStatus(true);
      setTimeout(() => {
        seterrorStatus(false);
      }, 2000);
    })

  }

  function isValidEmail(e: any) {
    return /\S+@\S+\.\S+/.test(e);
  }

  const checkEmail = (e: any) => {
    if (!isValidEmail(e)) {
      setError('Email invalid')
    } else {
      setError(" ");
    }
    setEmail(e);
  }

  function hasWhiteSpace(e: any) {
    var reWhiteSpace = new RegExp("\\s+");

    // Check for white space
    if (reWhiteSpace.test(e)) {

      return true;
    }
    return false;
  }

  const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 90 },
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
      field: 'inscription',
      // headerName: 'Matricule',
      width: 100,
      editable: false,
      align: 'center', flex: 10, headerAlign: 'center',
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
            sx={{ background: "transparent" }}
            onClick={() => {
              setnom(params?.row?.nom)
              setprenom(params?.row?.prenom)
              setEmail(params?.row?.email)
              settel(params?.row?.telephone)
              setcarte(params?.row?.rfid)
              setrfid(params?.row?.rfid)
              setabonnement(params?.row?.typeAbonnement)
              setcode(params?.row?.code)
              setuidedit(params?.row?._id)
              setetat(params?.row?.etat)

              openEditDialog()
            }}
          >
            {/* <EditOutlined sx={{ color: 'red' }} /> */}
            <EditOutlined />
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
      editable: false,
      align: 'center', flex: 10, headerAlign: 'center',
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
      editable: false,
      align: 'center', flex: 10, headerAlign: 'center',
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
      field: 'inscription',
      // headerName: 'Matricule',
      width: 100,
      editable: false,
      align: 'center', flex: 10, headerAlign: 'center',
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



  //Archive
  
  const ActiverUser = (e: any) => {
    e.preventDefault();

    const user = {
      "etat": true
    }




    const token = localStorage.getItem('token')

    const config = { headers: { Authorization: token } }
    const data = user;
    console.log(uidedit?.split(' ').join(''));
    console.log(user);


    baseUrl.patch(`/update/${uidedit}`, data, config).then((res: any) => {

      if (res.data.includes("result modifier")) {

        setsuccessArchiveStatus(true);
        closeeditDialog()
        setTimeout(() => {
          setsuccessArchiveStatus(false);
        }, 2000);
      }
    })

  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const openeditDialog = (i: any) => {
    setopenedit(true)
    setuidedit(i)
  }

  const closeeditDialog = () => {
    setopenedit(false)
  }

  return (
    // <>
    //   {/* <Box sx={{ flexGrow: 1 }}>
    //     <Grid container spacing={2} mt={1} sx={{width:'80%', m:"auto"}}>
    //       <Grid item xs={8}>
    //         <Item sx={{boxShadow:5}}>
    //           <Chip label="ABONNEMENT EN COURS" color='success' deleteIcon={<Done />}/>
    //           </Item>
    //         <Item sx={{mt:1,boxShadow:5}}>
    //         <DataGrid
    //               rows={abonnementMois}
    //               columns={columns}
    //               getRowId={(abonnementMois) => abonnementMois._id}
    //               initialState={{
    //                 pagination: {
    //                   paginationModel: {
    //                     pageSize: 5,
    //                   },
    //                 },
    //               }}
    //               pageSizeOptions={[5]}
    //               // checkboxSelection
    //               disableRowSelectionOnClick
    //               sx={{
    //                 boxShadow:3
    //               }}
    //           />
    //         </Item>
    //       </Grid>
    //       <Grid item xs={4}>
    //         <Item sx={{boxShadow:5}}>
    //           <Chip label="ABONNEMENT EXPIRÉ" color='error' deleteIcon={<Delete />}/>
    //         </Item>
    //         <Item sx={{mt:1, boxShadow:5,maxHeight:'85%'}}>
    //           <MoisArchive />
    //         </Item>

    //       </Grid>
    //     </Grid>
    //   </Box> */}

      
    //   {/* <div style={{ width: "100%" }}>
       
    //     <Dialog open={openEdit} onClose={handleClose}>
          
    //      <DialogContent>
            
    //           {successStatus && <Typography align='center' sx={{ m: "auto", fontSize: '15px', color: "green" }}>Modifié</Typography>}
    //           {errorStatus && <Typography sx={{ m: "auto", fontSize: '15px', color: "red" }}>Une erreur s'est produit</Typography>}
    //        }
    //         {
    //           !suivant &&
    //           <Grid
    //             sx={{
    //               borderRadius: 2,
    //               minHeight: "55vh",
    //               display: 'flex',
    //               width: "auto",
    //               p: 1,
    //               justifyContent: 'center',
    //               flexWrap: 'wrap', background: "#fff",
    //             }}
    //           >
    //             <Typography variant='h6' align='center' sx={{ width: "70%" }}>
    //               Modification
    //             </Typography>



    //             <div style={{ display: 'flex', justifyContent: 'center' }}>
    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 id="nom"
    //                 label="Nom"
    //                 name="nom"
    //                 autoComplete="nom"
    //                 autoFocus
    //                 helperText={!nom && <Typography variant='subtitle2' color="red">Champs vide</Typography>}
    //                 size='small'
    //                 value={nom}
    //                 onChange={(e) => setnom(e.target.value.trimStart())}
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //                 variant="outlined"
    //               />
    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 id="prenom"
    //                 label="Prenom"
    //                 name="prenom"
    //                 helperText={!prenom && <Typography variant='subtitle2' color="red">Champs vide</Typography>}
    //                 autoComplete="prenom"
    //                 autoFocus
    //                 size='small'
    //                 value={prenom}
    //                 onChange={(e) => setprenom(e.target.value.trimStart())}
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //                 variant="outlined"
    //               />
    //             </div>

    //             <div style={{ display: 'flex', justifyContent: 'center' }}>
    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 id="email"
    //                 label="Email Address"
    //                 name="email"
    //                 autoComplete="email"
    //                 autoFocus
    //                 value={email}
    //                 size='small'
    //                 helperText={error && <Typography component="em" sx={{ color: 'red', fontSize: 14 }}>{error}</Typography>}
    //                 onChange={(e) => { checkEmail(e.target.value.trimStart()); hasWhiteSpace(e.target.value) }}
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //                 variant="outlined"
    //               />


    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 id="tel"
    //                 label="Telephone"
    //                 name="tel"
    //                 autoComplete="tel"
    //                 helperText={lenTel && <Typography component="em" sx={{ color: 'red', fontSize: 14 }}>Saisir neuf chiffres</Typography>}
    //                 autoFocus
    //                 size='small'
    //                 value={tel}
    //                 onChange={(e) => {
    //                   settel(e.target.value.replace(/[^0-9]+/g, ''));
    //                   if (e.target.value.length < 9) setlenTel(true)
    //                   else {
    //                     setlenTel(false)
    //                   }
    //                 }}
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //                 variant="outlined"
    //               />
    //             </div>

    //             {
    //               !suivant && <Button
    //                 type="submit"
    //                 fullWidth
    //                 variant="contained"
    //                 onClick={() => switchForm()}
    //                 disabled={!nom || !prenom || !email || !tel || tel.length < 9}
    //                 // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
    //                 sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto', background: "#1F27E2" }}
    //               // disabled={!email}
    //               >
    //                 Suivant
    //               </Button>
    //             }
    //           </Grid>
    //         }
    //         {
    //           suivant &&
    //           <Grid sx={{ borderRadius: 2, minHeight: "40vh", display: 'flex', p: 0, justifyContent: 'center', flexWrap: 'wrap', background: "#fff" }}>
    //             {!successStatus && <Typography variant='h6' align='center' sx={{ width: "70%" }}>
    //             Modification
    //             </Typography>}

    //             <span style={{ display: 'flex', justifyContent: 'center' }}>
    //               <TextField
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 id="carte"
    //                 label="N° de la carte"
    //                 name="carte"
    //                 autoComplete="abonnement"
    //                 autoFocus
    //                 size='small'
    //                 value={carte}
    //                 onChange={(e) => setcarte(e.target.value.trimStart())}
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //                 variant="outlined"
    //               />

    //               <TextField
    //                 id="abonnement"
    //                 select
    //                 label="Type d'abonnement"
    //                 defaultValue=""
    //                 size='small'
    //                 value={abonnement}
    //                 onChange={(e) => {
    //                   setabonnement(e.target.value);
    //                 }}
    //                 // helperText="Please select your currency"
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //               >
    //                 <MenuItem value="mois">
    //                   Mois
    //                 </MenuItem>
    //                 <MenuItem value="semaine">
    //                   Semaine
    //                 </MenuItem>

    //               </TextField>
    //             </span>
    //             <span style={{ display: 'flex', justifyContent: 'center' }}>
                

    //               <TextField
    //                 margin="normal"
    //                 required
    //                 select
    //                 id="etat"
    //                 label="Archiver"
    //                 name="etat"
    //                 autoComplete="Archiver"
    //                 autoFocus
    //                 size='small'
    //                 value={etat}
    //                 onChange={(e) => setetat(e.target.value)}
    //                 sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //                 variant="outlined"
    //               >

    //                 <MenuItem value="true" selected>
    //                   Activer
    //                 </MenuItem>
    //                 <MenuItem value="false">
    //                   Desactiver
    //                 </MenuItem>

    //               </TextField>

    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="code"
    //               label="Code acces"
    //               name="code"
    //               autoComplete="code"
    //               autoFocus
    //               helperText={isCode && <Typography variant='subtitle2' color="red">Maximum 4 chiffres</Typography>}
    //               size='small'
    //               value={code}
    //               onChange={(e) => {
    //                 if (e.target.value.trim().length <= 4) {
    //                   setcode(e.target.value.trim().replace(/[^0-9]+/g, ''));
    //                   setisCode(false);
    //                 } else setisCode(true);

    //               }}
    //               sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
    //               variant="outlined"
    //             />
    //             </span>

                

    //             <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               // disabled={!carte || !password || !confirmPass || !code}
    //               onClick={e => {

    //                 editUser(e)
    //                 setloader(true);
    //                 setTimeout(() => {
    //                   setloader(false)
    //                 }, 1000);
    //               }}
    //               // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
    //               sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto', background: "#1F27E2" }}
    //             // disabled={!email || !password}
    //             >
    //               {
    //                 !loader ?
    //                   "Modifier"
    //                   :
    //                   // <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    //                   <CircularProgress color="success" size='sm' />
    //                 // </Stack>

    //               }
    //             </Button>
    //           </Grid>
    //         }








    //       </DialogContent>
          
    //       <Button onClick={handleClose}>Cancel</Button>
    //       <Button onClick={handleClose}>Subscribe</Button>
        
    //     </Dialog>
    //   </div> */}

    // </>
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} mt={1} sx={{ width: '80%', m: "auto" }}>

          {userRole !== "user" && <Grid item xs={8}>
            <Item sx={{ boxShadow: 5 }}>
              <Chip label="ABONNEMENT EN COURS" color='success' deleteIcon={<Done />} />
            </Item>
            <Item sx={{ mt: 1, boxShadow: 5 }}>
              {abonnementMois.length === 0 && (
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <Chip label="Aucune donnée" />
                </div>
              )
              }
              {userRole !== "user" && abonnementMois.length > 0 && <DataGrid
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
                  boxShadow: 3
                }}
              />}

              {userRole === "user" && <DataGrid
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
                  boxShadow: 3
                }}
              />}
            </Item>
          </Grid>}

          {userRole === "user" &&
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 5 }}>
                <Chip label="ABONNEMENT EN COURS" color='success' deleteIcon={<Done />} />
              </Item>
              <Item sx={{ mt: 1, boxShadow: 5 }}>
                {userRole !== "user" && <DataGrid
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
                    boxShadow: 3
                  }}
                />}

                {userRole === "user" && <DataGrid
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
                    boxShadow: 3
                  }}
                />}
              </Item>
            </Grid>}

          {userRole !== "user" && <Grid item xs={4}>
            <Item sx={{ boxShadow: 5 }}>
              <Chip label="ABONNEMENT EXPIRÉ" color='error' deleteIcon={<Delete />} />
            </Item>
            <Item sx={{ mt: 1, boxShadow: 5, maxHeight: '85%' }}>
              {/* <SemaineArchive /> */}

                

              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                aria-label="scrollable auto tabs example"
                scrollButtons={true}
                orientation='vertical'

              >


                
                <List id="list" sx={{ width: '100%', maxWidth: 360, height: 300, bgcolor: 'background.paper' }}>
                  {successArchiveStatus && <Typography align='center' sx={{ m: "auto", fontSize: '15px', color: "green" }}>Reactivé</Typography>}
                  {
                    userRole !== "user" && abonnementArchive && abonnementArchive.map((val: any) => {

                      return (
                        <>
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt={val.prenom} src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                              primary={val.prenom + " " + val.nom}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    {val.matricule}
                                  </Typography>
                                  &nbsp;
                                  <IconButton onClick={() => openeditDialog(val?._id)}>
                                    <UnarchiveOutlined color='error' />
                                  </IconButton>
                                  
                                </React.Fragment>
                              }
                            />
                            <Divider variant="inset" component="li" />
                          </ListItem>
                        </>
                      )
                    })
                  }
                  {
                    userRole === "user" && !archive &&
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={"val.prenom"} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={"val.prenom" + " " + "val.nom"}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {"val.matricule"}
                              </Typography>
                              &nbsp;
                           
                              {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                          }
                        />
                        <Divider variant="inset" component="li" />
                      </ListItem>

                    </>
                  }
                  {
                    userRole !== "user" && archive &&
                    <>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={"val.prenom"} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={"val.prenom" + " " + "val.nom"}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {"val.matricule"}
                              </Typography>
                              &nbsp;
                              
                              {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                          }
                        />
                        <Divider variant="inset" component="li" />
                      </ListItem>

                    </>
                  }

                {
                  !abonnementArchive && !abonnementArchive && 
                  // <Chip label="AUCUNE ARCHIVE" color='secondary' deleteIcon={<Delete />} />
                  <Typography fontFamily='monospace' color="error" m={1}>
                      AUCUNE ARCHIVE
                  </Typography>
                }


                </List>


              </Tabs>


              <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={openedit}
                onClose={() => setopenedit(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 500,
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg',
                  }}
                >
                  <ModalClose
                    variant="outlined"
                    sx={{
                      top: 'calc(-1/4 * var(--IconButton-size))',
                      right: 'calc(-1/4 * var(--IconButton-size))',
                      boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                      borderRadius: '50%',
                      bgcolor: 'background.body',
                    }}
                    onClick={closeeditDialog}
                  />
                  <Typography
                    // component="h5"
                    id="modal-title"
                    variant="h6"
                    // textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                  >
                    Voulez vous réactiver cette utilisateur
                  </Typography>
                  <Typography id="modal-desc" sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <IconButton title='Valider' onClick={e => ActiverUser(e)}>
                      <DoneOutline color='success' />
                    </IconButton>
                    <IconButton title='Refuser' onClick={closeeditDialog}>
                      <ClearOutlined color='error' />
                    </IconButton>
                  </Typography>
                </Sheet>
              </Modal>







            </Item>

          </Grid>}
        </Grid>
      </Box>




      {/* EDIT USER DIALOG */}

      <div style={{ width: "100%" }}>

        <Dialog open={openEdit} onClose={handleClose}>

          <DialogContent>
            {/* <DialogContentText> */}
            {successStatus && <Typography align='center' sx={{ m: "auto", fontSize: '15px', color: "green" }}>Modifié</Typography>}
            {errorStatus && <Typography sx={{ m: "auto", fontSize: '15px', color: "red" }}>Une erreur s'est produit</Typography>}
            {/* </DialogContentText> */}
            {
              !suivant &&
              <Grid
                sx={{
                  borderRadius: 2,
                  minHeight: "55vh",
                  display: 'flex',
                  width: "auto",
                  p: 1,
                  justifyContent: 'center',
                  flexWrap: 'wrap', background: "#fff",
                }}
              >
                <Typography variant='h6' align='center' sx={{ width: "70%" }}>
                  Modification
                </Typography>



                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nom"
                    label="Nom"
                    name="nom"
                    autoComplete="nom"
                    autoFocus
                    helperText={!nom && <Typography variant='subtitle2' color="red">Champs vide</Typography>}
                    size='small'
                    value={nom}
                    onChange={(e) => setnom(e.target.value.trimStart())}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="prenom"
                    label="Prenom"
                    name="prenom"
                    helperText={!prenom && <Typography variant='subtitle2' color="red">Champs vide</Typography>}
                    autoComplete="prenom"
                    autoFocus
                    size='small'
                    value={prenom}
                    onChange={(e) => setprenom(e.target.value.trimStart())}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    size='small'
                    helperText={error && <Typography component="em" sx={{ color: 'red', fontSize: 14 }}>{error}</Typography>}
                    onChange={(e) => { checkEmail(e.target.value.trimStart()); hasWhiteSpace(e.target.value) }}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  />


                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="tel"
                    label="Telephone"
                    name="tel"
                    autoComplete="tel"
                    helperText={lenTel && <Typography component="em" sx={{ color: 'red', fontSize: 14 }}>Saisir neuf chiffres</Typography>}
                    autoFocus
                    size='small'
                    value={tel}
                    onChange={(e) => {
                      settel(e.target.value.replace(/[^0-9]+/g, ''));
                      if (e.target.value.length < 9) setlenTel(true)
                      else {
                        setlenTel(false)
                      }
                    }}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  />
                </div>

                {
                  !suivant && <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => switchForm()}
                    disabled={!nom || !prenom || !email || !tel || tel.length < 9}
                    // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                    sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto', background: "#1F27E2" }}
                  // disabled={!email}
                  >
                    Suivant
                  </Button>
                }
              </Grid>
            }
            {
              suivant &&
              <Grid sx={{ borderRadius: 2, minHeight: "40vh", display: 'flex', p: 0, justifyContent: 'center', flexWrap: 'wrap', background: "#fff" }}>
                {!successStatus && <Typography variant='h6' align='center' sx={{ width: "70%" }}>
                  Modification
                </Typography>}

                <span style={{ display: 'flex', justifyContent: 'center' }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="carte"
                    label="N° de la carte"
                    name="carte"
                    autoComplete="abonnement"
                    autoFocus
                    size='small'
                    value={carte}
                    onChange={(e) => setcarte(e.target.value.trimStart())}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  />

                  <TextField
                    id="abonnement"
                    select
                    label="Type d'abonnement"
                    defaultValue=""
                    size='small'
                    value={abonnement}
                    onChange={(e) => {
                      setabonnement(e.target.value);
                    }}
                    // helperText="Please select your currency"
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                  >
                    <MenuItem value="mois">
                      Mois
                    </MenuItem>
                    <MenuItem value="semaine">
                      Semaine
                    </MenuItem>

                  </TextField>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center' }}>


                  <TextField
                    margin="normal"
                    required
                    select
                    id="etat"
                    label="Archiver"
                    name="etat"
                    autoComplete="Archiver"
                    autoFocus
                    size='small'
                    value={etat}
                    onChange={(e) => setetat(e.target.value)}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  >

                    <MenuItem value="true" selected>
                      Activer
                    </MenuItem>
                    <MenuItem value="false">
                      Desactiver
                    </MenuItem>

                  </TextField>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="code"
                    label="Code acces"
                    name="code"
                    autoComplete="code"
                    autoFocus
                    helperText={isCode && <Typography variant='subtitle2' color="red">Maximum 4 chiffres</Typography>}
                    size='small'
                    value={code}
                    onChange={(e) => {
                      if (e.target.value.trim().length <= 4) {
                        setcode(e.target.value.trim().replace(/[^0-9]+/g, ''));
                        setisCode(false);
                      } else setisCode(true);

                    }}
                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                    variant="outlined"
                  />
                </span>

                {/* <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="Code acces"
                  name="code"
                  autoComplete="code"
                  autoFocus
                  helperText={isCode && <Typography variant='subtitle2' color="red">Maximum 4 chiffres</Typography>}
                  size='small'
                  value={code}
                  onChange={(e) => {
                    if (e.target.value.trim().length <= 4) {
                      setcode(e.target.value.trim().replace(/[^0-9]+/g, ''));
                      setisCode(false);
                    } else setisCode(true);

                  }}
                  sx={{ backgroundColor: 'white', m: 1, width: '45ch' }}
                  variant="outlined"
                /> */}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // disabled={!carte || !password || !confirmPass || !code}
                  onClick={e => {

                    editUser(e)
                    setloader(true);
                    setTimeout(() => {
                      setloader(false)
                    }, 1000);
                  }}
                  // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                  sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto', background: "#1F27E2" }}
                // disabled={!email || !password}
                >
                  {
                    !loader ?
                      "Modifier"
                      :
                      // <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                      <CircularProgress color="success" size='sm' />
                    // </Stack>

                  }
                </Button>
              </Grid>
            }








          </DialogContent>
          {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
        </Dialog>
      </div>


    </>
  );
}