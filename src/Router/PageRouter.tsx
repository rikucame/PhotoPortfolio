import React from "react"
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom"
import Top from "../components/pages/Top"
import About from "../components/pages/About"
import Photos from "../components/pages/Photos"
import Blog from "../components/pages/Blog"
import { ROOT, ABOUT, PHOTOS, BLOG } from "./PageLinks"

interface Props extends RouteComponentProps<{}> {}

const PageRouter = ({ location }: Props) => {
  console.log(location.pathname)
  return (
    <Switch>
      <Route exact path={ROOT} component={Top} />
      <Route path={ABOUT.link} component={About} />
      <Route path={PHOTOS.link} component={Photos} />
      <Route path={BLOG.link} component={Blog} />
    </Switch>
  )
}

export default withRouter(PageRouter)
