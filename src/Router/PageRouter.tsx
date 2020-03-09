import React from 'react'
import {Route, Switch, RouteComponentProps, withRouter} from 'react-router-dom';
import Top from '../components/pages/Top';
import About from '../components/pages/About';
import Photos from '../components/pages/Photos';
import Contact from '../components/pages/Contact';
import {ROOT, ABOUT, PHOTOS, CONTACT} from './PagePath';

interface Props extends RouteComponentProps<{}> {}

const PageRouter = ({location}: Props) => {
    console.log(location.pathname);
    return(
        <Switch>
            <Route exact path={ROOT} component={Top} />
            <Route path={ABOUT} component={About} />
            <Route path={PHOTOS} component={Photos} />
            <Route path={CONTACT} component={Contact} />
        </Switch>
    )
}

export default withRouter(PageRouter);