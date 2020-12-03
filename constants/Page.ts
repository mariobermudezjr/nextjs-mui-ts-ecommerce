import { Color } from "@material-ui/core"
import { blue } from "@material-ui/core/colors"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import {
  Home,
  Info,
  LocalGroceryStore,
  Person,
  SupervisedUserCircle,
} from "@material-ui/icons"
import { IEnum } from "."

/**
 * Page constants
 * @author tree
 */
export class Page implements IEnum<Page> {
  /**
   * For values() array
   */
  private static _values = new Array<Page>()

  public static readonly TOP = new Page(
    1,
    "Home",
    "Browse though our products and services",
    "MB Sewing Machine Service",
    "Solving sewing machine problems so you don't have to.",
    "/",
    Home,
    blue
  )
  public static readonly REDUX = new Page(
    2,
    "Products",
    "See what we offer",
    "Products",
    "Look through our selection of handmade folders.",
    "/products",
    LocalGroceryStore,
    blue
  )
  public static readonly REDUX_SAGAA = new Page(
    3,
    "About Us",
    "Who are we",
    "About Us",
    "Basic redux-saga examples with typescript-fsa and immer.",
    "/about",
    SupervisedUserCircle,
    blue
  )
  public static readonly ABOUT = new Page(
    10,
    "Sign In",
    "Sign into account",
    "Sign In",
    "Sign into your account for a seemlesly purchasing experience.",
    "/signin",
    Person,
    blue
  )
  public static readonly ERROR = new Page(
    99,
    "Error",
    "Error",
    "Error | sample",
    "Error.",
    "/error",
    Info,
    blue
  )

  /**
   * constructor
   * @param number page id
   * @param pageTitle page title
   * @param pageDescription page description
   * @param title seo title
   * @param metaDescription seo meta description
   * @param relativeUrl relative url
   * @param icon page icon
   * @param iconColor page icon color
   */
  private constructor(
    public readonly id: number,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly relativeUrl: string,
    public readonly icon: React.ComponentType<SvgIconProps>,
    public readonly iconColor: Color
  ) {
    Page._values.push(this)
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.id === target.id

  /**
   * @inheritdoc
   */
  toString = (): string =>
    `${this.id}, ${this.pageTitle}, ${this.pageDescription}`
}
