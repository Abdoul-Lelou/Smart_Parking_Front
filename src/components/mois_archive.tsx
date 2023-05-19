import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Tabs } from '@mui/material';
import baseUrl from '../baseUrl';
import { useState } from 'react';
import moment from 'moment';


// import  from 'infinite-scroll';


export default function MoisArchive() {
  const [value, setValue] = React.useState(0);

  const [abonnementArchive, setabonnementArchive] = useState("" as any)

  let token = window.localStorage.getItem('token')
  React.useEffect(() => {
   
    
    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      let tab = []
      for (const iterator of res.data) {
        if(iterator.typeAbonnement =="mois" && !iterator.etat){
        
          // let date = moment(iterator.dateInscrit).format('YYYY-MM-DD');
          
          // const date1 = new Date(date).getTime(); // replace with your first date
          // const date2 = new Date().getTime(); // replace with your second date (or use a specific date)

          // const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;

          // if (date2 - date1 > oneMonthInMillis) {
            tab.push(iterator)
            setabonnementArchive(tab)
          // }
        }
        
      }
      
    })
  }, [])
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const element = document.getElementById('list');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }, [])
  
  function fetchData() {
    throw new Error('Function not implemented.');
  }

  function refresh() {
    throw new Error('Function not implemented.');
  }


  return (
    <>

    
    <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="scrollable auto tabs example"
        scrollButtons={true}
        orientation='vertical'
  
    >
      <List id="list" sx={{ width: '100%',maxWidth: 360,height:300, bgcolor: 'background.paper' }}>

        {
          abonnementArchive && abonnementArchive.map((val:any)=>{
            return(
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={val.prenom} src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={val.prenom+" "+ val.nom}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {val.matricule}
                        </Typography>
                        &nbsp;
                         {moment().startOf(val.dateInscrit).fromNow() }
                        {/* {" — I'll be in your neighborhood doing errands this…"} */}
                      </React.Fragment>
                    }
                  />
                  <Divider variant="inset" component="li" />
                </ListItem>
              </>
            )
          })
        }
        {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem> */}
      </List>
    </Tabs>
    </>
  );
}
