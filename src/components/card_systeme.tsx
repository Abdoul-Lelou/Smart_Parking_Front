import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Chip, Dialog, useTheme } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import FullScreenDialog from './visualisation';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Card_systeme() {

  const [open, setopen] = React.useState(false)


  const openDialog = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };


  return (
    <>
    <Card variant="outlined" sx={{ maxWidth: '80%', border:"1px solid", m:'0 auto' }}>
      <CardOverflow>
        <AspectRatio ratio="8">
            <Typography level="h2" sx={{ fontSize: 'md', mt: 14, background:"#1F27E2"}}>
              Systeme
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
        <Typography  level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          <Chip 
            icon={<PreviewIcon />} 
            label="Visualisation" 
            color='success' 
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
        fullScreen
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
              <CloseIcon />
            </IconButton>
           
            <Typography sx={{ m:"0 auto"}} level="h6" component="div">   
              SUPERVISION DU SYSTEME
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
            <FullScreenDialog />
        
      </Dialog>
    </div>

    </>
  );
}
