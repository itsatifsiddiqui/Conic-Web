import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { CircularProgress, Container, Grid, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AccountsGrid from './AccountsGrid';
import { Box } from '@mui/system';
import AuthService from '../services/auth_service';
import FirestoreService from '../services/firestore_service';


function ProfileInfo() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    console.info("USEEFFECT CALLED");
    async function singInUser() {
      await AuthService.signInUser();
      const splittedUrl = window.location.href.split('/');
      const userId = splittedUrl[splittedUrl.length - 1];
      const user = await FirestoreService.getUserData(userId);
      setUser(user);
    }
    singInUser()
  }, []);




  const isMobile = useMediaQuery('(max-width:600px)');





  if (user == null) {

    return (
      <Container maxWidth='sm'>
        <CircularProgress color="success" />
      </Container>
    )
  }

  console.log(user);


  return (
    <Container maxWidth='sm'>

      <Paper elevation={isMobile ? 0 : 2} >
        <>


          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ zIndex: 2, marginTop: 70, marginBottom: '12px' }}
          >
            <>
              <Avatar
                alt={user.name}// "Atif Siddiqui"
                src={user?.image ?? '"https://graph.facebook.com/2603952819899083/picture"'}
                sx={{ width: 100, height: 100, marginTop: '24px', }}
              />
              <Container sx={{ minHeight: 12 }} />
              <Typography sx={{ fontSize: 14, fontWeight: 'medium', fontFamily: 'Montserrat', textAlign: 'center' }} color="black">
                @{user.username}
              </Typography>
              <Container sx={{ minHeight: 4 }} />
              <Typography sx={{ fontSize: 18, fontWeight: 'normal', fontFamily: 'Montserrat', textAlign: 'center' }} color="black">
                {user.name}
              </Typography>
              <Container sx={{ minHeight: 12 }} />

            </>

          </Grid>

          <Grid container style={{ marginInline: isMobile ? '4px' : '16px' }}  >

            <Grid item >

              <Typography align='left' sx={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Montserrat' }} color="black">
                {user.name}'s Accounts
              </Typography>
              <Typography align='left' sx={{ fontSize: 12, fontWeight: 'medium', fontFamily: 'Montserrat', opacity: 0.6 }} color="black" >
                Tap on account to proceed
              </Typography>
              <Container sx={{ minHeight: 16 }} />
            </Grid>

          </Grid>
        </>

        <Box m={isMobile ? 0 : 1.5} >
          <AccountsGrid userData={user} />
        </Box>


        <Container sx={{ minHeight: 24 }} />

      </Paper>

    </Container >



  )
}

export default ProfileInfo
