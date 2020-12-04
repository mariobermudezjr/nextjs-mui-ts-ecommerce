import { Paper } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    root: (props: Props) => ({
      padding: props.noPadding === true ? theme.spacing(0) : theme.spacing(0),
      marginBottom: theme.spacing(2),
      backgroundColor: "#FCFAFA",
    }),
  })
)

type Props = {
  /**
   * shildren
   */
  children: React.ReactNode
  /**
   * zero-padding flag
   */
  noPadding?: boolean
}

/**
 * Paper with spacing
 * @param props IProps
 */
export const SpacingPaper = (props: Props) => {
  const { children } = props
  const classes = useStyles(props)
  return (
    <Paper className={classes.root} elevation={0}>
      {children}
    </Paper>
  )
}
