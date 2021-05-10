import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "@fontsource/roboto";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import ImageSlider from "./slider/ImageSlider";
// import smileIcon from '@material-ui/icons/EmojiEmotionsSharp';
import { MainSliderImages } from "./slider/MainSliderImages";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./contacts/Contacts.css";
import ContactsSimpleMap from "./contacts/ContactsSimpleMap";
import CheckIcon from "@material-ui/icons/CheckCircle";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SliderTransform from "./slider/SliderTransform";
import { reviewsSliderData } from "./slider/reviewsSliderData";
import Avatar from "@material-ui/core/Avatar";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedinUser } from "../reducers/selectors";

const useStyles = makeStyles({
  root: {
    boxShadow: "2px 2px 20px	paleturquoise	",
  },

  textWhite: {
    color: "#fff",
  },

  textSecondary: {
    color: "deepskyblue",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
  },

  center: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  Paper: {
    padding: "40px 10px",
    marginTop: "80px",
  },
  typography: {
    marginBottom: "40px",
  },
  trustIcon: {
    color: "$60BFE6 !important",
    fontSize: "80px",
    display: "block",
    marginBottom: "10px",
  },

  advantages: {
    marginTop: "100px",
    color: "#fff",
    backgroundColor: "#60BFE6",
    color: "#fff",
    display: "block",
    padding: "40px",
  },

  advantagesIcon: {
    color: "#fff",
    fontSize: "60px",
    display: "block",
    marginBottom: "10px",
  },

  title: {
    marginBottom: "40px",
    color: "white",
  },

  card: {
    height: "100%",
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
  },

  reviewSlideAvatar: {
    marginBottom: "40px",
    height: "200px",
  },

  reviewsSlideRate: {
    marginBottom: "40px",
  },
  reviewsSlideName: {
    marginBottom: "40px",
  },

  reviewsSlideText: {},

  starIcon: {
    color: "#00239c",
  },

  // asdd: {
  //   // backgroundImage: `url("https://image.freepik.com/free-vector/dentist-medical-background-with-3d-tooth-design_1017-26095.jpg")`,
  // },
});

function Home() {
  const loggedInUser = useSelector(selectLoggedinUser);
  const classes = useStyles();
  const book = () => {
    if (loggedInUser) {
      return;
    } else {
      alert("Please sign in!");
    }
  };

  return (
    <div className="home">
      <ImageSlider />

      <Paper
        elevation={10}
        style={{
          width: "250px",
          padding: "60px 20px",
          position: "relative",
          left: "60%",
          marginTop: "-140px",
          zIndex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Plan your next visit
          <Link to="/booking" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={book}
              style={{ marginTop: "20px" }}
            >
              Make an appointment
            </Button>
          </Link>
        </Typography>
      </Paper>

      <Container fixed>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper elevation={10} className={classes.Paper}>
              <Typography
                className={classes.typography}
                variant="h4"
                align="center"
              >
                Smile Dental Clinic
              </Typography>

              <Typography
                className={classes.typography}
                variant="h3"
                align="center"
              >
                Trusted & Recommended
              </Typography>

              <Typography
                className={classes.typography}
                varint="body"
                align="center"
              >
                The importance of every patient journey underlines our
                philosophy of providing the best <br />
                possible treatment and standard of care. We take pride in our
                quality and patient care, <br />
                ensuring that the satisfaction, well-being and comfort of our
                patients come first.
              </Typography>

              <Grid container justify="center">
                <Grid
                  item
                  xs={4}
                  className={classNames(classes.grid)}
                  justify="center"
                >
                  <Link>
                    <CheckIcon color="disabled" className={classes.trustIcon} />
                    <Typography
                      align="center"
                      className={classes.typography}
                      variant="body"
                    >
                      Friendy Stuff
                    </Typography>
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={4}
                  className={classNames(classes.grid)}
                  justify="center"
                >
                  <Link>
                    <CheckIcon color="disabled" className={classes.trustIcon} />
                    <Typography align="center" variant="body">
                      High Skilled
                    </Typography>
                  </Link>
                </Grid>

                <Grid item xs={4} className={classNames(classes.grid)}>
                  <Link>
                    <CheckIcon color="disabled" className={classes.trustIcon} />
                    <Typography align="center" variant="body">
                      Relax & Comfort
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <SliderTransform width={30} margin="">
        {reviewsSliderData.map((review) => {
          return (
            <div
              className="reviewsSlideItem"
              style={{
                display: "flex",
                justufyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flex: "0 0 30%",
                margin: "2.5%",
                height: "500px",
              }}
            >
              {" "}
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.reviewSlideAvatar}
                    image={review.avatar}
                    title={review.name}
                  />
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {review.name}
                    </Typography>

                    <Grid
                      container
                      justify="center"
                      className={classes.reviewsSlideRate}
                    >
                      <Grid item xs={1}>
                        <StarIcon className={classes.starIcon} />
                      </Grid>
                      <Grid item xs={1}>
                        <StarIcon className={classes.starIcon} />
                      </Grid>
                      <Grid item xs={1}>
                        <StarIcon className={classes.starIcon} />
                      </Grid>
                      <Grid item xs={1}>
                        <StarIcon className={classes.starIcon} />
                      </Grid>
                      <Grid item xs={1}>
                        <StarIcon className={classes.starIcon} />
                      </Grid>
                    </Grid>

                    <Typography
                      align="center"
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {review.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              {/* <Avatar className={classes.reviewsSlideAvatar} src={review.avatar} variant="rounded"></Avatar>
              <Typography align="center" variant="h5" className={classes.reviewsSlideName}>{review.name}</Typography>
             
                <Grid container justify="center" className={classes.reviewsSlideRate}>
                  <Grid item xs={1}><StarIcon className={classes.starIcon}/></Grid>
                  <Grid item xs={1}><StarIcon className={classes.starIcon}/></Grid>
                  <Grid item xs={1}><StarIcon className={classes.starIcon}/></Grid>
                  <Grid item xs={1}><StarIcon className={classes.starIcon}/></Grid>
                  <Grid item xs={1}><StarIcon className={classes.starIcon}/></Grid>
                </Grid>
            
              <Typography align="center" variant="body1" className="reviewsSlideText">{review.text}</Typography>
             */}
            </div>
          );
        })}
      </SliderTransform>
      <Grid
        container
        style={{ marginTop: "200px", background: "#60BFE6", padding: "80px 0" }}
      >
        <Grid
          item
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "100" }}
          >
            Our Cases <br /> & <br /> Patient Stories
          </Typography>
        </Grid>

        <Grid item sm={6}>
          <Grid container alignItems="center">
            <Grid item sm={3} style={{ marginLeft: "30px" }}>
              <img
                style={{ marginTop: "-60px", marginLeft: "30px" }}
                className="home__clients-img"
                src="http://localhost:3000/images/patimages/img1.jpg"
              />
            </Grid>

            <Grid item sm={3} style={{ marginLeft: "30px" }}>
              <img
                style={{ matrginBottom: "-30px", marginLeft: "30px" }}
                className="home__clients-img"
                src="http://localhost:3000/images/patimages/img2.jpg"
              />
            </Grid>

            <Grid item sm={3} style={{ marginLeft: "30px" }}>
              <img
                style={{ marginTop: "-30px", marginLeft: "30px" }}
                className="home__clients-img"
                src="http://localhost:3000/images/patimages/img3.jpg"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Container fixed style={{ marginTop: "100px" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6}>
            <img
              style={{
                width: "600px",
                height: "600px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              className="home__clinic-img"
              src="http://localhost:3000/images/dental-cabinet.jpg"
              width="50%"
            />
          </Grid>
          <Grid
            item
            md={6}
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <Typography component="h2" variant="h4">
              A Warm Welcome and a Beautiful Smile
            </Typography>
            <br />
            <Typography
              component="h4"
              variant="h5"
              style={{ marginBottom: "40px" }}
            >
              Our clients are our priority, we offer quality dental services
              with a team of specialists. More details about our services below.
            </Typography>
            <br />
            <Typography
              component="h1"
              variant="h6"
              style={{ marginBottom: "40px" }}
            >
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              style={{ marginBottom: "40px" }}
            >
              explorer of the truth, the master-builder of human happiness. Nor
              again is there anyone who loves or pursues or desires to obtain
              pain of itself, because it is pain, but because occasionally
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              style={{ marginBottom: "40px" }}
            >
              circumstances occur in which toil and pain can procure him some
              great pleasure.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Paper className={classes.advantages}>
        <Typography align="center" variant="h4" className={classes.title}>
          Our Advantages
        </Typography>
        <Grid container>
          <Grid item lg sm={6} xs={12} className={classes.grid}>
            <Box className={classes.center}>
              <LocalMallIcon className={classNames(classes.advantagesIcon)} />
              <Typography
                variant="h6"
                align="center"
                className={classNames(classes.typography)}
              >
                Working with <br /> insurance packages
              </Typography>
            </Box>
          </Grid>

          <Grid item lg sm={6} xs={12} className={classes.grid}>
            <Box className={classes.center}>
              <ImportantDevicesIcon
                className={classNames(classes.advantagesIcon)}
              />
              <Typography
                variant="h6"
                align="center"
                className={classNames(classes.typography)}
              >
                Innovative technologies
              </Typography>
            </Box>
          </Grid>

          <Grid item lg sm={6} xs={12} className={classes.grid}>
            <Box className={classes.center}>
              <VerifiedUserIcon
                className={classNames(classes.advantagesIcon)}
              />
              <Typography
                variant="h6"
                align="center"
                className={classNames(classes.typography)}
              >
                Guaranteed <br /> successful treatment
              </Typography>
            </Box>
          </Grid>

          <Grid item lg sm={6} xs={12} className={classes.grid}>
            <Box className={classes.center}>
              <LocalHospitalIcon
                className={classNames(classes.advantagesIcon)}
              />
              <Typography
                variant="h6"
                align="center"
                className={classNames(classes.typography)}
              >
                Certified doctors
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Container fixed style={{ marginTop: "100px" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item md={6}>
            <img
              style={{
                width: "600px",
                objectFit: "cover",
                height: "600px",
                borderRadius: "50%",
              }}
              className="home__clinic-img"
              src="http://localhost:3000/images/dental-cabinet2.jfif"
              width="50%"
            />
          </Grid>
          <Grid
            item
            md={6}
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
          >
            <Typography component="h2" variant="h4">
              Dentist Clinic
            </Typography>
            <br />
            <Typography
              component="h4"
              variant="h5"
              style={{ marginBottom: "40px" }}
            >
              Our clients are our priority, we offer quality dental services
              with a team of specialists. More details about our services below.
            </Typography>
            <br />
            <Typography
              component="h1"
              variant="h6"
              style={{ marginBottom: "40px" }}
            >
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              style={{ marginBottom: "40px" }}
            >
              explorer of the truth, the master-builder of human happiness. Nor
              again is there anyone who loves or pursues or desires to obtain
              pain of itself, because it is pain, but because occasionally
            </Typography>

            <Typography
              component="h1"
              variant="h6"
              style={{ marginBottom: "40px" }}
            >
              circumstances occur in which toil and pain can procure him some
              great pleasure.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container fixed>
        <Typography
          variant="h3"
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          Find Us
        </Typography>
        <Grid container>
          <Grid item lg={6} md={5} xs={12}></Grid>
        </Grid>
        <div className="contacts__map">
          <ContactsSimpleMap />
        </div>
      </Container>
    </div>
  );
}

<Container></Container>;

export default Home;
