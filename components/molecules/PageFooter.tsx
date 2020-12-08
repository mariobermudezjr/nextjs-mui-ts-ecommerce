// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Box, Button, Divider, Paper, Typography } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import YouTubeIcon from "@material-ui/icons/YouTube"
import React from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      textAlign: "center",
    },
    subRootSection: {
      marginLeft: theme.spacing(12),
      marginRight: theme.spacing(12),
    },
    subRootSectionMobile: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
    topRootSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
      alignItems: "center",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },

    topChildSection: {
      display: "flex",
      flexDirection: "row",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontWeight: "bold",
      fontSize: "1em",
      marginLeft: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    thinText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      fontSize: "0.50em",
    },
    contactSectionButton: {
      color: "#FFFFFF",
      backgroundColor: "#122C34",

      "&:hover": {
        color: "#122C34",
        backgroundColor: "#FFFFFF",
      },
    },
    bottomSectionRoot: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    bottomSectionRootMobile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    bottomLeftText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      justifyItems: "center",
      width: "250px",
      marginTop: theme.spacing(3),
    },
    bottomLeftTextMobile: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      justifyItems: "center",
      width: "auto",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    leftBottomSection: { display: "flex", flexDirection: "column" },
    leftBottomSectionMobile: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
      alignContent: "center",
      alignSelf: "center",
    },
    copywriteTrademark: {
      marginLeft: theme.spacing(2),
      fontSize: "0.75em",
      marginTop: theme.spacing(3),
    },
    copywriteTrademarkContainerMobile: {
      display: "flex",
      justifyItems: "center",
    },
    copywriteTrademarkMobile: {
      marginTop: theme.spacing(3),
      fontSize: "0.75em",
      justifyItems: "center",
    },
    socialMediaIcons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      justifyItems: "center",
      height: "max-content",
      marginTop: theme.spacing(1.5),
    },
    socialMediaIconsMobile: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      justifyItems: "center",
    },
  })
)

type Props = {}

/**
 * Page header component
 * @param props Props
 */
export const PageFooter = function (props: Props) {
  const classes = useStyles(props)

  return (
    <Paper square={true} className={classes.root}>
      <>
        <Box
          border={0}
          borderColor="white"
          display={{ xs: "none", md: "block" }}
          m={1}
        >
          <Box className={classes.subRootSection}>
            <Box className={classes.topRootSection}>
              <Box className={classes.topChildSection}>
                <Box>
                  <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.title}
                  >
                    Contact
                  </Typography>
                </Box>
                <Box style={{ paddingLeft: "16px" }}>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    className={classes.thinText}
                  >
                    +1-234-567-8900
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    className={classes.thinText}
                  >
                    info@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                size="small"
                className={classes.contactSectionButton}
              >
                Contact Us
              </Button>
            </Box>
            <Divider />
            <Box className={classes.bottomSectionRoot}>
              <Box className={classes.leftBottomSection}>
                <Box className={classes.bottomLeftText}>
                  <Button href="#text-buttons" color="primary">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.thinText}
                    >
                      help
                    </Typography>
                  </Button>
                  <Button href="#text-buttons" color="primary">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.thinText}
                    >
                      Terms
                    </Typography>
                  </Button>
                  <Button href="#text-buttons" color="primary">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.thinText}
                    >
                      Private Policy
                    </Typography>
                  </Button>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="inherit"
                    className={classes.copywriteTrademark}
                    align={"left"}
                  >
                    ©2020 Mario Sewing Machine Service
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.socialMediaIcons}>
                <IconButton aria-label="Visit our Facebook" color={"inherit"}>
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="Visit our LinkedIn" color={"inherit"}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="Call us on Whatsapp" color={"inherit"}>
                  <WhatsAppIcon />
                </IconButton>
                <IconButton aria-label="Visit our YouTube" color={"inherit"}>
                  <YouTubeIcon />
                </IconButton>
                <IconButton aria-label="Visit our Instagram" color={"inherit"}>
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          border={0}
          borderColor="white"
          display={{ xs: "block", md: "none" }}
          m={1}
        >
          <Box className={classes.subRootSectionMobile}>
            <Box className={classes.topRootSection}>
              <Box className={classes.topChildSection}>
                <Box>
                  <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.title}
                  >
                    Contact
                  </Typography>
                </Box>
                <Box style={{ paddingLeft: "16px" }}>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    className={classes.thinText}
                  >
                    +1-234-567-8900
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    className={classes.thinText}
                  >
                    info@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                size="small"
                className={classes.contactSectionButton}
              >
                Contact Us
              </Button>
            </Box>
            <Divider />
            <Box className={classes.bottomSectionRootMobile}>
              <Box className={classes.leftBottomSectionMobile}>
                <Box className={classes.socialMediaIconsMobile}>
                  <IconButton aria-label="Visit our Facebook" color={"inherit"}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton aria-label="Visit our LinkedIn" color={"inherit"}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Call us on Whatsapp"
                    color={"inherit"}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton aria-label="Visit our YouTube" color={"inherit"}>
                    <YouTubeIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Visit our Instagram"
                    color={"inherit"}
                  >
                    <InstagramIcon />
                  </IconButton>
                </Box>
                <Box className={classes.bottomLeftTextMobile}>
                  <Button href="#text-buttons" color="primary">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.thinText}
                    >
                      help
                    </Typography>
                  </Button>
                  <Button href="#text-buttons" color="primary">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.thinText}
                    >
                      Terms
                    </Typography>
                  </Button>
                  <Button href="#text-buttons" color="primary">
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      className={classes.thinText}
                    >
                      Private Policy
                    </Typography>
                  </Button>
                </Box>
                <Box className={classes.copywriteTrademarkContainerMobile}>
                  <Typography
                    variant="subtitle2"
                    color="inherit"
                    className={classes.copywriteTrademarkMobile}
                    align={"left"}
                  >
                    ©2020 Mario Sewing Machine Service
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    </Paper>
  )
}
