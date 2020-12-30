import Avatar from "@material-ui/core/Avatar"
import Box from "@material-ui/core/Box"
import ButtonBase from "@material-ui/core/ButtonBase"
import { grey } from "@material-ui/core/colors"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import React, { useState } from "react"
import { AppContext } from "../components/AppContext"
import { PageFooter } from "../components/molecules"
import { HeaderArticleContainer } from "../components/organisms"
import { Layout } from "../components/templates"
import { Page } from "../constants"
import { useCounter, usePage } from "../hooks"
import { IPagePayload, PageActions } from "../store/page"

const images = [
  {
    page: Page.FOLDERS,
    id: 1,
    url: "https://i.ibb.co/pdS9bGn/folders-cropped-500px.jpg",
    title: "Folders",
    width: "20%",
  },
  {
    page: Page.MACHINES,
    id: 2,
    url: "https://i.ibb.co/DDCcVpX/machines-500px.jpg",
    title: "Machines",
    width: "30%",
  },
  {
    page: Page.TABLES,
    id: 3,
    url: "https://i.ibb.co/M7gxxvc/table-corner-500px.jpg",
    title: "Tables",
    width: "30%",
  },
  {
    page: Page.LEGS,
    id: 4,
    url: "https://i.ibb.co/tw6YVrk/legs-500px.jpg",
    title: "Legs",
    width: "20%",
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" },
    image: {
      position: "relative",
      height: 300,
      [theme.breakpoints.down("md")]: {
        width: "100% !important", // Overrides inline-style
        height: "23vh",
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
    imageMarked: {
      height: 3,
      width: 36,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 18px)",
      transition: theme.transitions.create("opacity"),
    },
    counter: {
      margin: 10,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    title: {
      fontSize: "4em",
      fontWeight: "normal",
      padding: theme.spacing(4),
      margin: theme.spacing(4),
      backgroundColor: grey[400],
    },
    rootBoxRow: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flex: "1",
      justifyContent: "center",
      alignItems: "center",
    },
    ButtonBox: {
      margin: "2.5%",
    },
    rootBoxColumn: {
      display: "flex",
      flexDirection: "column",
      margin: "1.25%",
    },
  })
)

type Props = {
  // passed from getInitialProps
  defaultInputNumber: number
}

function Products(props: Props) {
  const { defaultInputNumber: defaultCount } = props
  const classes = useStyles(props)
  const [inputNumber, setInputNumber] = useState<number>(defaultCount)
  const { count, increment, decrement, calculate, clear } = useCounter()
  const { selectedPage, changePage } = usePage()
  const handleChangePage = (page: Page) => () => changePage(page)

  /**
   * Change inputNumber value
   */
  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    // ignore not number
    if (val.match(/^([1-9]|0)+[0-9]*$/i) || val === "") {
      setInputNumber(Number(val))
    }
  }

  const CurrentNumber = () => (
    <Avatar className={classes.counter}>{count}</Avatar>
  )

  return (
    <Layout className={classes.root}>
      <HeaderArticleContainer>
        <Box display={{ xs: "block", lg: "none" }}>
          {images.map((image) => (
            <Link key={image.id} href={image.page.relativeUrl}>
              <ButtonBase
                focusRipple
                key={image.id}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
                onClick={handleChangePage(image.page)}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </Link>
          ))}
        </Box>
        {/* <Typography variant="h2" gutterBottom className={classes.title}>
            Increment / Decrement
          </Typography>
          <CurrentNumber />
          <Button variant="contained" color="primary" onClick={increment}>
            + 1
          </Button>
          &nbsp;
          <Button variant="contained" color="primary" onClick={decrement}>
            - 1
          </Button> */}
        <Box display={{ xs: "none", lg: "block" }}>
          <Box className={classes.rootBoxRow}>
            <Box className={classes.rootBoxColumn}>
              <Box className={classes.ButtonBox}>
                <Link href={Page.FOLDERS.relativeUrl} key={Page.FOLDERS.id}>
                  <ButtonBase
                    focusRipple
                    key={"Folders"}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: "500px",
                    }}
                    onClick={handleChangePage(Page.FOLDERS)}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(https://i.ibb.co/pdS9bGn/folders-cropped-500px.jpg)`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="h3"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        Folders
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </Link>
              </Box>
              <Box className={classes.ButtonBox}>
                <Link href={Page.MACHINES.relativeUrl} key={Page.MACHINES.id}>
                  <ButtonBase
                    focusRipple
                    key={"Machines"}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: "500px",
                    }}
                    onClick={handleChangePage(Page.MACHINES)}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(https://i.ibb.co/DDCcVpX/machines-500px.jpg)`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="h3"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        Machines
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </Link>
              </Box>
            </Box>
            <Box className={classes.rootBoxColumn}>
              <Box className={classes.ButtonBox}>
                <Link href={Page.TABLES.relativeUrl} key={Page.TABLES.id}>
                  <ButtonBase
                    focusRipple
                    key={"Tables"}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: "500px",
                    }}
                    onClick={handleChangePage(Page.TABLES)}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(https://i.ibb.co/M7gxxvc/table-corner-500px.jpg)`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="h3"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        Tables
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </Link>
              </Box>
              <Box className={classes.ButtonBox}>
                <Link href={Page.LEGS.relativeUrl} key={Page.LEGS.id}>
                  <ButtonBase
                    focusRipple
                    key={"Legs"}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: "500px",
                    }}
                    onClick={handleChangePage(Page.LEGS)}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(https://i.ibb.co/tw6YVrk/legs-500px.jpg)`,
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                      <Typography
                        component="span"
                        variant="h3"
                        color="inherit"
                        className={classes.imageTitle}
                      >
                        Legs
                        <span className={classes.imageMarked} />
                      </Typography>
                    </span>
                  </ButtonBase>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* <SpacingPaper>
          <FormControl>
            <Typography variant="h2" gutterBottom className={classes.title}>
              Calculate
            </Typography>

            <CurrentNumber />

            <TextField
              id="standard-name"
              label="Input number !!"
              value={inputNumber === 0 ? "" : inputNumber}
              onChange={handleChangeCount}
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => calculate(inputNumber)}
              disabled={inputNumber === 0}
            >
              calculate
            </Button>
            <Button variant="contained" color="primary" onClick={() => clear()}>
              clear
            </Button>
          </FormControl>
        </SpacingPaper> */}
        <PageFooter />
      </HeaderArticleContainer>
    </Layout>
  )
}

/**
 * Server side rendering
 */
Products.getInitialProps = async (ctx: AppContext): Promise<Props> => {
  const { store } = ctx

  const pagePayload: IPagePayload = {
    selectedPage: Page.PRODUCTS,
  }
  store.dispatch({
    type: PageActions.changePage.toString(),
    payload: pagePayload,
  })
  return {
    defaultInputNumber: 0,
  }
}

export default Products
