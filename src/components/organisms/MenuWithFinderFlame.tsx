import * as React from 'react';
import LinkList from '../molecules/LinkList';
import FinderFlame from '../atoms/FinderFlame';
import '../../scss/components/organisms/MenuWithFinderFlame.scss'

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