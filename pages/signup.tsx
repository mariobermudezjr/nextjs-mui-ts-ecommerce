import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import Container from "@material-ui/core/Container"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import React from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import { PageFooter } from "../components/molecules"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
)

type Props = {}

function Signup(props: Props) {
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </SpacingPaper>
        <PageFooter />
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Signup.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.REGISTER,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {}
}

export default Signup
