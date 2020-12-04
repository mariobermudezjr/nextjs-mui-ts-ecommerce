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
    marginTop: theme.spacing(4),
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
    height: 333.37,
    width: "100%",
    overflow: "hidden",
  },
  innerPaperText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 333.37,
    width: "100%",
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
  innerPaperImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: 333.37,
    width: "20%",
    margin: theme.spacing(4),
  },
  boxHeadingText: {},
  boxBodyText: {
    marginTop: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
    color: "000000",
    opacity: 0.7,
  },

  doubleSectionButtonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  doubleSectionButton: {
    borderRadius: "0",
    color: "#122C34",
    backgroundColor: "#FFFFFF",

    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#122C34",
    },
  },
}))

export const SubscribeForUpdates = function () {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          <Grid key={0} item>
            <Box className={classes.paper}>
              <Box
                border={1}
                borderColor="white"
                className={classes.innerPaperText}
              >
                <Typography
                  align="center"
                  variant="h5"
                  color="textPrimary"
                  className={classes.boxHeadingText}
                >
                  Subscribe For Updates
                </Typography>

                <div className={classes.doubleSectionButtonContainer}>
                  <InputBase
                    className={classes.margin}
                    placeholder={"Enter Email"}
                    defaultValue=""
                    inputProps={{ "aria-label": "naked" }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    className={classes.doubleSectionButton}
                  >
                    SUBSCRIBE
                  </Button>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
