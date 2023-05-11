import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { AppBar, Chip, Dialog, IconButton, Button, Slide, Toolbar } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { Close } from '@mui/icons-material';

import HistoriqueStationnement from './historique_parking';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});


export default function Card_historique() {

  
  const [open, setopen] = React.useState(false)
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('md');
  const [fullWidth, setFullWidth] = React.useState(true);


  const openDialog = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };


  return (
    <>
    
      <Card variant="outlined" sx={{ maxWidth: '50%', border:"1px solid", m:'0 auto' }}>
        <CardOverflow>
          <AspectRatio ratio="8">
              <Typography level="h2" sx={{ fontSize: 'md', mt: 14,background:"#758480" }}>
                  Stationnements
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
            boxShadow:20,
            justifyContent:"center"
          }}
        >
          <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            
            <Chip 
              icon={<WorkHistoryIcon />} 
              label="Historique" 
              color='info' 
              clickable 
              onClick={() => openDialog()}
              />
          </Typography>
        
        </CardOverflow>
      </Card>

      <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
           
            <Typography sx={{ m:"0 auto"}} level="h6" component="div">   
              HISTORIQUE STATIONNEMENT
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
            <HistoriqueStationnement />
        
      </Dialog>
    </div>
    
    </>
  );
}
