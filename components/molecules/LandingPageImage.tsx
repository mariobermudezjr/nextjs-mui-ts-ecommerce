import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

const ImageURL0 = "https://i.ibb.co/SNVQJMC/needle-compress-resize.jpg"
const ImageURLMOBILE00 = "https://i.ibb.co/kyvSMYc/needle-thread-copy-400w.jpg"
//const ImageURLMOBILE0 =
// "https://i.ibb.co/8g6jhBy/red-orange-thread-copy-compressed-400w.jpg"
// const ImageURL1 = "https://i.ibb.co/25pQ0WG/needle-compressed.jpg"
// const ImageURL2 = "https://i.ibb.co/k91yXzv/needle-comp-resized-1450.jpg"
// const ImageURL3 = "https://i.ibb.co/hXqYp36/needle-comp-reaized2.jpg"

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  overlayDesktop: {
    display: "inline-block",
    position: "absolute",
    height: "93vh",
    width: "100%",
    top: "0%",
    left: "0%",
    backgroundColor: "rgba(42, 68, 147, 0.6)",
  },
  overlayMobile: {
    display: "inline-block",
    position: "absolute",
    height: "93vh",
    width: "100%",
    top: "0%",
    left: "0%",
    backgroundColor: "rgba(42, 68, 147, 0.6)",
  },
  paperDesktop: {
    display: "table-row",
    position: "relative",
    flex: "1" /* Let it fill the entire space horizontally */,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${ImageURL0})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    height: "93vh",
    minHeight: "93vh",
  },
  paperMobile: {
    display: "table-row",
    position: "relative",
    flex: "1" /* Let it fill the entire space horizontally */,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${ImageURLMOBILE00})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    height: "93vh",
    minHeight: "93vh",
  },
  contentContainer: {
    display: "flex",
    height: "93vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    justifyItems: "center",
  },
  innerContainer: {
    width: "auto",
    marginLeft: theme.spacing(48),
    paddingLeft: theme.spacing(24),
  },
  landingButtonContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  landingButton: {
    marginTop: theme.spacing(3),
    color: "#FFFFFF",
    backgroundColor: "#122C34",

    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "&:hover": {
      color: "#122C34",
      backgroundColor: "#FFFFFF",
    },
  },
}))

export const LandingPageImage = function () {
  const classes = useStyles()

  const boxArrayText = {
    index: 1,
    header: `None`,
    body1: "Solving Sewing Machine Problems",
    body2: "So You Don’t Have To",
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <>
        <Box
          border={0}
          borderColor="white"
          display={{ xs: "none", md: "block" }}
          m={1}
          style={{
            position: "relative",
            flex: "1" /* Let it fill the entire space horizontally */,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${ImageURL0})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            height: "93vh",
            minHeight: "93vh",
          }}
        >
          <div className={classes.overlayDesktop}>
            <div className={classes.contentContainer}>
              <Box className={classes.innerContainer}>
                <Typography align="center" variant="h4" color="secondary">
                  {boxArrayText.body1}
                </Typography>
                <Typography align="left" variant="h4" color="secondary">
                  {boxArrayText.body2}
                </Typography>
                <div className={classes.landingButtonContainer}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.landingButton}
                  >
                    <Typography align="center" variant="h5" color="inherit">
                      Get Started
                    </Typography>
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        </Box>
        <Box
          border={0}
          borderColor="white"
          display={{ xs: "block", md: "none" }}
          m={1}
          style={{
            position: "relative",
            flex: "1" /* Let it fill the entire space horizontally */,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${ImageURLMOBILE00})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            height: "93vh",
            minHeight: "93vh",
          }}
        >
          <div className={classes.overlayMobile}>
            <div className={classes.contentContainer}>
              <Typography align="center" variant="h6" color="secondary">
                {boxArrayText.body1}
              </Typography>
              <Typography align="center" variant="h6" color="secondary">
                {boxArrayText.body2}
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
        </Box>
      </>
    </Grid>
  )
}
