import React from "react";
import ContactsPhones from "./ContactsPhones";
import ContactsAddress from "./ContactsAddress";
import ContactsWorkingHours from "./ContactsWorkingHours";
import ContactsSimpleMap from "./ContactsSimpleMap";
import "@fontsource/roboto";
import "./Contacts.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    marginTop: "20px",
    height: "80vh"
  },
  
  gridItem: {
    color: "#fff",
    height: "100%",
    backgroundColor: "#36ab35",
    padding: "40px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    ["@media (min-width:960px)"]: {
      // eslint-disable-line no-useless-computed-key
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
    },
  },
});

function Contacts() {
  const classes = useStyles();


  return (
    <div className="contacts">
      <Container fixed>
        <h2 className="contacts__title">Contacts</h2>
        <Grid container justify="center" className="grid-item">
          <Grid item md={4} xs={12} className={classes.gridItem}>
            <Grid container>
              <Grid container justify="center">
                <Grid item md sm={8} xs={10}>
                  <ContactsWorkingHours />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item md sm={8} xs={10}>
                  <ContactsAddress />
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item md sm={8} xs={10}>
                  <ContactsPhones />
                </Grid>

              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6} xs={12}>
            <div className="contacts__map">
              <ContactsSimpleMap />
            </div>
          </Grid>
        </Grid>

        <Grid item lg={6} md={5} xs={12}>

          <div className="contacts__map">
            < ContactsSimpleMap />
          </div>
           
        </Grid>
      </Grid>
    </Container>   
  </div>);

}

export default Contacts;
