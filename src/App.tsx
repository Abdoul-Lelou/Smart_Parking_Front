import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/login/login';
import Home from './pages/homepage/home';
import Dashboard from './pages/dashboard/dashboard';
import Inscription from './pages/inscription/inscription';

import Profil from './pages/profil/profil';
import User from './pages/user/user';
import { Route, Routes } from 'react-router-dom';
import Abonnement from './pages/abonnement/abonnement';
import MenuDashboard from './components/menu';
import { Grid, CssBaseline } from '@mui/material';
import System from './pages/systeme/system';
import Historique from './pages/historique/historique';
import Clients from './pages/clients/clients';
import * as io from "socket.io-client";


import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8000/";

function App() {

const socket = socketIOClient(ENDPOINT);

socket.once('passe', d=>{
  console.log("passe: ",d);
  
})

console.log(socketIOClient)

socket.emit('isOn', "allumer")
socket.emit('test', "ca marche")

// console.log(socket);


  const [showHome, setshowHome] = useState(false)
  const [showLogin, setshowLogin] = useState(false)

  useEffect(() => {
    if (window.location.pathname == '/' || window.location.pathname == '/home') {
      console.log(window.location.pathname);

      setshowHome(true)
    } else if (window.location.pathname == '/' || window.location.pathname == '/login') {
      console.log(window.location.pathname);
      setshowLogin(true)
    } else {
      setshowHome(false);
      setshowLogin(false)
    }



  }, [])


  return (
    <>

      {
        showHome && <Home />
      }

      {
        showLogin && <Login />
      }


      {!showHome && !showLogin && <Grid sx={{ background: '#5280fc', minHeight: '100vh', p: 1 }}>
        {/* &nbsp; */}
        {/* <Inscription /> */}
        {/* <Profil /> */}
        {/* <User /> */}
        {/* <Dashboard /> */}



        <Grid
          container
          component="main"
          className="img"
          sx={{

            display: 'flex',
            justifyContent: 'start',
            // maxHeight: '85%',
            height: "auto",
            width: '90%',
            margin: '0px auto',
            boxShadow: 3,
            borderRadius: 5,
            background: "#fff",
            // mx: 13,
            // pl:1.5,


          }}
        >
          <CssBaseline enableColorScheme />
          <Grid
            item
            xs={false}
            sm={2.5}
            md={2.5}
            sx={{
              minHeight: '80%',
              borderRightRadius: 5,
            }}
          >

            <MenuDashboard />
            {/* <ResponsiveDrawer/> */}




          </Grid>
          <Grid
            item
            xs={false}
            sm={9.5}
            md={9.5}

            sx={{
              background: "#E0E0E0",
              borderRadius: 5,
              borderBottomLeftRadius: 10,
              boxShadow: 5,
              pt: 5
            }}
          >

            {/* <Dashboard_component /> */}
            <Routes>

              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profil' element={<Profil />} />
              <Route path='/user' element={<User />} />
              <Route path='/abonnement' element={<Abonnement />} />
              <Route path='/systeme' element={<System />} />
              <Route path='/historique' element={<Historique />} />
              <Route path='/clients' element={<Clients />} />
              {/* 
          <Route  path='/moyentemp' element={<MoyTempHum />}/>
          */}
              <Route path='/inscription' element={<Inscription />} />
              {/* <Route  path='/login' element={<Login />}/> */}
              {/* <Route  path='/' element={<Home />}/> */}
              {/* <Route  path='/edituser' element={<Edituser />}/>
          <Route  path='*' element={<NotFound />}/> */}



            </Routes>


          </Grid>
        </Grid>





      </Grid>

      }
    </>
  );
}

export default App;
