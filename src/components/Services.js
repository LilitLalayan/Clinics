import  React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {db} from "../index"
import Service from './Service';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Services() {
const classes =useStyles();
  const [services, setServices]= useState([]) 
 useEffect(()=> {
   const servicesRef = db.collection ("services")
   servicesRef.get().then((querySnapShot) => {
    const data = [];
    querySnapShot.forEach((asd) => {
      data.push(asd.data());
    });
    setServices(data);
  });
}, []);

   return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography component="h5" variant="h6" align="center" color="textPrimary" gutterBottom>
              Smile Dantal Clinic
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
            Smile Dantal Clinic offers a full array of dental services to help you maintain healthy teeth.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="primary">
                 Book now
                  </Button>
                </Grid>
                <Grid item>
               </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
        <Service service={service} index={index+1} key ={service.uid}></Service>

            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Smile Dentale Clinic
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <iframe width="500" height="255" src="https://www.youtube.com/embed/eZDwzYhbIBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}


