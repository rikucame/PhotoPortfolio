import * as React from 'react';
import Photo from '../atoms/Photo';
import FinderFlame from '../atoms/FinderFlame';
import '../../scss/components/molecules/PhotoWithFinderFlame.scss'
import ClassNames from 'classnames';

const {useState, useEffect} = React;


const PhotoWithFinderFlame = () => {
    const [photoNames, setPhotoNames] = useState(['01', '02', '03']);
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [isWide, setIsWide] = useState(CheckWidthHeight());
    const backgroundImageClass = ClassNames({
        'horizontally-fit': isWide,
        'vertically-fit': !isWide,
    });
    window.addEventListener('resize', () => setIsWide(CheckWidthHeight()));
    
    return(
        <div className={'photo-with-finder-flame'}>
            <Photo fileName={photoNames[currentPhoto]} className={backgroundImageClass} />
            <FinderFlame />
        </div>
    )
}

const CheckWidthHeight = () => {
    const width = window.outerWidth
    const height = window.outerHeight
    return ( height / width < 0.66666666 ? true : false);
  }
  


export default PhotoWithFinderFlame;