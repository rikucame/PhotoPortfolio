import React from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter
} from "react-router-dom";
import Top from "../components/pages/Top";
import About from "../components/pages/About";
import Photos from "../components/pages/Photos";
import Blog from "../components/pages/Blog";
import { ROOT, ABOUT, PHOTOS, BLOG } from "./PagePath";

interface Props extends RouteComponentProps<{}> {}

const PageRouter = ({ location }: Props) => {
  console.log(location.pathname);
  return (
    <Switch>
      <Route exact path={ROOT} component={Top} />
      <Route path={ABOUT} component={About} />
      <Route path={PHOTOS} component={Photos} />
      <Route path={BLOG} component={Blog} />
    </Switch>
  );
};

export default withRouter(PageRouter);
