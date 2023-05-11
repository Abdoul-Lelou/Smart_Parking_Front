import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import './inscription.css'
import { useState } from 'react';
import { CircularProgress, MenuItem } from '@mui/material';
import ShowBackdrop from '../../components/backdrop';
import baseUrl from '../../baseUrl';
// import { ToastContainer, toast } from 'react-toastify';
// import baseUrl from '../../baseUrl'




export default function Inscription() {

    const [email, setEmail] = useState('' as any);
    const [password, setPassword] = useState('' as any);
    const [confirmPass, setconfirmPass] = useState('' as any);
    const [prenom, setprenom] = useState('' as any);
    const [nom, setnom] = useState('' as any);
    const [tel, settel] = useState('' as any);
    const [carte, setcarte] = useState('' as any);
    const [abonnement, setabonnement] = useState('' as any);
    const [code, setcode] = useState('' as any);


    const [loader, setloader] = useState(false);


    const [open, setOpen] = React.useState(false);
    const [suivant, setsuivant] = useState(false)
    const handleOpen = () => setOpen(true);

    //   const notify = (msg:any) => toast.error(msg);
    //   const notifyReset = (msg:any) => toast.success(msg);

    const [loading, setloading] = useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])

    const login = async (e: any) => {
        e.preventDefault();
        // Connexion(email,password)
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const switchForm = () => {
        suivant ? setsuivant(false) : setsuivant(true)
    }

    const signin =(e:any)=>{
        e.preventDefault();

        console.log(email,password, code,nom, prenom, abonnement, carte, tel);

        
            // e.preventDefault()
        
          
            const user ={
              "nom":nom,"prenom":prenom,"email":email,"password":password,
              "telephone":tel,"code":code,"typeAbonnement":abonnement,"numeroCarte":carte
            }
         
        
        
        
            const token = localStorage.getItem('token')
        
            const config = { headers: { Authorization: token } }
            const data = user
        
            baseUrl.post("/post", data, config).then((res:any) => {
              console.log(res.data);
              
            //   if(res.data =="Utilisateur ajouté"){
            //     setsuccessStatus(true);
            //     // setNom('');setPrenom('');setEmail('');setPassword('');setPassword2('');setRole('')
            //     setTimeout(() => {
            //     setsuccessStatus(false);
            //     window.location.reload();  
            //     }, 2000);
            //     // vérification si l'email existe déjà
            //   }else if(res.data.code =="auth/email-already-in-use"){
            //     seterrorStatus(true);
            //     setmsgerror("Email existe déjà")
            //     setTimeout(() => {
            //       seterrorStatus(false);  
            //     }, 3000);
            //   }
            //   // vérification du format email
            //   else if(res.data.code =="auth/invalid-email"){
            //     seterrorStatus(true);
            //     setmsgerror("Email invalide")
            //     setTimeout(() => {
            //       seterrorStatus(false);  
            //     }, 3000);
            //   }
            }).catch((error:any) =>{
                console.log(error);
                
                // seterrorStatus(true);
                // setTimeout(() => {
                //   seterrorStatus(false);  
                // }, 2000);
            })
        
    }

    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                {loading ?
                    <ShowBackdrop/>
                :
                    <Grid
                        container
                        component="main"
                        className="img"
                        sx={{

                            // minHeight: '100%',
                            width: '80%',
                            margin: '0px auto',
                            
                            // border: "1px solid red",
                            boxShadow: 3,
                            p:10,
                            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
                        }}
                    >
                        <CssBaseline />
                        {/* <Grid
                            item
                            xs={false}
                            sm={12}
                            md={12}

                        > */}


                            {/* <Box
                                sx={{
                                    // my: 8,
                                    // mx: 0,
                                    // m:10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    // border: "1px solid red",
                                    // height: "100%",

                                    // maxWidth: "100%", 
                                    p: 8, background: "#EFF2F8"
                                }}
                            > */}



                                {/* <Box component="form" noValidate sx={{ maxWidth: "100%", boxShadow: 5, background: "#fff" }}> */}
                                {
                                    !suivant && <Grid sx={{borderRadius:2, minHeight: "55vh", display: 'flex', p: 2, justifyContent: 'center', flexWrap: 'wrap', background: "#fff", boxShadow: 4 }}>
                                        <Typography variant='h6' align='center' sx={{ width: "70%" }}>
                                            Inscription
                                        </Typography>



                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="nom"
                                            label="Nom"
                                            name="nom"
                                            autoComplete="nom"
                                            autoFocus
                                            size='small'
                                            value={nom}
                                            onChange={(e) => setnom(e.target.value)}
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
                                            autoComplete="prenom"
                                            autoFocus
                                            size='small'
                                            value={prenom}
                                            onChange={(e) => setprenom(e.target.value)}
                                            sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                            variant="outlined"
                                        />

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
                                            onChange={(e) => setEmail   (e.target.value)}
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
                                            autoFocus
                                            size='small'
                                            value={tel}
                                            onChange={(e) => settel(e.target.value)}
                                            sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                            variant="outlined"
                                        />

                                        {
                                            !suivant && <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                onClick={() => switchForm()}
                                                // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                                                sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto', background:"#1F27E2" }}
                                                // disabled={!email}
                                            >
                                                Suivant
                                            </Button>
                                        }
                                    </Grid>
                                }
                                {
                                    suivant && <Grid sx={{borderRadius:2, minHeight: "55vh", display: 'flex', p: 2, justifyContent: 'center', flexWrap: 'wrap', background: "#fff", boxShadow: 4 }}>
                                        <Typography variant='h6' align='center' sx={{ width: "70%" }}>
                                            Inscription
                                        </Typography>

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
                                            onChange={(e) => setcarte(e.target.value)}
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
                                            onChange={(e) => {setabonnement(e.target.value); console.log(abonnement);
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

                                        {/* <TextField
                                            // id="filled-select-currency-native"
                                            select
                                            label="Type d'abonnement"
                                            // defaultValue="EUR"
                                            SelectProps={{
                                                native: true,
                                            }}
                                            size='small'
                                            // helperText="Please select your currency"
                                            // variant="filled"
                                            onChange={(e) => {setabonnement(e.target.value); console.log(abonnement);
                                            }}
                                            sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                            >
                                            
                                                <option value="mois">
                                                    Mois
                                                </option>
                                                <option value="semaine">
                                                    Semaine
                                                </option>
                                        
                                            </TextField> */}

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="password"
                                            label="Mot de passe"
                                            name="password"
                                            autoComplete="password"
                                            autoFocus
                                            value={password}
                                            size='small'
                                            onChange={(e) => setPassword(e.target.value)}
                                            sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                            variant="outlined"
                                        />


                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="confirm"
                                            label="Confirmer mot de passe"
                                            name="confirm"
                                            autoComplete="confirm"
                                            autoFocus
                                            size='small'
                                            value={confirmPass}
                                            onChange={(e) => setconfirmPass(e.target.value)}
                                            sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                            variant="outlined"
                                        />

                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="code"
                                            label="Code acces"
                                            name="code"
                                            autoComplete="code"
                                            autoFocus
                                            size='small'
                                            value={code}
                                            onChange={(e) => setcode(e.target.value)}
                                            sx={{ backgroundColor: 'white', m: 1, width: '45ch' }}
                                            variant="outlined"
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            onClick={e => {

                                                signin(e)
                                                setloader(true);
                                                setTimeout(() => {
                                                    setloader(false)
                                                }, 2000);
                                            }}
                                            // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                                            sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto' , background:"#1F27E2"}}
                                            // disabled={!email || !password}
                                        >
                                            {
                                                !loader ?
                                                    "Valider"
                                                    :
                                                    // <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                                    <CircularProgress color="success" size={25} />
                                                // </Stack>

                                            }
                                        </Button>
                                    </Grid>
                                }

                                {/* </Box> */}


                            {/* </Box> */}




                        {/* </Grid> */}
                    </Grid>
                }

            {/* </ThemeProvider> */}



        </>

    );
}