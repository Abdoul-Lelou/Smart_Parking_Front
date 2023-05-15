import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { AppBar, Button, Chip, Dialog, IconButton, Slide, Toolbar } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import { GridCloseIcon } from '@mui/x-data-grid';
import { TransitionProps } from '@mui/material/transitions';
import SimpleAccordion from './type_abonnement';
import MoisAbonnement from './mois_abonnement';
import baseUrl from '../baseUrl';
import { useState } from 'react';


const Transition1 = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Transition2 = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Card_dashboard() {
  const [open_un, setopenUn] = React.useState(false)
  const [open_deux, setopenDeux] = React.useState(false)
  const [donnee, setdonnee] = useState("" as any)
  const [abonnementMois, setabonnementMois] = useState("" as any)
  const [abonnementSemaine, setabonnementSemaine] = useState("" as any)

  let token = window.localStorage.getItem('token')
  const userRole = localStorage.getItem('role')?.split(' ').join('')
  React.useEffect(() => {
   
  
    
    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      let tab1 = [];
      let tab2 = []
      for (const iterator of res.data) {
        if(iterator.typeAbonnement =="mois"){

          tab1.push(iterator)
         
          setabonnementMois(tab1)
        }else{
          tab2.push(iterator)
          
          setabonnementSemaine(tab2)
        }
        
      }
      setdonnee(res.data);
      
    })
  }, [])

  const openDialog1 = () => {
    setopenUn(true);
  };

  const openDialog2 = () => {
    setopenDeux(true);
  };

  const handleClose = () => {
    setopenDeux(false);
    setopenUn(false);
  };

  

  return (
    <>
     {userRole !=="user" && 
      <Card variant="outlined" sx={{ maxWidth: '80%', border:"1px solid", m:'0 auto' }}>
      <CardOverflow>
        <AspectRatio ratio="8" >
          {/* <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          /> */}
            <Typography level="h2" sx={{ fontSize: 'md', mt: 14,background: "#1EC79B" }}>
                Abonnements
                {/* {...title1} */}
            </Typography>
        </AspectRatio>
      </CardOverflow>
     
      {/* <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        California
      </Typography> */}
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
          boxShadow:20,
          justifyContent:"center"
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary'  }} onClick={()=>openDialog1()}>
            <Chip icon={<EventIcon />} label="semaine" color='error' clickable/>
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }} onClick={()=>openDialog2()}>
            <Chip icon={<CalendarMonthIcon />} label="mois" color='info' clickable/>
        </Typography>
      </CardOverflow>
     </Card>}

     {userRole ==="user" && 
      <Card variant="outlined" sx={{ maxWidth: '80%', border:"1px solid", m:'0 auto' }}>
      <CardOverflow>
        <AspectRatio ratio="8" >
            <Typography level="h2" sx={{ fontSize: 'md', mt: 14,background: "#1EC79B" }}>
                Abonnements
            </Typography>
        </AspectRatio>
      </CardOverflow>
      <Divider />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
          boxShadow:20,
          justifyContent:"center"
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary'  }} onClick={()=>openDialog1()}>
            <Chip icon={<EventIcon />} label="Mes abonnements" color='error' clickable/>
        </Typography>
        {/* <Divider orientation="vertical" /> */}
        {/* <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }} onClick={()=>openDialog2()}>
            <Chip icon={<CalendarMonthIcon />} label="mois" color='info' clickable/>
        </Typography> */}
      </CardOverflow>
     </Card>
     }
     <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open_un}
        onClose={handleClose}
        TransitionComponent={Transition1}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <GridCloseIcon />
            </IconButton>
           
            {userRole !=="user" && <Typography sx={{ m:"0 auto"}} level="h6" component="div">   
              ABONNEMENT PAR SEMAINE
            </Typography>}
            {userRole ==="user" && <Typography sx={{ m:"0 auto"}} level="h6" component="div">   
              ABONNEMENT PERSONEL
            </Typography>}
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        
        <SimpleAccordion {...abonnementSemaine} />
        
      </Dialog>

      <Dialog
        fullScreen
        open={open_deux}
        onClose={handleClose}
        TransitionComponent={Transition2}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <GridCloseIcon />
            </IconButton>
           
            <Typography sx={{ m:"0 auto"}} level="h6" component="div">   
              ABONNEMENT PAR MOIS
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
            <MoisAbonnement  />
        
      </Dialog>
    </div>
    </>
    
  );
}
