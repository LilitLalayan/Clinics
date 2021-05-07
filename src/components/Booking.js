import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import { db } from "..";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Booking() {
  const classes = useStyles();
  const [allDoctors, setAllDoctors] = useState([])
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    datetimeLocal: "",
  });

  const [currentDoctor, setCurrentDoctor] = useState("");
  const [isDocSelected, setIsDocSelected] = useState(false);
  const [currentService, setCurrentService] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [selectDoctorId, selectServiceId, selectAppoinmentId] = ["selectDoctor", "selectService", "selectAppoinment"]
  useEffect(() => {
    // retrieving doctors data from firebase-database
    const doctorsRef = db.collection("doctors");
    doctorsRef.get().then((querySnapShot) => {
      const data = [];
      querySnapShot.forEach((snapShotData) => {
        data.push(snapShotData.data());
      });
      setAllDoctors(data);
    });
  }, []);
  const onBtnClick = async (event) => {
    event.preventDefault();
    try {
      const docRef = await db
        .collection("booking-data")
        .doc(`booking-data ${bookingData.email}`)
        .set(bookingData);
    } catch (error) {}
  };
  const onChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;
    setBookingData((oldState) => ({
      ...oldState,
      [id]: value,
    }));
    console.log(allDoctors,"zzzzzzzzzzzz")
    
    setIsDocSelected(true)
  };
  console.log(bookingData);
  const [age, setAge] = React.useState(["Artak", "Vardan", "Valeri", "Davit"]);
  // const arr = ["Artak", "Vardan", "Valeri", "Davit"];
  const handleChange = (event,id) => {
    console.log(id)
    const value = event.target.value;
    
    switch(id) {
      case "selectDoctor": {
        setCurrentDoctor(value);
        setIsDocSelected(true)
        console.log("tttttttt", isDocSelected)
        break;
      }

      case "selectService": {
        setCurrentService(value);
        break;
      }

      case "selectAppoinment" : {
        setCurrentTime(value);
      }
    }
    console.log(allDoctors, event.target.value,"ggggggdddddddddd")
    setCurrentDoctor(event.target.value);
  };
  console.log(isDocSelected,"hhhhggggggghhhhhhhhhhh")
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={20}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" style={{ textAlign: "left" }}>
            Book Now
          </Typography>
          <br />
          <form className={classes.form} noValidate>
            <br />
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Doctors</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id={selectDoctorId}
                  value={allDoctors[0]}
                  onChange={() => {handleChange(selectDoctorId)}}
                >
                  {allDoctors.map((doctor, index) => {
                    return (
                      <MenuItem key={index} index={index} value={doctor}>{doctor.name}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Services</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id={selectServiceId}
                  value={currentService}
                  onChange={() => {handleChange(selectServiceId)}}
                >
                  {/* {allDoctors.currentDocServices.map((docService,index) => {
                      <MenuItem key={index} value={docService}>{docService}</MenuItem>
                  })} */}
                  {isDocSelected ? currentDoctor.currentDocServices.map((currentDocService, index) => {
                    return (
                      <MenuItem key={index} value={currentDocService}>{currentDocService}</MenuItem>
                    )
                  }): "select doctor first"}
                </Select>
              </FormControl>
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Choose Time
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id={selectAppoinmentId}
                  value={currentTime}
                  onChange={() => {handleChange(selectAppoinmentId)}}
                >
                  <MenuItem value={10}>10:00 - 11:00</MenuItem>
                  <MenuItem value={20}>11:00 - 12:00</MenuItem>
                  <MenuItem value={30}>12:00 - 13:00</MenuItem>
                  <MenuItem value={40}>13:00 - 14:00</MenuItem>
                  <MenuItem value={50}>14:00 - 15:00</MenuItem>
                  <MenuItem value={60}>15:00 - 16:00</MenuItem>
                  <MenuItem value={70}>16:00 - 17:00</MenuItem>
                  <MenuItem value={80}>17:00 - 18:00</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onBtnClick}
            >
              BOOK NOW
            </Button>
          </form>
        </div>
      </Paper>
    </Container>
  );
}