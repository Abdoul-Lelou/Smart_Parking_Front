import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './edit_user.css'
import { useState } from 'react';
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, useStepContext } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { ToastContainer, toast } from 'react-toastify';
// import baseUrl from '../../baseUrl'


const theme = createTheme();


export default function EditUser() {

    const [email, setEmail] = useState('' as any);
    const [password, setPassword] = useState('' as any);
    const [confirmPass, setconfirmPass] = useState('' as any);
    const [prenom, setprenom] = useState('' as any);
    const [nom, setnom] = useState('' as any);
    const [tel, settel] = useState('' as any);
    const [carte, setcarte] = useState('' as any);
    const [abonnement, setabonnement] = useState('' as any);

    const [loader, setloader] = useState(false);


    const [open, setOpen] = React.useState(false);
    const [suivant, setsuivant] = useState(false)
    const handleOpen = () => setOpen(true);

    //   const notify = (msg:any) => toast.error(msg);
    //   const notifyReset = (msg:any) => toast.success(msg);


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

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    component="main"
                    className="img"
                    sx={{

                        maxHeight: '85%',
                        width: '85%',
                        margin: '0px auto',
                        // boxShadow:5,
                        // border:"1px solid",
                        borderRadius:5,
                        // boxShadow: 3,
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
                                // mx: 18,
                                m:10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                // border: "1px solid red",
                                // height: "100%",

                                maxWidth: "100%", p: 8, background: "#EFF2F8"
                            }}
                        > */}



                            {/* <Box component="form" noValidate sx={{ maxWidth: "100%", boxShadow: 5, background: "#fff" }}> */}
                            {
                                !suivant && <Grid sx={{ minHeight: "73.5vh", display: 'flex', p: 8, justifyContent: 'center',  borderRadius:5, flexWrap: 'wrap', background: "#fff", boxShadow: 4 }}>
                                    <Typography variant='h5' align='center' sx={{ width: "70%", fontWeight:'bold' }}>
                                        Modifier utilisateur
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                suivant && <Grid sx={{ minHeight: "73.5vh", display: 'flex', p: 8, justifyContent: 'center', borderRadius:5, flexWrap: 'wrap', background: "#fff", boxShadow: 4 }}>
                                    <Typography variant='h5' align='center' sx={{ width: "70%",fontWeight:'bold' }}>
                                    Modifier utilisateur
                                    </Typography>



                                    {/* <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="carte"
                                    label="N° de la carte"
                                    name="nom"
                                    autoComplete="nom"
                                    autoFocus
                                    size='small'
                                    value={carte}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ backgroundColor: 'white', m: 1, width: '25ch' }}
                                    variant="outlined"
                                /> */}


                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="abonnement"
                                        label="Type d'abonnement"
                                        name="abonnement"
                                        autoComplete="abonnement"
                                        autoFocus
                                        size='small'
                                        value={abonnement}
                                        onChange={(e) => setabonnement(e.target.value)}
                                        sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                        variant="outlined"
                                    />

                                    <TextField
                                        id="carte"
                                        select
                                        label="N° de la carte"
                                        defaultValue=""
                                        size='small'
                                        value={carte}
                                        onChange={(e) => setEmail(e.target.value)}
                                        // helperText="Please select your currency"
                                        sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                    >
                                        <MenuItem value="semaine">
                                            Semaine
                                        </MenuItem>
                                        <MenuItem value="semaine">
                                            Mois
                                        </MenuItem>

                                    </TextField>

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

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        onClick={e => {
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




                    </Grid>
                {/* </Grid> */}

            </ThemeProvider>



        </>

    );
}