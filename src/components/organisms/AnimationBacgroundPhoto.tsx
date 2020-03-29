import React from "react";
import defaultBackgroundPhoto from "../atoms/BackgroundPhoto";
import ClassNames from "classnames";
import styled from "styled-components";

const { useState, useEffect } = React;

const CheckWidthHeight = () => {
  const width = window.outerWidth;
  const height = window.outerHeight;
  return height / width < 0.66666666 ? true : false;
};

const AnimationBackgroundPhoto = () => {
  const backgroundPhotoDirectory = `${process.env.PUBLIC_URL}/photo/background/`;
  const [photoPath, setPhotoPath] = useState(
    `${backgroundPhotoDirectory}01.jpg`
  );
  const [currentPhoto, setCurrentPhoto] = useState(1);
  const [isWide, setIsWide] = useState(CheckWidthHeight());
  const backgroundImageClass = ClassNames({
    "horizontally-fit": isWide,
    "vertically-fit": !isWide
  });

  useEffect(() => {
    setTimeout(() => {
      setCurrentPhoto(currentPhoto === 4 ? 1 : currentPhoto + 1);
      setPhotoPath(`${backgroundPhotoDirectory}0${currentPhoto}.jpg`);
      console.log("hoge");
    }, 4000);
  }, [currentPhoto]);

  return <BackgroundPhoto url={photoPath} />;
};

const BackgroundPhoto = styled(defaultBackgroundPhoto)`
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
`;

export default AnimationBackgroundPhoto;
