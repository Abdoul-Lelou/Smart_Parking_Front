import * as React from 'react';
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import moveOff from '../images/move.jpeg';
import alarme from '../images/alarm.png';
import flamme from '../images/flamme.jpeg';
import pompe from '../images/pompe.jpeg';
import rfid from '../images/rfid.jpeg';
import levante from '../images/levante.jpeg';
import clavier from '../images/clavier.png';
import fire from "../images/gif/fire.gif";
import bell from '../images/gif/bell.gif'
import bar from '../images/gif/barrier.gif'
import rfid_on from '../images/gif/rfid.png'
import pump from '../images/gif/sprinkler.gif'
import keyboard from '../images/gif/keyboard.gif'
import move from '../images/gif/move.gif'





import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';


import ListItemButton from '@mui/material/ListItemButton';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Chip } from '@mui/joy';
import { DirectionsCar, Fireplace, Keyboard, North, NotificationsActive, WaterfallChartRounded } from '@mui/icons-material';
import { useState } from 'react';
import { Fade, Tab, Tabs } from '@mui/material';


import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:8000/";





interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function FullScreenDialog() {
  const [opens, setOpen] = React.useState(true);
  const [actifFlammeMandela, setactifFlammeMandela] = React.useState(false)
  const [actifPumpMandela, setactifPumpMandela] = useState(false)
  const [actifBarMandela, setactifBarMandela] = useState(false);
  const [actifKeypad, setactifKeypad] = useState(false)
  const [actifBellMandela, setactifBellMandela] = useState(false);
  const [isMoveMandela, setisMoveMandela] = useState(false)
  const [isMoveSurete, setisMoveSurete] = useState(false)
  const [actifFlammeSurete, setactifFlammeSurete] = React.useState(false)
  const [actifPumpSurete, setactifPumpSurete] = useState(false)
  const [actifBarSurete, setactifBarSurete] = useState(false);
  const [actifBellSurete, setactifBellSurete] = useState(false);
  const [isMoveSimplon, setisMoveSimplon] = useState(false)
  const [actifFlammeSimplon, setactifFlammeSimplon] = React.useState(false)
  const [actifPumpSimplon, setactifPumpSimplon] = useState(false)
  const [actifBarSimplon, setactifBarSimplon] = useState(false);
  const [actifBellSimplon, setactifBellSimplon] = useState(false);
  const [value, setValue] = React.useState(0);
  const [site, setSite] = useState("");
  const ref = React.useRef<HTMLDivElement>(null);

  const socket = socketIOClient(ENDPOINT);
  
  React.useEffect(() => {
    if (ref.current) (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;

    // console.log(socket);
    
    socket.on('barriere_mandela', msg=>{
      if(msg === 0) setactifBarMandela(false);
      else  setactifBarMandela(true) 
    })

    socket.on('flamme_mandela', msg=>{
      console.log(msg);
      
      if(msg == 1) setactifFlammeMandela(true); else setactifFlammeMandela(false) 
    })

    socket.on('buzzer_mandela', msg=>{
      // console.log("buzz :", msg);
      
      if(msg === 1) setactifBellMandela(true); else setactifBellMandela(false) 
    })

    socket.on('pompe_mandela', msg=>{
      if(msg === 1) setactifPumpMandela(true); else setactifPumpMandela(false) 
    })

    socket.on('mouvement_mandela', msg=>{
      if(msg === 1) setisMoveMandela(true); else setisMoveMandela(false) 
    })



    socket.on('barriere_simplon', msg=>{
      if(msg === 1) setactifBarSimplon(true); else setactifBarSimplon(false) 
    })

    socket.on('flamme_simplon', msg=>{
      if(msg === 1) setactifFlammeSimplon(true); else setactifFlammeSimplon(false) 
    })

    socket.on('buzzer_simplon', msg=>{
      if(msg === 1) setactifBellSimplon(true); else setactifBellSimplon(false) 
    })

    socket.on('pompe_simplon', msg=>{
      if(msg === 1) setactifPumpSimplon(true); else setactifPumpSimplon(false) 
    })

    socket.on('mouvement_simplon', msg=>{
      if(msg === 1) setisMoveSimplon(true); else setisMoveSimplon(false) 
    })


    socket.on('barriere_surete', msg=>{
      if(msg === 1) setactifBarSurete(true); else setactifBarSurete(false) 
    })

    socket.on('flamme_surete', msg=>{
      if(msg === 1) setactifFlammeSurete(true); else setactifFlammeSurete(false) 
    })

    socket.on('buzzer_surete', msg=>{
      if(msg === 1) setactifBellSurete(true); else setactifBellSurete(false) 
    })

    socket.on('pompe_surete', msg=>{
      if(msg === 1) setactifPumpSurete(true); else setactifPumpSurete(false) 
    })

    socket.on('mouvement_surete', msg=>{
      if(msg === 1) setisMoveSurete(true); else setisMoveSurete(false) 
    })



  }, [actifBarMandela,socket]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  socket.emit('admin', "allumer")

  


  return (

    <Box sx={{ width: '80%', m: '0 auto', bgcolor: '#fff', maxHeight: '40%' }}>
      {/* <Typography variant='h4' sx={{ boxShadow: 1, fontWeight: "bold", m: 1 }} align='center'>Type d'abonnement</Typography> */}
      {/* &nbsp; */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider',m:'auto' }}>
        <Tabs value={value} sx={{ width: 438, m: '0 auto', display: "flex", justifyContent: 'center' }} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<Chip variant="soft" sx={{boxShadow:4}} color='success'>MANDELA</Chip>}  {...a11yProps(0)} sx={{ borderRight: '1px solid' }} />
          {/* <Divider orientation='vertical'/> */}
          <Tab label={<Chip variant="soft" color='info'>SURETÉ</Chip>}  {...a11yProps(1)}  />

          <Tab label={<Chip variant="soft" sx={{boxShadow:4}} color='warning'>SIMPLON</Chip>}  {...a11yProps(2)} sx={{ borderLeft: '1px solid' }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

        <List dense sx={{ width: '80%', maxWidth: '70%', m: "0px auto", bgcolor: 'background.paper' }}>
          <ListItem
            key={move}
            secondaryAction={
              <>
                {!isMoveMandela && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture non detecté
                </Chip>}
                {isMoveMandela && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture en presence
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!isMoveMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={moveOff}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {isMoveMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={move}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={move}
                primary={
                  <Typography variant='h6'>Capteur de mouvement</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={fire}
            secondaryAction={
              <>
                {actifFlammeMandela && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
                {!actifFlammeMandela && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Aucune flamme 
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifFlammeMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={flamme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}

                {actifFlammeMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={fire}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={flamme}
                primary={
                  <Typography variant='h6'>Capteur de flamme</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={bell}
            secondaryAction={
              <>
                {!actifBellMandela && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme non active
                </Chip>}
                {actifBellMandela && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBellMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={alarme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBellMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={bell}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={bell}
                primary={
                  <Typography variant='h6'>Alarme</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={bar}
            secondaryAction={
              <>
                {!actifBarMandela && <Chip variant="soft" startDecorator={<North />}>
                  Barriere baissé
                </Chip>}
                {actifBarMandela && <Chip variant="soft" startDecorator={<North />}>
                  Barriere soulevé
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBarMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={levante}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBarMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={bar}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={bar}
                primary={
                  <Typography variant='h6'>Barriere</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={pump}
            secondaryAction={
              <>
                {!actifPumpMandela && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage à l'arrêt
                </Chip>}
                {actifPumpMandela && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifPumpMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pompe}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifPumpMandela && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pump}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={pump}
                primary={
                  <Typography variant='h6'>Jet d'eau</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          {/* <ListItem
            key={keyboard}
            secondaryAction={
              <>
                {!actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Ouvrir barriére
                </Chip>}
                {actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Clavier actif
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={clavier}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                // size='lg'
                />}
                {actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={keyboard}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={keyboard}
                primary={
                  <Typography variant='h6'>Clavier</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={keyboard}
            secondaryAction={
              <>
                {!actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Ouvrir barriére
                </Chip>}
                {actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Clavier actif
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={rfid}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                // size='lg'
                />}
                {actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={rfid_on}
                  sx={{ m: '0 auto', height: 50, width: 50,  }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={rfid_on}
                primary={
                  <Typography variant='h6'>Capteur RFID</Typography>
                }
              />
            </ListItemButton>
          </ListItem> */}
        </List>

      </TabPanel>
      <TabPanel value={value} index={1}>

        <List dense sx={{ width: '80%', maxWidth: '70%', m: "0px auto", bgcolor: 'background.paper' }}>
          <ListItem
            key={move}
            secondaryAction={
              <>
                {!isMoveSurete && 
                <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture non detecté 
                </Chip>
                }
                {isMoveSurete && 

                  <Fade in={isMoveSurete} timeout={2000}>
                      <Chip variant="soft" startDecorator={<DirectionsCar />}>
                    Voiture en presence
                  </Chip>
                  </Fade>
                }
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!isMoveSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={moveOff}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {isMoveSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={move}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={move}
                primary={
                  <Typography variant='h6'>Capteur de mouvement</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={fire}
            secondaryAction={
              <>
                {!actifFlammeSurete && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Aucune flamme
                </Chip>}
                {actifFlammeSurete && 
                  <Fade in={actifFlammeSurete} timeout={2000}>
                    <Chip variant="soft" startDecorator={<Fireplace />}>
                      Flamme dectetée
                    </Chip>
                  </Fade>
                }
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifFlammeSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={flamme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}

                {actifFlammeSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={fire}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={flamme}
                primary={
                  <Typography variant='h6'>Capteur de flamme</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={bell}
            secondaryAction={
              <>
                {!actifBellSurete && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme non active
                </Chip>}
                {actifBellSurete && 
                <Fade in={actifBellSurete} timeout={2000}>
                  <Chip variant="soft" startDecorator={<NotificationsActive />}>
                    Alarme declenchée
                  </Chip>
                </Fade>
                }
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBellSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={alarme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBellSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={bell}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={bell}
                primary={
                  <Typography variant='h6'>Alarme</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={bar}
            secondaryAction={
              <>
                {!actifBarSurete && <Chip variant="soft" startDecorator={<North />}>
                  Barriere baissé
                </Chip>}
                {actifBarSurete && <Chip variant="soft" startDecorator={<North />}>
                  Barriere soulevé
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBarSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={levante}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBarSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={bar}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={bar}
                primary={
                  <Typography variant='h6'>Barriere</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={pump}
            secondaryAction={
              <>
                {!actifPumpSurete && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage à l'arrêt
                </Chip>}
                {actifPumpSurete && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifPumpSurete && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pompe}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifPumpSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pump}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={pump}
                primary={
                  <Typography variant='h6'>Jet d'eau</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          {/* <ListItem
            key={keyboard}
            secondaryAction={
              <>
                {!actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Ouvrir barriére
                </Chip>}
                {actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Clavier actif
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={clavier}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                // size='lg'
                />}
                {actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={keyboard}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={keyboard}
                primary={
                  <Typography variant='h6'>Clavier</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={keyboard}
            secondaryAction={
              <>
                {!actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Ouvrir barriére
                </Chip>}
                {actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Clavier actif
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={rfid}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                // size='lg'
                />}
                {actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={rfid_on}
                  sx={{ m: '0 auto', height: 50, width: 50,  }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={rfid_on}
                primary={
                  <Typography variant='h6'>Capteur RFID</Typography>
                }
              />
            </ListItemButton>
          </ListItem> */}
        </List>

      </TabPanel>
      <TabPanel value={value} index={2}>

        <List dense sx={{ width: '80%', maxWidth: '70%', m: "0px auto", bgcolor: 'background.paper' }}>
          <ListItem
            key={move}
            secondaryAction={
              <>
                {!isMoveSimplon && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture non detecté 
                </Chip>}
                {isMoveSimplon && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture en presence
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!isMoveSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={moveOff}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {isMoveSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={move}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={move}
                primary={
                  <Typography variant='h6'>Capteur de mouvement</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={fire}
            secondaryAction={
              <>
                {!actifFlammeSimplon && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
                {actifFlammeSimplon && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Aucune flamme
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifFlammeSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={flamme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}

                {actifFlammeSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={fire}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={flamme}
                primary={
                  <Typography variant='h6'>Capteur de flamme</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={bell}
            secondaryAction={
              <>
                {!actifBellSimplon && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme non active
                </Chip>}
                {actifBellSimplon && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBellSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={alarme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBellSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={bell}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={bell}
                primary={
                  <Typography variant='h6'>Alarme</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={bar}
            secondaryAction={
              <>
                {!actifBarSimplon && <Chip variant="soft" startDecorator={<North />}>
                  Barriere baissé
                </Chip>}
                {actifBarSimplon && <Chip variant="soft" startDecorator={<North />}>
                  Barriere soulevé
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBarSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={levante}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBarSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={bar}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={bar}
                primary={
                  <Typography variant='h6'>Barriere</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          <ListItem
            key={pump}
            secondaryAction={
              <>
                {!actifPumpSimplon && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage à l'arrêt
                </Chip>}
                {actifPumpSimplon && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifPumpSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pompe}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifPumpSimplon && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pump}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={pump}
                primary={
                  <Typography variant='h6'>Jet d'eau</Typography>
                }
              />
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
          {/* <ListItem
            key={keyboard}
            secondaryAction={
              <>
                {!actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Ouvrir barriére
                </Chip>}
                {actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Clavier actif
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={clavier}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                // size='lg'
                />}
                {actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={keyboard}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={keyboard}
                primary={
                  <Typography variant='h6'>Clavier</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={keyboard}
            secondaryAction={
              <>
                {!actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Ouvrir barriére
                </Chip>}
                {actifKeypad && <Chip variant="soft" startDecorator={<Keyboard />}>
                  Clavier actif
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={rfid}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                // size='lg'
                />}
                {actifKeypad && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={rfid_on}
                  sx={{ m: '0 auto', height: 50, width: 50,  }}
                  size='lg'
                />}
              </ListItemAvatar>
              <ListItemText id={rfid_on}
                primary={
                  <Typography variant='h6'>Capteur RFID</Typography>
                }
              />
            </ListItemButton>
          </ListItem> */}
        </List>

      </TabPanel>


    </Box>

  );
}






