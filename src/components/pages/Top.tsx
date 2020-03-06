import React from 'react';
import '../../scss/components/pages/Top.scss';
import BackgroundPhoto from '../molecules/BackgroundPhoto';
import MenuWithFinderFlame from '../organisms/MenuWithFinderFlame';

const Top = () => {
    
  return (
    <div className="top">
      <MenuWithFinderFlame />
      <BackgroundPhoto /> 
    </div>
  );
}

export default Top;
