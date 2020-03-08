import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Top from '../components/pages/Top';
import About from '../components/pages/About';
import Photos from '../components/pages/Photos';
import Contact from '../components/pages/Contact';
import {ROOT, ABOUT, PHOTOS, CONTACT} from './PagePath';

export default () => {
    return(
        <BrowserRouter>
            <Route exact path={ROOT} component={Top} />
            <Route path={ABOUT} component={About} />
            <Route path={PHOTOS} component={Photos} />
            <Route path={CONTACT} component={Contact} />
        </BrowserRouter>
    )
}