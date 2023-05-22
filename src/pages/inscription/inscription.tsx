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
import { CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, useStepContext } from '@mui/material';
import ShowBackdrop from '../../components/backdrop';
import baseUrl from '../../baseUrl';
import { ToastContainer, toast } from 'react-toastify';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
    const [successStatus, setsuccessStatus] = useState(false)
    const [errorStatus, seterrorStatus] = useState(false)

    const [isCheckPass, setisCheckPass] = useState(false)



    const [loader, setloader] = useState(false);


    const [open, setOpen] = React.useState(false);
    const [suivant, setsuivant] = useState(false)
    const handleOpen = () => setOpen(true);
    const [error, setError] = useState('' as any);
    const [isCode, setisCode] = useState(false);
    const [isPassLength, setisPassLength] = useState(false);
    const [lenTel, setlenTel] = useState(false)


    //   const notify = (msg:any) => toast.error(msg);
    //   const notifyReset = (msg:any) => toast.success(msg);

    const [loading, setloading] = useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 300);

        return ()=>{
            setEmail('');setPassword('');setprenom('');setnom('');setabonnement('');
            setcode('');setconfirmPass('');settel('')
        }

    }, [successStatus])





    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setshowPasswordConfirm] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickshowPasswordConfirm = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const switchForm = () => {
        suivant ? setsuivant(false) : setsuivant(true)
    }

    const signin = (e: any) => {
        e.preventDefault();

        console.log(email, password, code, nom, prenom, abonnement, carte, tel);


        // e.preventDefault()


        const user = {
            "nom": nom, "prenom": prenom, "email": email, "password": password,
            "telephone": tel, "code": code, "typeAbonnement": abonnement, "rfid": carte
        }




        const token = localStorage.getItem('token')

        const config = { headers: { Authorization: token } }
        const data = user

        baseUrl.post("/post", data, config).then((res: any) => {
            console.log(res.data.includes("Utilisateur ajouté"));

            if (res.data.includes("Utilisateur ajouté")) {
                // notify();
                // vérification si l'email existe déjà
                setsuccessStatus(true);
                setTimeout(() => {
                    setsuccessStatus(false);
                }, 2000);
            }
        }).catch((error: any) => {
            //console.log(error);

            seterrorStatus(true);
            setTimeout(() => {
                seterrorStatus(false);
            }, 2000);
        })

    }

    const toInputUppercase = (e: any) => {
        console.log('opp')
        if (e.target.value !== '') {
            e.target.value = ("" + e.target.value.replace(/[^a-zA-Z ]/g, ""))[0].toUpperCase() + e.target.value.slice(1).toLowerCase();
        }
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

    function hasWhiteSpace(s: any) {
        var reWhiteSpace = new RegExp("\\s+");

        // Check for white space
        if (reWhiteSpace.test(s)) {

            return true;
        }
        return false;
    }

    const checkNom = (nom: any) => {
        // console.log(nom)
        if (nom === '' || hasWhiteSpace(nom)) {
            //   setisCheckNom(true);
            setTimeout(() => {
                setnom("")
                // setisCheckNom(false)
            }, 1000);
            return;
        }

        setnom(nom)
    }

    const checkPrenom = (nom: any) => {
        // console.log(nom)
        if (nom === '' || hasWhiteSpace(nom)) {
            //   setisCheckNom(true);
            setTimeout(() => {
                setprenom("")
                // setisCheckNom(false)
            }, 1000);
            return;
        }

        setprenom(nom)
    }


    return (
        <>

            {loading ?
                <ShowBackdrop />
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
                        p: 10,
                        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
                    }}
                >
                    <CssBaseline />
                    {successStatus && <Typography sx={{ m: "auto", fontSize: '22px', color: "green" }}>Utilisateur Ajouté</Typography>}
                    {errorStatus && <Typography sx={{ m: "auto", fontSize: '15px', color: "red" }}>Une erreur s'est produit</Typography>}

                    {
                        !suivant && 
                        <Grid 
                            sx={{ 
                                borderRadius: 2, 
                                minHeight: "55vh", 
                                display: 'flex', 
                                width:"auto",
                                p: 2, 
                                justifyContent: 'center', 
                                flexWrap: 'wrap', background: "#fff", boxShadow: 4 
                            }}
                        >
                            <Typography variant='h6' align='center' sx={{ width: "70%" }}>
                                Inscription
                            </Typography>



                           <div style={{display: 'flex', justifyContent: 'center'}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="nom"
                                    label="Nom"
                                    name="nom"
                                    autoComplete="nom"
                                    autoFocus
                                    helperText={hasWhiteSpace(nom) && <Typography variant='subtitle2' color="red">Champs vide</Typography>}
                                    size='small'
                                    value={nom}
                                    onChange={(e) => {
                                        checkNom(e.target.value.trimStart())
                                        toInputUppercase(e)
                                    }}
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
                                    helperText={hasWhiteSpace(prenom) && <Typography variant='subtitle2' color="red">Champs vide</Typography>}
                                    autoComplete="prenom"
                                    autoFocus
                                    size='small'
                                    value={prenom}
                                    onChange={(e) => checkPrenom(e.target.value.trimStart())}
                                    sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                    variant="outlined"
                                />
                           </div>

                           <div style={{display: 'flex', justifyContent: 'center'}}>
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
                                    if(e.target.value.length < 9) setlenTel(true)
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
                                    disabled={!nom || !prenom || !email || !tel || tel.length <9}
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
                        <Grid sx={{ borderRadius: 2, minHeight: "55vh", display: 'flex', p: 2, justifyContent: 'center', flexWrap: 'wrap', background: "#fff", boxShadow: 4 }}>
                            <Typography variant='h6' align='center' sx={{ width: "70%" }}>
                                Inscription
                            </Typography>

                            <div style={{display: 'flex', justifyContent: 'center'}}>
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
                                    setabonnement(e.target.value); console.log(abonnement);
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
                            </div>


                            <div style={{display: 'flex', justifyContent: 'center'}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                type='password'
                                label="Mot de passe"
                                name="password"
                                autoComplete="password"
                                helperText={ isPassLength && <Typography variant='subtitle2' color="red">Minimum 4 caratéres</Typography>}
                                autoFocus
                                value={password}
                                size='small'
                                onChange={(e) => {
                                    setPassword(e.target.value); 
                                    e.target.value.length < 4 && setisPassLength(true)
                                    e.target.value.length >= 4 && setisPassLength(false)
                                }}
                                sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                variant="outlined"
                            />


                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type='password'
                                id="confirm"
                                label="Confirmer mot de passe"
                                name="confirm"
                                autoComplete="confirm"
                                autoFocus            
                                helperText={isCheckPass && <Typography variant='subtitle2' color="red">Mot de passe ne correspond pas</Typography>}
                                size='small'
                                value={confirmPass}
                                onChange={(e:any) => {
                                    setconfirmPass(e.target.value); 
                                    password !== e.target.value ? setisCheckPass(true):setisCheckPass(false)
                                }}
                                sx={{ backgroundColor: 'white', m: 1, width: '30ch' }}
                                variant="outlined"
                            />

                            </div>


                            {/* <FormControl sx={{ m: 2, width: '35ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 2, width: '35ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
                                <OutlinedInput
                                    id="password2"
                                    type={showPasswordConfirm ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickshowPasswordConfirm}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    value={confirmPass}
                                    onChange={(e) => setconfirmPass(e.target.value)}
                                    onBlur={() => checkPass()}
                                />
                                {isCheckPass && <Typography variant='subtitle2' color="red">Les mots de passe sont differents</Typography>}
                            </FormControl> */}




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
                                    if(e.target.value.trim().length <= 4){
                                    setcode(e.target.value.trim().replace(/[^0-9]+/g, ''));
                                    setisCode(false);
                                    }else setisCode(true);
                                    
                                }}
                                sx={{ backgroundColor: 'white', m: 1, width: '45ch' }}
                                variant="outlined"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={!carte || !password || !confirmPass || !code}
                                onClick={e => {

                                    signin(e)
                                    setloader(true);
                                    setTimeout(() => {
                                        setloader(false)
                                    }, 2000);
                                }}
                                // sx={{ mt: 3, mb: 2,width:'274px',height:'74px' ,}}
                                sx={{ maxHeight: '50px', maxWidth: '30%', m: 'auto', background: "#1F27E2" }}
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

                </Grid>
            }




        </>

    );
}