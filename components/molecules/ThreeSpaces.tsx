import { Typography } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    width: 250,
    backgroundColor: fade("#2A4494", 0.5),
    overflow: "hidden",
  },
  innerPaper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 250,
    width: 150,
    backgroundColor: "#122C34",
    borderWidth: "2dpi",
  },
  boxHeadingText: {
    paddingTop: "24px",
  },
  boxBodyText: {
    padding: "16px",
  },
  buttonContainer: {
    padding: "16px",
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
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
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            {boxArrayText.map((text: any) => (
              <Grid key={text.index} item>
                <Paper className={classes.paper} square>
                  {/* <img
                    src="https://source.unsplash.com/random"
                    style={{ width: "100%", height: "auto" }}
                  /> */}
                  <Box
                    border={1}
                    borderColor="white"
                    className={classes.innerPaper}
                  >
                    <Typography
                      align="center"
                      variant="h6"
                      color="secondary"
                      className={classes.boxHeadingText}
                    >
                      {text.header}
                    </Typography>
                    <Typography
                      align="center"
                      variant="body2"
                      variantMapping={{ body1: "p" }}
                      color="secondary"
                      className={classes.boxBodyText}
                    >
                      {text.body}
                    </Typography>
                    <div className={classes.buttonContainer}>
                      <Button href="#text-buttons" color="secondary">
                        Learn More
                      </Button>
                    </div>
                  </Box>
                </Paper>
              </Grid>
            ))}
            {/* <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
