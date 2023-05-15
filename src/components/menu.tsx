import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
// import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import InboxIcon from '@mui/icons-material/Inbox';
import Label from '@mui/icons-material/Label';
import People from '@mui/icons-material/People';
import Info from '@mui/icons-material/Info';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Star from '@mui/icons-material/Star';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Avatar, Divider } from '@mui/joy';
import { DashboardRounded, History, Logout, PeopleAlt, Person2, Person2Rounded, PersonAdd, Settings, SystemSecurityUpdateGood } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ListItemIcon, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
;


export default function MenuDashboard() {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    textDecoration: 'none'
  };
  const userRole = localStorage.getItem('role')?.split(' ').join('')
  const userNom = localStorage.getItem('nom')?.split(' ').join('')
  const userPrenom = localStorage.getItem('prenom')?.split(' ').join('')


  return (  
    <>
    
      {!fullScreen && <Box sx={{ py: 1, pr: 4,ml:1, mb:1, maxHeight:"80%", maxWidth: '85%',  }}>

          <Typography alignItems='center'> 
              <Avatar sx={{m:'0 auto', p:6}} alt={userPrenom} src='' />
          </Typography>
          <Typography
              align='center'
              sx={{
                  p:2,
                 
              }}
              textTransform='capitalize'
              // level='body1'
          > 
              {userPrenom} {userNom}
          </Typography>
        <Divider />
        <List
          aria-label="Sidebar"
          
          sx={{
            
            minHeight:'25rem',
            // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
            '--ListItem-paddingLeft': '0px',
            '--ListItemDecorator-size': '64px',
            '--ListItemDecorator-color': (theme) => theme.vars.palette.text.secondary,
            '--ListItem-minHeight': '32px',
            '--List-nestedInsetStart': '13px',
            [`& .${listItemDecoratorClasses.root}`]: {
              justifyContent: 'flex-end',
              pr: '18px',
            },
            '& [role="button"]': {
              borderRadius: '0 20px 20px 0',
            },
          }}
        >
          <ListItem >
          <Link  to="/dashboard" style={linkStyle} onClick={()=> setIndex(0)}>
            <ListItemButton
              selected={index === 0}
              variant={index === 0 ? 'soft' : 'plain'}
              color={index === 0 ? 'primary' : undefined}
              // onClick={(e) => { e.preventDefault();setIndex(0); window.location.pathname ='dashboard'}}
            >
              <ListItemDecorator>
                <DashboardRounded  />
              </ListItemDecorator>
              <ListItemContent>Dashboard</ListItemContent>
              {/* <Typography level="body2" sx={{ fontWeight: 'bold', color: 'inherit' }}>
                1,950
              </Typography> */}
            </ListItemButton>
          </Link>
            
          </ListItem>
          <ListItem >
          <Link to="/historique" style={linkStyle} onClick={()=> setIndex(1)}>
            <ListItemButton
              selected={index === 1}
              variant={index === 1 ? 'soft' : 'plain'}
              color={index === 1 ? 'info' : undefined}
              // onClick={() => {setIndex(1);  window.location.pathname ='historique'}}
            >
              <ListItemDecorator>
                <WorkHistoryIcon  />
              </ListItemDecorator>
              <ListItemContent>Historique</ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>

          {userRole !=="user" && <ListItem >
          <Link to="/abonnement" style={linkStyle} onClick={()=> setIndex(2)}>
            <ListItemButton
              selected={index === 2}
              variant={index === 2 ? 'soft' : 'plain'}
              color={index === 2 ? 'success' : undefined}
              // onClick={() => {setIndex(2);  window.location.pathname ='abonnement'}}
            >
              <ListItemDecorator>
                <TurnedInNotIcon  />
              </ListItemDecorator>
              <ListItemContent>Abonnements</ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>}

          {userRole !=="user" && <ListItem >
          <Link to="/systeme" style={linkStyle} onClick={()=> setIndex(3)}>
            <ListItemButton
              selected={index === 3}
              variant={index === 3 ? 'soft' : 'plain'}
              color={index === 3 ? 'danger' : undefined}
              // onClick={() => {setIndex(3); window.location.pathname ='systeme'}}
            >
              <ListItemDecorator>
                <SystemSecurityUpdateGood  />
              </ListItemDecorator>
              <ListItemContent>Systeme</ListItemContent>
            </ListItemButton>
            </Link>
          </ListItem>}
          
          {userRole !=="user" &&<ListItem >
            <ListItemButton
              selected={index === 4}
              variant={index === 4 ? 'soft' : 'plain'}
              color={index === 4 ? 'warning' : undefined}
              onClick={(e) => {setIndex(4); handleClick(e)}}
            >
              <ListItemDecorator>
                <PeopleAlt  />
              </ListItemDecorator>
              <ListItemContent>Utilisateurs</ListItemContent>
            </ListItemButton>
            {/* </Link> */}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 10,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  
                  width:"18%",
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 5,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              sx={{ml:'10%'}}
            >
        
              <Link to="/inscription" style={linkStyle} onClick={()=> setIndex(10)}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Inscription
                </MenuItem>
              </Link>

              <Link to="/clients" style={linkStyle} onClick={()=> setIndex(10)}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ChecklistIcon fontSize="small" />
                  </ListItemIcon>
                  Liste client
                </MenuItem>
              </Link>
        
            </Menu>
      
          </ListItem>}

          <ListItem >
          <Link to="/profil" style={linkStyle} onClick={()=> setIndex(5)}>
            <ListItemButton
              selected={index === 5}
              variant={index === 5 ? 'soft' : 'plain'}
              color={index === 5 ? 'success' : undefined}
              // onClick={() => {setIndex(5); window.location.pathname ='profil'}}
            >
              <ListItemDecorator>
                <Person2Rounded  />
              </ListItemDecorator>
              <ListItemContent>Profil</ListItemContent>
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem sx={{  maxWidth:"92%", mt:"auto"}}>
            <ListItemButton
              selected={index === 6}
              // variant={index === 5 ? 'soft' : 'plain'}
              // color={index === 5 ? 'light' : undefined}
              onClick={() => {setIndex(6); window.location.pathname =''}}
            >
              <ListItemDecorator>
                <Logout  />
              </ListItemDecorator>
              <ListItemContent>Deconnexion</ListItemContent>
            </ListItemButton>
          </ListItem>
          
          
        </List>
      </Box>
      }
      {fullScreen &&
      <Box sx={{ border:"1px solid", maxHeight:"60%", maxWidth: '90%',  }}>

          <Typography alignItems='center'> 
              <Avatar sx={{m:'0 auto', p:0}}>AB</Avatar>
          </Typography>
          <Typography
              align='center'
              sx={{
                  p:2,
                 
              }}
              // level='body1'
          > 
              {/* Abdoul Diallo */}
          </Typography>
        <Divider />
        <List
          aria-label="Sidebar"
          
          sx={{
            
            minHeight:'25rem',
            // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
            '--ListItem-paddingLeft': '0px',
            '--ListItemDecorator-size': '64px',
            '--ListItemDecorator-color': (theme) => theme.vars.palette.text.secondary,
            '--ListItem-minHeight': '32px',
            '--List-nestedInsetStart': '13px',
            [`& .${listItemDecoratorClasses.root}`]: {
              justifyContent: 'flex-end',
              pr: '18px',
            },
            '& [role="button"]': {
              borderRadius: '0 20px 20px 0',
            },
          }}
        >
          <ListItem >
          <Link  to="/dashboard" style={linkStyle} onClick={()=> setIndex(0)}>
            <ListItemButton
              selected={index === 0}
              variant={index === 0 ? 'soft' : 'plain'}
              color={index === 0 ? 'primary' : undefined}
              // onClick={(e) => { e.preventDefault();setIndex(0); window.location.pathname ='dashboard'}}
            >
              <ListItemDecorator>
                <DashboardRounded  />
              </ListItemDecorator>
              
              {/* <Typography level="body2" sx={{ fontWeight: 'bold', color: 'inherit' }}>
                1,950
              </Typography> */}
            </ListItemButton>
          </Link>
            
          </ListItem>
          <ListItem >
          <Link to="/historique" style={linkStyle} onClick={()=> setIndex(1)}>
            <ListItemButton
              selected={index === 1}
              variant={index === 1 ? 'soft' : 'plain'}
              color={index === 1 ? 'info' : undefined}
              // onClick={() => {setIndex(1);  window.location.pathname ='historique'}}
            >
              <ListItemDecorator>
                <WorkHistoryIcon  />
              </ListItemDecorator>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
          <Link to="/abonnement" style={linkStyle} onClick={()=> setIndex(2)}>
            <ListItemButton
              selected={index === 2}
              variant={index === 2 ? 'soft' : 'plain'}
              color={index === 2 ? 'success' : undefined}
              // onClick={() => {setIndex(2);  window.location.pathname ='abonnement'}}
            >
              <ListItemDecorator>
                <TurnedInNotIcon  />
              </ListItemDecorator>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem >
          <Link to="/systeme" style={linkStyle} onClick={()=> setIndex(3)}>
            <ListItemButton
              selected={index === 3}
              variant={index === 3 ? 'soft' : 'plain'}
              color={index === 3 ? 'danger' : undefined}
              // onClick={() => {setIndex(3); window.location.pathname ='systeme'}}
            >
              <ListItemDecorator>
                <SystemSecurityUpdateGood  />
              </ListItemDecorator>
            </ListItemButton>
            </Link>
          </ListItem>
          
          <ListItem >
          {/* <Link to="/user" style={linkStyle} onClick={()=> {setIndex(4) handleClick()}}> */}
            <ListItemButton
              selected={index === 4}
              variant={index === 4 ? 'soft' : 'plain'}
              color={index === 4 ? 'warning' : undefined}
              onClick={(e) => {setIndex(4); handleClick(e)}}
            >
              <ListItemDecorator>
                <PeopleAlt  />
              </ListItemDecorator>
            </ListItemButton>
            {/* </Link> */}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 10,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  
                  width:"18%",
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 5,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              sx={{ml:'10%'}}
            >
        
              <Link to="/inscription" style={linkStyle} onClick={()=> setIndex(10)}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                </MenuItem>
              </Link>

              <Link to="/clients" style={linkStyle} onClick={()=> setIndex(10)}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ChecklistIcon fontSize="small" />
                  </ListItemIcon>
                 
                </MenuItem>
              </Link>
        
            </Menu>
      
          </ListItem>
          <ListItem >
          <Link to="/profil" style={linkStyle} onClick={()=> setIndex(5)}>
            <ListItemButton
              selected={index === 5}
              variant={index === 5 ? 'soft' : 'plain'}
              color={index === 5 ? 'success' : undefined}
              // onClick={() => {setIndex(5); window.location.pathname ='profil'}}
            >
              <ListItemDecorator>
                <Person2Rounded  />
              </ListItemDecorator>
          
            </ListItemButton>
          </Link>
          </ListItem>

          <ListItem sx={{  maxWidth:"40%", mt:"auto"}}>
            <ListItemButton
              selected={index === 6}
              // variant={index === 5 ? 'soft' : 'plain'}
              // color={index === 5 ? 'light' : undefined}
              onClick={() => {setIndex(6); window.location.pathname =''}}
            >
              <ListItemDecorator>
                <Logout  />
              </ListItemDecorator>
              
            </ListItemButton>
          </ListItem>
          
          
        </List>
      </Box>}
    
    </>
  );
}
