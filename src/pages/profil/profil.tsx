import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { CssBaseline, Divider } from '@mui/joy';
import { Chip, Grid, MenuList, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import KeyIcon from '@mui/icons-material/Key';
import EditProfil from './edit_profil';
import ShowBackdrop from '../../components/backdrop';
import { useState } from 'react';

export default function Profil() {

    const [showProfile, setshowProfile] = React.useState(false)

    const handleClick = () => {
        // console.info('You clicked the Chip.');
        showProfile ? setshowProfile(false) : setshowProfile(true)
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const [loading, setloading] = useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        setloading(false)
      }, 300);
    }, [])

    return (

        <>
        <CssBaseline />
    
            {loading ?
                <ShowBackdrop/>
            :
                <Grid
                    item
                    xs={false}
                    sm={9.5}
                    md={9.5}
                    
                    sx={{
                        // background: "#E0E0E0",
                        // borderRadius: 5,
                        // borderBottomLeftRadius: 10,
                        // boxShadow: 5,
                        pt: 0,
                        m:'0 auto'
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            '& > :not(style)': {
                                m: 1,
                                width: 558,
                                height: 500,
                                borderRadius: 5,
                                boxShadow: 10,
                                p:5
                            },
                        }}
                    >
                        {/* <Paper elevation={0} /> */}
                        {/* <Paper /> */}
                        {/* <Paper elevation={3} /> */}

                        {
                        !showProfile && <Paper sx={{ width: 420, maxWidth: '100%'}}>
                            <Typography variant='h3' component='h3' align='center' sx={{ m: 'auto' }}>Profil</Typography>
                            <MenuList sx={{ width: '60%', m: "auto" }}>
                                <MenuItem  sx={{p:1, display: 'flex', justifyContent: 'center' }}>
                                    Nom : Andre
                                </MenuItem>
                                <MenuItem sx={{p:1, display: 'flex', justifyContent: 'center' }}>
                                    Prenom : Merlin
                                </MenuItem>
                                <MenuItem sx={{p:1, display: 'flex', justifyContent: 'center' }}>
                                    Matricule : Lts00041
                                </MenuItem>
                                <MenuItem sx={{p:1, display: 'flex', justifyContent: 'center' }}>
                                    Email : merlin@gmail.com
                                </MenuItem>
                                <MenuItem sx={{ p:1,display: 'flex', justifyContent: 'center' }}>
                                    Tel : 77 123 45 67
                                </MenuItem>
                                <Divider />
                
                                <Stack direction="row" spacing={1} sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <Chip
                                        label="Modifier mot de passe"
                                        onClick={()=>handleClick()}
                                        onDelete={handleDelete}
                                        deleteIcon={<KeyIcon/>}
                                        sx={{
                                            // border:'0.1px solid red', 
                                            borderRadius:50,
                                            boxShadow:0.7,
                                            // m:4,
                                            color:'indianred'
                                        }}
                                    /> 
                                </Stack>
                            </MenuList>
                        </Paper>}

                        {showProfile && <EditProfil />}

                    </Box>

                </Grid>
            }

        </>
    );
}