import React from 'react';
import '../../scss/components/pages/Top.scss';
import BackgroundPhoto from '../molecules/BackgroundPhoto';
import MenuWithFinderFlame from '../organisms/MenuWithFinderFlame';

export default () => {
    
  return (
    <div className="top">
      <MenuWithFinderFlame />
      <BackgroundPhoto /> 
    </div>
  );
}
