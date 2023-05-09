import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Chip, Dialog, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@mui/material';
import { CardContent } from '@mui/joy';

import PlaceIcon from '@mui/icons-material/Place';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import ViewDayIcon from '@mui/icons-material/ViewDay';

export default function Card_place() {


  const [open, setOpen] = React.useState(false);
  const [parkUn, setparkUn] = React.useState(false)
  const [parkDeux, setparkDeux] = React.useState(false);
  const [parkTrois, setparkTrois] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const firstDialog = () => {
    setparkUn(true);
  };

  const secondDialog = () => {
    setparkDeux(true);
  };

  const lastDialog = () => {
    setparkTrois(true);
  };

  const handleClose = () => {
    setOpen(false);
    setparkUn(false);
    setparkDeux(false);
    setparkTrois(false);
  };

  return (
    <>
      <Card variant="outlined" sx={{ maxWidth: '80%', border: "1px solid", m: '0 auto' }}>
        <CardOverflow>
          <AspectRatio ratio="8">
            <Typography level="h2" sx={{ fontSize: 'md', mt: 14, background: "#5288FC" }}>
              Place restante
              {/* {...title1} */}
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
            boxShadow: 20,
            justifyContent: "center"
          }}
        >
          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }} >
            <Chip icon={<PlaceIcon />} label="1" color='success' clickable onClick={() => firstDialog()} />
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            <Chip icon={<PlaceIcon />} label="2" color='secondary' clickable onClick={() => secondDialog()} />
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            <Chip icon={<PlaceIcon />} label="3" color='warning' clickable onClick={() => lastDialog()} />
          </Typography>
        </CardOverflow>
      </Card>

      <div>
        <Dialog
          fullScreen={fullScreen}
          open={parkUn}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          sx={{ Width: 200 }}
        >
          <DialogTitle id="responsive-dialog-title">
            {"Parking Mandela "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography level="inherit" sx={{ fontWeight: 'md', color: 'text.secondary',  }} >
                Notre système de guidage vous permettra de trouver rapidement une place libre.
                De plus, notre sécurité est garantie par un système de surveillance en temps réel.
                Trouvez-nous facilement grâce à Google Maps sur notre site web.
                Réservez votre place dès maintenant !
              </Typography>
              <Card sx={{ minWidth: 275,boxShadow:5, m:0.5,border:'0.1px dotted' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, display:"flex", justifyContent:'space-around'}}  gutterBottom>
                      <Chip icon={<PlaceIcon />} label="Grand Dakar" color='secondary'  />
                      <Chip icon={<RvHookupIcon />} label="Place Restante: 18" color='error'  />
                      <Chip icon={<ViewDayIcon />} label="Total: 35" color='warning'  />
                  </Typography>


                </CardContent>

              </Card>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9941022926395!2d-17.47560168473726!3d14.71127567978042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107981d21a6b1ec1%3A0x4a6c73d86f194643!2sGrand%20Dakar%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sca!4v1620071702767!5m2!1sfr!2sca"
                width="100%" height="300" style={{ border: 0 }} loading="lazy"
              >
              </iframe>

            </DialogContentText>

          </DialogContent>

        </Dialog>
      </div>

      <div>
        <Dialog
          fullScreen={fullScreen}
          open={parkDeux}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Parking La Sureté"}
          </DialogTitle>
         

          <DialogContent>
            <DialogContentText>
              <Typography level="inherit" sx={{ fontWeight: 'md', color: 'text.secondary',  }} >
                Notre système de guidage vous permettra de trouver rapidement une place libre.
                De plus, notre sécurité est garantie par un système de surveillance en temps réel.
                Trouvez-nous facilement grâce à Google Maps sur notre site web.
                Réservez votre place dès maintenant !
              </Typography>
              <Card sx={{ minWidth: 275,boxShadow:5, m:0.5,border:'0.1px dotted' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, display:"flex", justifyContent:'space-around'}}  gutterBottom>
                      <Chip icon={<PlaceIcon />} label="Fann Hock" color='secondary'  />
                      <Chip icon={<RvHookupIcon />} label="Place Restante: 10" color='error'  />
                      <Chip icon={<ViewDayIcon />} label="Total: 28" color='warning'  />
                  </Typography>


                </CardContent>

              </Card>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.797147739174!2d-17.478768684737188!3d14.72664677977616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10797f7c808b7343%3A0xa25b8dfc739de186!2sFann%20Hock%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sca!4v1652014367938!5m2!1sfr!2sca"
                width="100%" height="300" style={{ border: 0 }} loading="lazy"
              >
              </iframe>

            </DialogContentText>

          </DialogContent>
        </Dialog>
      </div>



      <div>
        <Dialog
          fullScreen={fullScreen}
          open={parkTrois}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Parking Ila Touba"}
          </DialogTitle>
          
          
          <DialogContent>
            <DialogContentText>
              <Typography level="inherit" sx={{ fontWeight: 'md', color: 'text.secondary',  }} >
                Notre système de guidage vous permettra de trouver rapidement une place libre.
                De plus, notre sécurité est garantie par un système de surveillance en temps réel.
                Trouvez-nous facilement grâce à Google Maps sur notre site web.
                Réservez votre place dès maintenant !
              </Typography>
              <Card sx={{ minWidth: 275,boxShadow:5, m:0.5,border:'0.1px dotted' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14, display:"flex", justifyContent:'space-around'}}  gutterBottom>
                      <Chip icon={<PlaceIcon />} label="Medina Rue 22" color='secondary'  />
                      <Chip icon={<RvHookupIcon />} label="Place Restante: 7" color='error'  />
                      <Chip icon={<ViewDayIcon />} label="Total: 40" color='warning'  />
                  </Typography>


                </CardContent>

              </Card>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.0906232889447!2d-17.45845518473732!3d14.688468780775033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107981c9ba5fc5df%3A0x752a3836c3e3a06f!2sM%C3%A9dina%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sca!4v1650575007692!5m2!1sfr!2sca"
                width="100%" height="300" style={{ border: 0 }} loading="lazy"
              >
              </iframe>

            </DialogContentText>

          </DialogContent>

        </Dialog>
      </div>
    </>
  );
}
