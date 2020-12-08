import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"
import React from "react"

// const ImageURL = "https://source.unsplash.com/random"
const ImageURThreadsL =
  "https://i.ibb.co/ZxkrFfv/colorful-thread-copy-compr.jpg"
const ImageURThreadsL1 = "https://i.ibb.co/Jk8bLKK/industrial-thread-compr.jpg"
// const ImageURThreadsL2 = "https://i.ibb.co/P154pB1/sewing-string-comprs.jpg"
const ImageURThreadsL3 = "https://i.ibb.co/7SVpGtt/medal-grid-comprssed.jpg"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper0: {
    justifyContent: "center",
    alignItems: "center",
    height: 434,
    width: 339,
    backgroundColor: fade("#2A4494", 0.5),
    overflow: "hidden",
    backgroundImage: `url(${ImageURThreadsL})`,
  },
  paper1: {
    justifyContent: "center",
    alignItems: "center",
    height: 434,
    width: 339,
    backgroundColor: fade("#2A4494", 0.5),
    overflow: "hidden",
    backgroundImage: `url(${ImageURThreadsL1})`,
  },
  paper2: {
    justifyContent: "center",
    alignItems: "center",
    height: 434,
    width: 339,
    backgroundColor: fade("#2A4494", 0.5),
    overflow: "hidden",
    backgroundImage: `url(${ImageURThreadsL3})`,
  },
  overlayDesktop: {
    display: "flex",
    height: "100vh",
    width: "100%",
    top: "0%",
    left: "0%",
    backgroundColor: "rgba(42, 68, 147, 0.6)",
  },
  innerPaper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(5.5),
    marginTop: theme.spacing(6.75),
    backgroundColor: "#122C34",
    borderWidth: "2dpi",
    height: 326,
    width: 249,
  },
  boxHeadingText: {
    paddingTop: "24px",
  },
  boxBodyText: {
    margin: theme.spacing(4),
  },
  buttonContainer: {
    padding: "16px",
  },
  threeSpaceSectionButton: {
    outlineColor: "#122C34",
    "&:hover": {
      outlineColor: "#FFFFFF",
    },
  },
}))

export const ThreeSpaces = function () {
  const classes = useStyles()

  const boxArrayText = [
    {
      index: 2,
      header: "Explore",
      body:
        "Explore which types of folders are available and which one fits your needs.",
    },
    {
      index: 1,
      header: `Folder`,
      body: "Decide on which folder you need for your sewing goals.",
    },
    {
      index: 3,
      header: `Metal`,
      body:
        "See what types of metals we use to create our hand crafted folders.",
    },
  ]

  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="space-evenly" spacing={5}>
            <Grid key={boxArrayText[0].index} item>
              <Box className={classes.paper0}>
                <div className={classes.overlayDesktop}>
                  <Box
                    border={1}
                    borderColor="white"
                    className={classes.innerPaper}
                  >
                    <Typography align="center" variant="h6" color="secondary">
                      {boxArrayText[0].header}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      variantMapping={{ body1: "p" }}
                      color="secondary"
                      className={classes.boxBodyText}
                    >
                      {boxArrayText[0].body}
                    </Typography>
                    <div className={classes.buttonContainer}>
                      <Button
                        href="#text-buttons"
                        color="secondary"
                        className={classes.threeSpaceSectionButton}
                      >
                        Learn More
                      </Button>
                    </div>
                  </Box>
                </div>
              </Box>
            </Grid>

            <Grid key={boxArrayText[1].index} item>
              <Box className={classes.paper1}>
                <div className={classes.overlayDesktop}>
                  <Box
                    border={1}
                    borderColor="white"
                    className={classes.innerPaper}
                  >
                    <Typography align="center" variant="h6" color="secondary">
                      {boxArrayText[1].header}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      variantMapping={{ body1: "p" }}
                      color="secondary"
                      className={classes.boxBodyText}
                    >
                      {boxArrayText[1].body}
                    </Typography>
                    <div className={classes.buttonContainer}>
                      <Button
                        href="#text-buttons"
                        color="secondary"
                        className={classes.threeSpaceSectionButton}
                      >
                        Learn More
                      </Button>
                    </div>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid key={boxArrayText[2].index} item>
              <Box className={classes.paper2}>
                <div className={classes.overlayDesktop}>
                  <Box
                    border={1}
                    borderColor="white"
                    className={classes.innerPaper}
                  >
                    <Typography align="center" variant="h6" color="secondary">
                      {boxArrayText[2].header}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      variantMapping={{ body1: "p" }}
                      color="secondary"
                      className={classes.boxBodyText}
                    >
                      {boxArrayText[2].body}
                    </Typography>
                    <div className={classes.buttonContainer}>
                      <Button
                        href="#text-buttons"
                        color="secondary"
                        className={classes.threeSpaceSectionButton}
                      >
                        Learn More
                      </Button>
                    </div>
                  </Box>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
