import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { useThinOut } from "../hooks"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {}

function About(props: Props) {
  const {} = props
  const classes = useStyles(props)
  const { debounce, debounceState, throttle, throttleState } = useThinOut()

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h5">About Us</Typography>
        </SpacingPaper>
        {/* <SpacingPaper>
          <ReduxSagaSample
            title="debounce"
            description={
              <>
                <Typography variant="subtitle1" gutterBottom>
                  Open DevTools of Google Chrome, open the network tab, and
                  check the execution frequency and timing of api.
                </Typography>
              </>
            }
            storeState={debounceState}
            responseResultMax={10}
            interval={SagaSetting.DEBOUNCE_INTERVAL}
            onChange={(inputValue: string) => debounce(inputValue)}
          />
        </SpacingPaper>

        <SpacingPaper>
          <ReduxSagaSample
            title="throttle"
            storeState={throttleState}
            responseResultMax={10}
            interval={SagaSetting.THROTTLE_INTERVAL}
            onChange={(inputValue: string) => throttle(inputValue)}
          />
        </SpacingPaper> */}
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
About.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.ABOUT,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {}
}

export default About
