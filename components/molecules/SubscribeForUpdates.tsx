import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import InputBase from "@material-ui/core/InputBase"
import { makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(16),
    width: "100%",
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
    height: "auto",
    width: "100%",
    overflow: "hidden",
  },
  innerPaperText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
  },
  boxHeadingText: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
  },
  boxBodyText: {
    marginTop: theme.spacing(1),
  },
  subscribeEmailInput: {
    marginTop: theme.spacing(2),
    color: "000000",
    backgroundColor: "#FFFFFF",
    opacity: 0.7,
    width: "200px",
    height: theme.spacing(4),
  },
  subscribeEmailInputMobile: {
    margin: theme.spacing(1),
    color: "000000",
    backgroundColor: "#ffffff",
    opacity: 0.7,
    width: "200px",
  },

  doubleSectionButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: theme.spacing(10),
    width: "100%",
  },
  doubleSectionButtonContainerMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: theme.spacing(10),
    width: "100%",
  },
  doubleSectionButton: {
    color: "#122C34",
    backgroundColor: "#FFFFFF",
    marginTop: theme.spacing(1),

    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#122C34",
    },
  },
}))

export const SubscribeForUpdates = function () {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          <Box
            border={0}
            borderColor="white"
            display={{ xs: "none", md: "block" }}
            m={0}
          >
            <Typography
              align="center"
              variant="h4"
              color="textPrimary"
              className={classes.boxHeadingText}
            >
              Subscribe For Updates
            </Typography>

            <div className={classes.doubleSectionButtonContainer}>
              <InputBase
                className={classes.subscribeEmailInput}
                placeholder={"Enter Email"}
                defaultValue=""
                inputProps={{ "aria-label": "naked" }}
              />
              <Button
                variant="outlined"
                size="large"
                className={classes.doubleSectionButton}
              >
                SUBSCRIBE
              </Button>
            </div>
          </Box>
          <Box
            border={0}
            borderColor="white"
            display={{ xs: "block", md: "none" }}
            m={0}
          >
            <Typography
              align="center"
              variant="h5"
              color="textPrimary"
              className={classes.boxHeadingText}
            >
              Subscribe For Updates
            </Typography>

            <div className={classes.doubleSectionButtonContainerMobile}>
              <InputBase
                className={classes.subscribeEmailInputMobile}
                placeholder={"             Enter Email"}
                defaultValue=""
                inputProps={{ "aria-label": "naked" }}
              />
              <Button
                variant="outlined"
                size="large"
                className={classes.doubleSectionButton}
              >
                SUBSCRIBE
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}
