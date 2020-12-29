import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
import {
  DoubleSectionGrid,
  LandingPageImage,
  PageFooter,
  SubscribeForUpdates,
  ThreeSpaces,
} from "../components/molecules"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { IPagePayload, PageActions } from "../store/page"

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  })
)

type Props = {}

function Index(props: Props) {
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <LandingPageImage />
          <ThreeSpaces />
          <DoubleSectionGrid />
          <SubscribeForUpdates />
        </SpacingPaper>
        <PageFooter />
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Index.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.HOME,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {}
}

export default Index
