import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom';
import Top from './components/pages/Top';
import About from './components/pages/About';
import Photos from './components/pages/Photos';

const Router = () => {
    return(
        <BrowserRouter>
            <Route exact path='/' component={Top} />
            <Route path='/about' component={About} />
            <Route path='/photos' component={Photos} />
        </BrowserRouter>
    )
}

export default Router;