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
// import './login.css'
import { useState } from 'react';
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import baseUrl from '../../baseUrl';
// import { ToastContainer, toast } from 'react-toastify';
// import baseUrl from '../../baseUrl'


const theme = createTheme();


export default function EditProfil() {

    const [email, setEmail] = useState('' as any);
    const [password, setPassword] = useState('' as any);
    const [oldpassword, setOldpassword] = useState('' as any);
    const [confirmPass, setconfirmPass] = useState('' as any);

    const [loader, setloader] = useState(false);
    const [isPassLength, setisPassLength] = useState(false);
    const [isNewPassLength, setisNewPassLength] = useState(false);

    const [isCheckPass, setisCheckPass] = useState(false)
    const [isConfirm, setisConfirm] = useState(false)
    const [isEdited, setisEdited] = useState(false)
    const [errorPass, seterrorPass] = useState(false)


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const token = localStorage.getItem('token');

    //   const notify = (msg:any) => toast.error(msg);
    //   const notifyReset = (msg:any) => toast.success(msg);



    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const config = { headers: { Authorization: token } }
    const data = {
        password,oldpassword
    }


    const login =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
       
        const idedit = localStorage.getItem('uid')?.split(' ').join('')  

          baseUrl.patch(`/update/${idedit}`, data, config).then((res:any) => {
            
            // permet de rediriger vers datatable
            console.log(res);

            if (res?.data) {
                setisEdited(true)
                setTimeout(() => {
                    setisEdited(false)
                    window.location.reload()
                }, 1500);
            }
            
            // window.location.pathname ="datatable"
           
          }).catch((error:any) =>{

              seterrorPass(true)
              setTimeout(() => {
                    setOldpassword('')
                    seterrorPass(false)
                }, 2500);

          })
      
      };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    component="main"
                    // className="img"
                    sx={{

                        maxHeight: '100%',
                        width: '80%',
                        margin: '0px auto',
                        background:'#fff',
                        display:'flex',
                        justifyContent:'center',
                        boxShadow: 3,
                        
                    }}
                >
                    <CssBaseline />
                    {/* {isEdited && <Typography variant='h6'align='center' sx={{ m: "auto", fontSize: '20px', color: "green" }}>Profile modifié</Typography>} */}

                    {/* <Box component="form" noValidate sx={{ maxWidth: "100%", borderRadius:5, boxShadow: 5, p: 8, background: "#fff" }}> */}



                                {/* <FormControl sx={{ m: 1, width: '37ch' }} variant="outlined"> */}

                                {!isEdited && !errorPass  && <Typography variant='h6' align='center' sx={{ m: 'auto' }}>Modifier mot de passe</Typography> } 
                                {isEdited && <Typography variant='h6' align='center' sx={{ m: 'auto', color: "green" }}>Mot de passe modifié  </Typography> } 
                                {errorPass && <Typography variant='body1' fontFamily="" align='center' sx={{ m: 'auto', color: "red" }}>Actuel mot de passe incorrecte  </Typography> } 

                                    
                                {/* </FormControl> */}

                                <FormControl sx={{ width: '37ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Nouveau mot de passe</InputLabel>
                                    <OutlinedInput
                                        id="password"
                                       
                                        size='medium'
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value); 
                                            e.target.value.length < 4 && setisPassLength(true)
                                            e.target.value.length >= 4 && setisPassLength(false)
                                        }}
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
                                { isPassLength && <Typography variant='subtitle2' color="red">Minimum 4 caratéres</Typography>}

                                </FormControl>
                                <FormControl sx={{ width: '37ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Confirmer mot de passe</InputLabel>
                                    <OutlinedInput
                                        id="confirmpassword"
                                        type={showPassword ? 'text' : 'password'}
                                        value={confirmPass}
                                        onChange={(e:any) => {
                                            setconfirmPass(e.target.value); 
                                            password !== e.target.value ? setisConfirm(true):setisConfirm(false)
                                        }}
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
                                    {isConfirm && <Typography variant='subtitle2' color="red">Mot de passe ne correspond pas</Typography>}
                                </FormControl>
                                <FormControl sx={{  width: '37ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Actuel mot de passe</InputLabel>
                                    <OutlinedInput
                                        id="oldpassword"
                                        type={showPassword ? 'text' : 'password'}
                                        value={oldpassword}
                                        onChange={(e) => {
                                            setOldpassword(e.target.value); 
                                            e.target.value.length < 4 && setisNewPassLength(true)
                                            e.target.value.length >= 4 && setisNewPassLength(false)
                                        }}
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
                                 {isNewPassLength && <Typography variant='subtitle2' color="red">Minimum 4 caratéres</Typography>}
                                </FormControl>

                                

                               <div>
                               <Button
                                    type="submit"
                                    fullWidth
                                    size='small'
                                    variant="contained"
                                    value={confirmPass}
                                    disabled={!password || !oldpassword || !confirmPass}
                                    onClick={e => {
                                        login(e); setloader(true);
                                        setTimeout(() => {
                                            setloader(false)
                                        }, 2000);
                                    }}
                                    // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                                    sx={{ maxHeight: '35px', maxWidth: '150px', }}
                                    // disabled={!email || !password}
                                >
                                    {
                                        !loader ?
                                            "Modifier"
                                            :
                                            // <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                            <CircularProgress color="success" size={25} />
                                        // </Stack>

                                    }
                                </Button>
                                

                                <Button
                                    type="reset"
                                    fullWidth
                                    size='small'
                                    
                                    variant="contained"
                                    color='error'
                                    onClick={()=> window.location.pathname='profil'}
                                    // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                                    sx={{ maxHeight: '35px', maxWidth: '150px',mt:1 }}
                                    // disabled={!email || !password}
                                >
                                    Annuler
                                </Button>
                               </div>

                                
                                {/*  <Copyright sx={{ mt: 5 }} /> */}

                    {/* </Box> */}
                </Grid>

            </ThemeProvider>



        </>

    );
}