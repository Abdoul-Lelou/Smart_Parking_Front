import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IconButton, Tabs } from '@mui/material';
import baseUrl from '../baseUrl';
import { useState } from 'react';
import { ClearOutlined, DoneOutline, UnarchiveOutlined } from '@mui/icons-material';
import { Modal, ModalClose, Sheet } from '@mui/joy';


// import  from 'infinite-scroll';


export default function SemaineArchive() {
  const [value, setValue] = React.useState(0);
  const [abonnementArchive, setabonnementArchive] = useState("" as any)
  const [abonnements, setabonnements] = useState("" as any);
  const [uidedit, setuidedit] = useState("" as any);
  const [openedit, setopenedit] = useState("" as any);
  const [successStatus, setsuccessStatus] = useState(false)

  const [archive, setArchive] = useState(false);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const openeditDialog =(i:any)=>{
    setopenedit(true)
    setuidedit(i)
  }

  const closeeditDialog =()=>{
    setopenedit(false)
  }

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
        if(iterator.typeAbonnement =="semaine" && !iterator.etat){

          tab.push(iterator)
          setabonnementArchive(tab)
          
        }else if(userRole ==="user"){
          if (iterator._id === uid && !iterator.etat) {
              tabUser.push(iterator)
              setArchive(true)
              setabonnements(tabUser)

          }
        }
        
      }
    })

  }, [abonnementArchive || successStatus])


  const ActiverUser = (e:any)=>{
    e.preventDefault();

    const user = {
      "etat":true
    }




    const token = localStorage.getItem('token')

    const config = { headers: { Authorization: token } }
    const data = user;
    console.log(uidedit?.split(' ').join(''));
    console.log(user);
    
    
    baseUrl.patch(`/update/${uidedit}`, data, config).then((res: any) => {
     
      if (res.data.includes("result modifier")) {
       
        setsuccessStatus(true);
        closeeditDialog()
        setTimeout(() => {
          setsuccessStatus(false);
        }, 2000);
      }
    }).catch((error: any) => {
      // console.log(error);

      // seterrorStatus(true);
      // setTimeout(() => {
      //   seterrorStatus(false);
      // }, 2000);
    })

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
        {successStatus && <Typography align='center' sx={{ m: "auto", fontSize: '15px', color: "green" }}>Reactivé</Typography>}
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
                         <IconButton onClick={()=> openeditDialog(val?._id)}>
                            <UnarchiveOutlined color='error'/>
                         </IconButton>
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
        {
         userRole ==="user"  && archive &&
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


    <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openedit}
        onClose={() => setopenedit(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Typography
            // component="h5"
            id="modal-title"
            variant="h6"
            // textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Voulez vous réactiver cette utilisateur
          </Typography>
          <Typography id="modal-desc" sx={{display:'flex', justifyContent:'space-evenly'}}>
              <IconButton title='Valider' onClick={e=> ActiverUser(e)}>
                <DoneOutline color='success'/>
              </IconButton>
              <IconButton title='Refuser' onClick={closeeditDialog}>
                <ClearOutlined color='error'/>
              </IconButton>
          </Typography>
        </Sheet>
    </Modal>
    
    </>
  );
}
