import { Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { AppContext } from "../components/AppContext"
import { SpacingPaper } from "../components/atoms"
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

function Legs(props: Props) {
  const classes = useStyles(props)
  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <SpacingPaper>
          <Typography variant="h5">Leg List</Typography>
        </SpacingPaper>
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Legs.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.LEGS,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {}
}

export default Legs
