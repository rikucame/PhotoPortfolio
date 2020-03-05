import React from 'react';
import '../../scss/components/Page/Top.scss';
import PhotoWithFinderFlame from '../molecules/PhotoWithFinderFlame';
import {useState} from 'react';

const Top = () => {
  // window.addEventListener('resize', () => {
  //   setIsWide(CheckWideOrLong());
  //   console.log(isWide);
  // });
  return (
    <div className="top">
        <PhotoWithFinderFlame />
        
    </div>
  );
}




export default Top;
