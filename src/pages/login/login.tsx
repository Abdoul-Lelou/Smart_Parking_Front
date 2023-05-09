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
import './login.css'
import { useState } from 'react';
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { ToastContainer, toast } from 'react-toastify';
// import baseUrl from '../../baseUrl'


const theme = createTheme();


export default function Login() {

    const [email, setEmail] = useState('' as any);
    const [password, setPassword] = useState('' as any);
    const [loader, setloader] = useState(false);

    const [open, setOpen] = React.useState(false);
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    component="main"
                    className="img"
                    sx={{

                        maxHeight: '100%',
                        width: '80%',
                        margin: '0px auto',
                        // boxShadow: 3,
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
                    }}
                >
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={12}
                        md={12}

                    >


                        <Box
                            sx={{
                                my: 10,
                                mx: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                // border: "1px solid red",
                                // height: "100%",

                                maxWidth: "100%", p: 8, background: "#fff"
                            }}
                        >



                            <Box component="form" noValidate sx={{ maxWidth: "60%", boxShadow: 5, p: 4, background: "#fff" }}>



                                {/* <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined"> */}

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
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={{ backgroundColor: 'white',  m:1, width: '35ch' }}
                                        variant="outlined"
                                    />

                                    
                                {/* </FormControl> */}

                                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>

                                &nbsp;
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={e => {
                                        login(e); setloader(true);
                                        setTimeout(() => {
                                            setloader(false)
                                        }, 2000);
                                    }}
                                    // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                                    sx={{ maxHeight: '50px', maxWidth: '250px', mt: 2 }}
                                    disabled={!email || !password}
                                >
                                    {
                                        !loader ?
                                            "Se Connecter"
                                            :
                                            // <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                            <CircularProgress color="success" size={25} />
                                        // </Stack>

                                    }
                                </Button>

                                <Grid container>
                                    <Grid item xs p={2}>

                                        <Link href="#" variant="body2" onClick={handleOpen}>
                                            <Typography>Mot de passe oublié?</Typography>
                                        </Link>


                                    </Grid>

                                </Grid>
                                {/*  <Copyright sx={{ mt: 5 }} /> */}

                            </Box>

                        </Box>




                    </Grid>
                </Grid>

            </ThemeProvider>



        </>

    );
}