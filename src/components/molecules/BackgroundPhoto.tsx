import React from 'react';
import Photo from '../atoms/Photo';
import ClassNames from 'classnames';
import '../../scss/components/molecules/BackgroundPhoto.scss';


const {useState, useEffect} = React;

const CheckWidthHeight = () => {
  const width = window.outerWidth
  const height = window.outerHeight
  return ( height / width < 0.66666666 ? true : false);
}

const BackgroundPhoto = () => {
    const [photoNames, setPhotoNames] = useState(['01', '02', '03']);
    const [currentPhoto, setCurrentPhoto] = useState(2);
    const [isWide, setIsWide] = useState(CheckWidthHeight());
    const backgroundImageClass = ClassNames({
        'horizontally-fit': isWide,
        'vertically-fit': !isWide,
    });

    const photoPath = `${process.env.PUBLIC_URL}/photos/${photoNames[currentPhoto]}.jpg`;
    window.addEventListener('resize', () => setIsWide(CheckWidthHeight()));
    
    return <Photo src={photoPath} className={backgroundImageClass} />
}

export default BackgroundPhoto