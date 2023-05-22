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
import { useEffect, useState } from 'react';
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import baseUrl from '../../baseUrl';
import axios from "axios";


const theme = createTheme();


export default function Login() {

    const [email, setEmail] = useState('' as any);
    const [password, setPassword] = useState('' as any);
    const [loader, setloader] = useState(false);
    const [error, setError] = useState('' as any);
    const [errorMsg, setErrorMsg] = useState(false);
    const [passlen, setpasslen] = useState(false)


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const [showPassword, setShowPassword] = React.useState(false);

      const notify = (msg:any) => toast.error(msg);
      const notifyReset = (msg:any) => toast.success(msg);


    


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    useEffect(() => {
        // getApiData();
        // try {
        //     axios({
  
        //         // Endpoint to send files
        //         url: "http://localhost:8000/api/getAll/",
        //         method: "POST",
        //         headers: {
        //           authorization: "your token comes here",
        //         },
                
            
        //       })
        //         // Handle the response from backend here
        //         .then((res) => {console.log(res.data);
        //          })
            
        //         // Catch errors if any
        //         .catch((err) => { });
        // } catch (error:any) {
            
        // }
        
      }, []);

    function isValidEmail(e:any) {
        return /\S+@\S+\.\S+/.test(e);
      }
    
    //   const handleChange = e:any => {
    //     if (!isValidEmail(e.target.value)) {
    //       setError('Email is invalid');
    //     } else {
    //       setError(null);
    //     }
    
    //     setEmail(e.target.value);
    //   };

      const checkEmail =(e:any)=>{
        if (!isValidEmail(e)) {
            setError('Email invalid')
        }else{
            setError(" ");
        }
        setEmail(e);
      }


    //   const logins =async(e:any)=>{
    //     e.preventDefault();
    //     Connexion(email,password)
    //   }
    
    
     

      const login =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        // alert(email);
        notifyReset(email);
        // return;
        baseUrl.post('login',{
            email:email,
            password:password
          } ).then(function (response: { data: any; }) {
           
            let userReponse = response.data;
            console.log(response.data.data.token);
            // return
            if (userReponse?.data?.userId) {
              localStorage.setItem("token", userReponse?.data?.token)
              localStorage.setItem("email", userReponse?.data?.email)
              localStorage.setItem("uid", userReponse?.data?.userId)
              localStorage.setItem("nom", userReponse?.data?.nom)
              localStorage.setItem("prenom", userReponse?.data?.prenom)
              localStorage.setItem("matricule", userReponse?.data?.matricule)
              localStorage.setItem("tel", userReponse?.data?.tel)
              localStorage.setItem("role", userReponse?.data?.role)
              
              setTimeout(() => window.location.pathname ="dashboard", 1000);
            }else{
                
                console.log('dddddd');
                
                notify("Email ou mot de passe incorrect")
                return;
            }    
            
          })
          .catch((error:any)=> {
            if(error.code ==="ERR_BAD_REQUEST"){
                setErrorMsg(true)
                setTimeout(() => {
                    setErrorMsg(false)
                }, 1500);
            }
            
           
          });
      };


    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                <Grid
                    container
                    component="main"
                    className="img"
                    sx={{

                        maxHeight: '100%',
                        width: '80%',
                        margin: '0px auto',
                        
                        // boxShadow: 3,
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover',// backgroundPosition: 'center'
                    }}
                >
                    
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={12}
                        md={12}
                        sx={{boxShadow:5,m:1}}

                    >

                        <Box
                            sx={{
                                my: 8,
                                mx: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                // border: "1px solid red",
                                // height: "100%",
                                boxShadow:4,
                                maxWidth: "100%", p: 8, background: "#fff"
                            }}
                        >

                           {errorMsg && <span style={{color:"red"}}> Email ou mot de passe incorrect</span> }
                           <Typography color="Background" fontFamily="monospace" fontWeight={10} align='center' sx={{ width: "50%" }}>
                                CONNEXION
                            </Typography>

                            <Box component="form" noValidate sx={{ maxWidth: "60%", boxShadow: 5, p: 4, background: "#fff" }}>


                                <Typography  align='center'>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        helperText={error && <Typography component="em" sx={{color: 'red',fontSize:14}}>{error}</Typography>}
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={email}
                                        onChange={e=>checkEmail(e.target.value)}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        sx={{ backgroundColor: 'white',  m:1, width: '35ch' }}
                                        variant="outlined"
                                    />
                                </Typography>
                                <Typography  align='center'>
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
                                            onChange={e=> {
                                                setPassword(e.target.value)
                                                if(e.target.value.length <4) setpasslen(true)
                                                else setpasslen(false)
                                            }}
                                        />
                                        {passlen && <Typography align='left' component="em" sx={{color: 'red',fontSize:14}}>Au moins quatre caractére</Typography>}
                                    </FormControl>
                                </Typography>
                                &nbsp;
                                <Typography  align='center'>
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
                                        disabled={!email || !password  || password.length <4}
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
                                </Typography>
                            </Box>

                        </Box>




                    </Grid>
                </Grid>

            {/* </ThemeProvider> */}


            <ToastContainer 
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </>

    );
}