import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Tabs } from '@mui/material';
import baseUrl from '../baseUrl';
import { useState } from 'react';
import moment from 'moment';


// import  from 'infinite-scroll';


export default function SemaineArchive() {
  const [value, setValue] = React.useState(0);
  const [abonnementArchive, setabonnementArchive] = useState("" as any)
  const [abonnements, setabonnements] = useState("" as any);
  const [archive, setArchive] = useState(false);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let token = window.localStorage.getItem('token')
  const userRole = localStorage.getItem('role')?.split(' ').join('')
  const uid = localStorage.getItem('uid')?.split(' ').join('')

  React.useEffect(() => {
    const element = document.getElementById('list');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

    baseUrl.get('/getAll  ',{headers: {Authorization : token}}).then((res:any) => {
      let tab = []; let tabUser =[];
      for (const iterator of res.data) {
        if(iterator.typeAbonnement =="semaine"){
        
          let date = moment(iterator.dateInscrit).format('YYYY-MM-DD');
          
          const date1 = new Date(date).getTime(); // replace with your first date
          const date2 = new Date().getTime(); // replace with your second date (or use a specific date)

          const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;

          if (date2 - date1 > oneMonthInMillis) {
            tab.push(iterator)
            setabonnementArchive(tab)
          }
        }else if(userRole ==="user"){
          if (iterator._id === uid) {
            let date = moment(iterator.dateInscrit).format('YYYY-MM-DD');
          
            const date1 = new Date(date).getTime(); 
            const date2 = new Date().getTime(); 

            const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;

            if (date2 - date1 > oneMonthInMillis) {
              tabUser.push(iterator)
              setArchive(true)
              setabonnements(tab)
            }else setArchive(false)

          }
        }
        
      }
    })

  }, [])
  


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
         userRole !=="user" && abonnementArchive && abonnementArchive.map((val:any)=>{
          console.log(val);
          
            return(
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={val.prenom} src="/static/images/avatar/1.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={val.prenom+""+ val.nom}
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
        {
         userRole ==="user"  && !archive &&
                <>
                 <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt={"val.prenom"} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={"val.prenom"+" "+ "val.nom"}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {"val.matricule"}
                          </Typography>
                          &nbsp;
                          {/* {moment().startOf(val.dateInscrit).fromNow() } */}
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }
                    />
                    <Divider variant="inset" component="li" />
                  </ListItem>
                 
                </>
           
        }
        

      </List>
    </Tabs>
    </>
  );
}
