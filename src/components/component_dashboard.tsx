import * as React from 'react';
import { styled } from '@mui/joy/styles';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import Card_dashboard from './submit_card';
import Card_place from './site_card';
import Card_systeme from './systeme_card';
import Card_historique from './historique_card';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

export default function Dashboard_component() {

  let tmp = false;

  React.useEffect(() => {
   
  
    
  }, [])
  

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 5 }}
      //   sx={{ width: '100%' }}
      >
          <Grid xs={4} spacing={4}>
            {/* <Item> */}
                  <Grid  
                        sx={{ 
                            boxShadow:5, 
                            display:'block', 
                            justifyContent:"center"
                        }}
                    >
                        <Card_dashboard/>
                  </Grid>
                  <Grid  
                        sx={{
                            boxShadow:5, 
                            display:'block', 
                            justifyContent:"center",
                            mt:8.5
                        }}
                    >
                        <Card_place />
                  </Grid>
                  <Grid  
                        sx={{
                            boxShadow:5, 
                            display:'block', 
                            justifyContent:"center",
                            mt:8.5
                        }}
                    >
                        <Card_systeme />

                  </Grid>
            {/* </Item> */}
          </Grid>
          <Grid xs={7.5} sx={{ boxShadow:5}}>
            {/* <Item> */}
            <iframe  src="https://embed.waze.com/fr/iframe?zoom=12&lat=14.7645042&lon=-17.3660286"
                    width="100%" height="360"  style={{ border: 0 }}></iframe>
            {/* </Item> */}
            &nbsp;
            <Card_historique />
          </Grid>
        
      </Grid>
    </>
  );
}
