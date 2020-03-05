import React from 'react';
import '../../scss/components/Page/Top.scss';
import Photo from '../atoms/Photo';
// import PhotoWithFinderFlame from '../molecules/PhotoWithFinderFlame';
import MenuWithFinderFlame from '../molecules/MenuWithFinderFlame';

import ClassNames from 'classnames';


const {useState, useEffect} = React;

const CheckWidthHeight = () => {
  const width = window.outerWidth
  const height = window.outerHeight
  return ( height / width < 0.66666666 ? true : false);
}


const Top = () => {
  const [photoNames, setPhotoNames] = useState(['01', '02', '03']);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isWide, setIsWide] = useState(CheckWidthHeight());
  const backgroundImageClass = ClassNames({
      'horizontally-fit': isWide,
      'vertically-fit': !isWide,
  });
    window.addEventListener('resize', () => setIsWide(CheckWidthHeight()));
    
  return (
    <div className="top">
      <Photo fileName={photoNames[currentPhoto]} className={backgroundImageClass} />
      <MenuWithFinderFlame />  
    </div>
  );
}

export default Top;
