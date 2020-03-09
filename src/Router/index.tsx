import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import PageRouter from './PageRouter';

export default () => {
    return(
        <BrowserRouter>
            <PageRouter />
        </BrowserRouter>
    )
}