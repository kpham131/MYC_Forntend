import React from "react";
import { flexbox } from "@material-ui/system";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
// import Montserrat from "../../util/styles/fonts/Montserrat-ExtraBold.tff";
export default function Landing() {
  document.body.style = "background:cyan";

  const useStyles = makeStyles({
    general: {
      textAlign: "center",
      whiteSpace: "pre",
      fontFamily: "Montserrat",
    },
    MYC: {
      variant: "h2",
      fontSize: "5vw",
      paddingTop: "4vw",
    },
    other: {
      variant: "h3",
      fontSize: "3.5vw",
    },
  });
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Typography className={classes.general + " " + classes.MYC}>
          M I S S E D   Y O U R   C A L L
        </Typography>
      </Grid>

      {/* <Grid item xs={6}>
        <flexbox>...</flexbox>
      </Grid>
      <Grid item xs={6}>
        <flexbox>Agency</flexbox>
      </Grid> */}

      <Grid item xs={12}>
        <Typography className={classes.general + " " + classes.other}>
          E S T   2 0 1 9
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.general + " " + classes.other}>
          - Welcome to your choice -
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.general + " " + classes.other}>
          _____________
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          className={classes.general + " " + classes.other}
          style={{ paddingTop: "2vw" }}
        >
          <a href="home" style={{ color: "black", textDecoration: "none" }}>
            Public Store
          </a>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.general + " " + classes.other}>
          _____________
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          className="pt-2"
          className={classes.general + " " + classes.other}
          style={{ paddingTop: "2vw" }}
        >
          Design Your Own
        </Typography>
      </Grid>
    </Grid>
  );
}
