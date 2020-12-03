import { Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { blue } from "@material-ui/core/colors"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

const ImageURL = "https://source.unsplash.com/random"

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  overlay: {
    display: "inline-block",
    position: "absolute",
    height: "88vh",
    width: "100%",
    top: "0%",
    left: "0%",
    backgroundColor: "rgba(42, 68, 147, 0.6)",
  },
  paper: {
    display: "table-row",
    position: "relative",
    flex: "1" /* Let it fill the entire space horizontally */,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${ImageURL})`,
    height: "88vh",
    minHeight: "88vh",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "25%",
  },
  landingButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  landingButton: {
    margin: theme.spacing(3),
    borderRadius: "0",
    color: "#FFFFFF",
    backgroundColor: "#2A4494",
    "&:hover": {
      backgroundColor: blue[50],
      color: "#2A4494",
    },
  },
}))

export const LandingPageImage = function () {
  const classes = useStyles()

  const boxArrayText = {
    index: 1,
    header: `None`,
    body1: "Solving Sewing",
    body2: "Sewing Machine Problems",
    body3: "So You Don’t Have To",
  }

  return (
    <>
      <Grid container className={classes.root} spacing={3}>
        <Paper className={classes.paper} square>
          <div className={classes.overlay}>
            <div className={classes.contentContainer}>
              <Typography align="center" variant="h6" color="secondary">
                {boxArrayText.body1}
              </Typography>
              <Typography align="center" variant="h6" color="secondary">
                {boxArrayText.body2}
              </Typography>
              <Typography align="center" variant="h6" color="secondary">
                {boxArrayText.body3}
              </Typography>
              <div className={classes.landingButtonContainer}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.landingButton}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  )
}
