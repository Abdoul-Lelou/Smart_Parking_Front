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
import { Tab, Tabs } from '@mui/material';





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
  const [actifFlamme, setactifFlamme] = React.useState(false)
  const [actifPump, setactifPump] = useState(false)
  const [actifBar, setactifBar] = useState(false);
  const [actifKeypad, setactifKeypad] = useState(false)
  const [actifBell, setactifBell] = useState(false);
  const [isMove, setisMove] = useState(false)
  const [value, setValue] = React.useState(0);
  const [site, setSite] = useState("");
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [actifBar]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };




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
                {!isMove && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture non detecté 1
                </Chip>}
                {isMove && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture en presence
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!isMove && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={moveOff}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {isMove && <Avatar
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
                {!actifFlamme && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
                {actifFlamme && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifFlamme && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={flamme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}

                {actifFlamme && <Avatar
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
                {!actifBell && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme non active
                </Chip>}
                {actifBell && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBell && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={alarme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBell && <Avatar
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
                {!actifBar && <Chip variant="soft" startDecorator={<North />}>
                  Barriere baissé
                </Chip>}
                {actifBar && <Chip variant="soft" startDecorator={<North />}>
                  Barriere soulevé
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBar && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={levante}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBar && <Avatar
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
                {!actifPump && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage à l'arrêt
                </Chip>}
                {actifPump && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifPump && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pompe}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifPump && <Avatar
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
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
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
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
        </List>

      </TabPanel>
      <TabPanel value={value} index={1}>

        <List dense sx={{ width: '80%', maxWidth: '70%', m: "0px auto", bgcolor: 'background.paper' }}>
          <ListItem
            key={move}
            secondaryAction={
              <>
                {!isMove && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture non detecté 2
                </Chip>}
                {isMove && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture en presence
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!isMove && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={moveOff}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {isMove && <Avatar
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
                {!actifFlamme && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
                {actifFlamme && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifFlamme && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={flamme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}

                {actifFlamme && <Avatar
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
                {!actifBell && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme non active
                </Chip>}
                {actifBell && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBell && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={alarme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBell && <Avatar
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
                {!actifBar && <Chip variant="soft" startDecorator={<North />}>
                  Barriere baissé
                </Chip>}
                {actifBar && <Chip variant="soft" startDecorator={<North />}>
                  Barriere soulevé
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBar && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={levante}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBar && <Avatar
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
                {!actifPump && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage à l'arrêt
                </Chip>}
                {actifPump && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifPump && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pompe}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifPump && <Avatar
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
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
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
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
        </List>

      </TabPanel>
      <TabPanel value={value} index={2}>

        <List dense sx={{ width: '80%', maxWidth: '70%', m: "0px auto", bgcolor: 'background.paper' }}>
          <ListItem
            key={move}
            secondaryAction={
              <>
                {!isMove && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture non detecté 3
                </Chip>}
                {isMove && <Chip variant="soft" startDecorator={<DirectionsCar />}>
                  Voiture en presence
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!isMove && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={moveOff}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {isMove && <Avatar
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
                {!actifFlamme && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
                {actifFlamme && <Chip variant="soft" startDecorator={<Fireplace />}>
                  Flamme dectetée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifFlamme && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={flamme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}

                {actifFlamme && <Avatar
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
                {!actifBell && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme non active
                </Chip>}
                {actifBell && <Chip variant="soft" startDecorator={<NotificationsActive />}>
                  Alarme declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBell && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={alarme}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBell && <Avatar
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
                {!actifBar && <Chip variant="soft" startDecorator={<North />}>
                  Barriere baissé
                </Chip>}
                {actifBar && <Chip variant="soft" startDecorator={<North />}>
                  Barriere soulevé
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifBar && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={levante}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifBar && <Avatar
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
                {!actifPump && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage à l'arrêt
                </Chip>}
                {actifPump && <Chip variant="soft" startDecorator={<WaterfallChartRounded />}>
                  Arrosage declenchée
                </Chip>}
              </>
            }
            disablePadding
          >
            <ListItemButton sx={{ boxShadow: 4 }}>
              <ListItemAvatar sx={{ p: 1 }}>
                {!actifPump && <Avatar
                  // alt={`Avatar n°${value + 1}`}
                  src={pompe}
                  sx={{ m: '0 auto', height: 50, width: 50 }}
                  size='lg'
                />}
                {actifPump && <Avatar
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
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
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
              {/* <ListItemText id={labelId} primary={`Line item ${value + 1}`} /> */}
            </ListItemButton>
          </ListItem>
        </List>

      </TabPanel>


    </Box>

  );
}






