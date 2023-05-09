import { Box, Button, Card, CardActions, CardContent, CssBaseline, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import Sheet from '@mui/joy/Sheet';

const Home = () => {


    return (
        <Grid
            container
            component="main"
            className="img"
            sx={{

                maxHeight: '90%',
                width: '80%',
                margin: '5px auto',
                border: '1px solid',
                boxShadow: 3,
                borderRadius: 5,
                background: "#256",
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
                        my: 8,
                        mx: 10,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        // alignItems: 'center',
                        // border: "1px solid blue",
                        // height: "100%",
                        boxShadow: 5,
                        maxWidth: "100%", p: 0, background: "#fff"
                    }}
                >



                    <Box component="form" noValidate
                        sx={{

                            boxShadow: 5,
                            m: 1,
                            borderRadius: 2,
                            minWidth: '45%',
                            background: "#fff",
                            // border:'1px solid red'
                        }}>


                        <Typography variant="h6" mt={2} component="h6">
                            h1. Heading
                        </Typography>

                        <Typography variant="subtitle1" sx={{ fontStyle: 'bold' }} component="span">
                            Pourquoi nous choisir ?
                        </Typography>
                        <Grid container
                            sx={{
                                // border:'1px solid',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Grid item sx={{
                                // border:'1px solid blue',     
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            >
                                <List dense={true}>

                                    <ListItem>
                                        <ListItemIcon>
                                            <RemoveOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Securité" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <RemoveOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Accès facile 24h/24" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <RemoveOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Géolocalisation" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <RemoveOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Trafic routier en temps réel" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <RemoveOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Offre d'abonnement" />
                                    </ListItem>

                                </List>
                            </Grid>

                        </Grid>

                        <Grid container
                            sx={{

                                display: 'flex',
                                justifyContent: 'start'
                            }}
                        >
                            <Grid item sx={{
                                // border:'1px solid ', 
                                display: 'flex',
                                justifyContent: 'center',
                                minWidth: '87%'
                            }}
                            >
                                {/* <span> */}


                                <List dense={true}>

                                    <Typography variant="subtitle1" sx={{ fontFamily: 'bold', m: '0 auto' }} component="span">
                                        Nous Contacter
                                    </Typography>

                                    <ListItem>
                                        <ListItemIcon>
                                            <EmailOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="sen@gmail.com" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <RoomOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Cité keur gorgui" />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemIcon>
                                            <ContactPhoneOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="33 268 55 82" />
                                    </ListItem>

                                </List>
                                {/* </span> */}

                            </Grid>
                            <Divider />
                            <Typography variant="inherit" sx={{ fontFamily: 'bold', m: '0 auto' }} component="button">
                                <a href='login'>Se connecter</a>
                            </Typography>

                        </Grid>



                    </Box>

                    <Box
                        component="form"
                        noValidate
                        sx={{
                            minWidth: "50%",
                            boxShadow: 5,
                            // p: 4, 
                            m: 1,
                            background: "#fff",
                            display: 'block'
                        }}
                    >



                        {/* <Sheet color='info' variant='soft'> */}
                        {/* <Typography variant='body1'>
                            Garez votre véhicule en toute sécurité dans notre parking automatisé. Avec notre système de surveillance 24/7 et nos équipements à la pointe de la technologie, vous pouvez être sûr que votre voiture est en sécurité. Et avec notre système de paiement facile et rapide, vous pouvez être sur la route en un rien de temps !
                        </Typography> */}
                        {/* </Sheet> */}
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Garez votre véhicule en toute sécurité dans notre parking automatisé. Avec notre système de surveillance 24/7 et nos équipements à la pointe de la technologie, vous pouvez être sûr que votre voiture est en sécurité. Et avec notre système de paiement facile et rapide, vous pouvez être sur la route en un rien de temps !
                                </Typography>
                                
                            </CardContent>
                            
                        </Card>




                        <Box
                            component="form"
                            noValidate
                            sx={{
                                // minWidth: "50%", 

                                // background: "#fff",
                                // display:'block' 
                                m: 1,
                                borderRadius: 2,

                                // border:'red 1px solid'
                            }}
                        >

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0507557503092!2d-17.471413485713548!3d14.709721789733042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173b9452a5ad5%3A0xb798e476c4492163!2sFabrique%20Simplon%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1679420405682!5m2!1sfr!2ssn"
                                width="100%" height="300" style={{ border: 0 }} loading="lazy"
                            >
                            </iframe>

                        </Box>


                    </Box>

                </Box>




            </Grid>
        </Grid>
    )
}

export default Home