import * as React from 'react';
import LinkList from './LinkList';
import FinderFlame from '../atoms/FinderFlame';
import '../../scss/components/molecules/MenuWithFinderFlame.scss'
import ClassNames from 'classnames';

const {useState, useEffect} = React;

const MenuWithFinderFlame = () => {
    return(
        <div className={'menu-with-finder-flame'}>
            <LinkList />
            <FinderFlame />
        </div>
    )
}

export default MenuWithFinderFlame;