import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(0),
  },
  arrayRoot: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    width: "100%",
    overflow: "hidden",
  },
  innerPaperText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    width: "100%",
  },
  innerPaperImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: 333.37,
    width: "20%",
    margin: theme.spacing(3),
  },
  boxHeadingText: {},

  boxBodyText: {
    marginTop: theme.spacing(1),
  },

  doubleSectionButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  doubleSectionButton: {
    color: "#122C34",
    backgroundColor: "#FFFFFF",

    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#122C34",
    },
  },
}))

export const DoubleSectionGrid = function () {
  const classes = useStyles()

  const boxArrayText = [
    {
      index: 1,
      header: `Finely Hand Crafted.`,
      body:
        "Our folders are hand made and designed using industry standard materials.",
      image: "https://i.ibb.co/kSLNDKH/tools-crop-copy-1.png",
    },
    {
      index: 2,
      header: "Designed to Last.",
      body:
        "The folders we make are designed to last. We provide proper ways to care for the folders.",
      //image: "https://i.ibb.co/Jr8xK5X/caliper-cmprsd.jpg",
      image: "https://i.ibb.co/YtCp1Q6/caliper-cmprssed400w.jpg",
    },
    {
      index: 3,
      header: `Best Practices.`,
      body:
        "The methods to use folders are shared so you can make your investment last.",
      image: "https://i.ibb.co/tXwkV0r/white-thread-cmprsed-copy.jpg",
    },
  ]

  return (
    <>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid
            className={classes.arrayRoot}
            container
            justify="center"
            spacing={8}
          >
            {boxArrayText.map((text: any) => (
              <Grid
                key={text.index}
                item
                style={{
                  padding: "0px",
                  marginLeft: "72px",
                  marginRight: "72px",
                }}
              >
                <Box className={classes.paper}>
                  {Number(text.index) % 2 !== 0 ? (
                    <>
                      {" "}
                      <Box
                        borderColor="white"
                        className={classes.innerPaperText}
                      >
                        <div style={{ width: "250px" }}>
                          <Typography
                            align="center"
                            variant="h6"
                            color="textPrimary"
                            className={classes.boxHeadingText}
                          >
                            {text.header}
                          </Typography>
                          <Typography
                            align="center"
                            variant="body2"
                            variantMapping={{ body1: "p" }}
                            color="textSecondary"
                            className={classes.boxBodyText}
                          >
                            {text.body}
                          </Typography>
                          <div className={classes.doubleSectionButtonContainer}>
                            <Button
                              variant="outlined"
                              size="large"
                              className={classes.doubleSectionButton}
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </Box>
                      <Box
                        border={0}
                        borderColor="white"
                        display={{ xs: "none", md: "block" }}
                        m={1}
                      >
                        <img
                          src={text.image}
                          style={{
                            width: "400px",
                            height: "auto",
                            borderRadius: "5px",
                            marginLeft: "150px",
                            opacity: 0.8,
                          }}
                        />
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        border={0}
                        borderColor="white"
                        display={{ xs: "none", md: "block" }}
                        m={1}
                      >
                        <img
                          src={text.image}
                          style={{
                            width: "400px",
                            height: "auto",
                            borderRadius: "5px",
                            marginRight: "150px",
                            opacity: 0.8,
                          }}
                        />
                      </Box>
                      <Box
                        borderColor="white"
                        className={classes.innerPaperText}
                      >
                        <div style={{ width: "250px" }}>
                          <Typography
                            align="center"
                            variant="h6"
                            color="textPrimary"
                            className={classes.boxHeadingText}
                          >
                            {text.header}
                          </Typography>
                          <Typography
                            align="center"
                            variant="body2"
                            variantMapping={{ body1: "p" }}
                            color="textSecondary"
                            className={classes.boxBodyText}
                          >
                            {text.body}
                          </Typography>
                          <div className={classes.doubleSectionButtonContainer}>
                            <Button
                              variant="outlined"
                              size="large"
                              className={classes.doubleSectionButton}
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
