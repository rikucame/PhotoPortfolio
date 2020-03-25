import React from "react";
import defaultBackgroundPhoto from "../atoms/backgroundPhoto";
import ClassNames from "classnames";
import styled from "styled-components";

const { useState, useEffect } = React;

const CheckWidthHeight = () => {
  const width = window.outerWidth;
  const height = window.outerHeight;
  return height / width < 0.66666666 ? true : false;
};

const AnimationBackgroundPhoto = () => {
  const [photoNames, setPhotoNames] = useState(["01", "02", "03"]);
  const [currentPhoto, setCurrentPhoto] = useState(2);
  const [isWide, setIsWide] = useState(CheckWidthHeight());
  const backgroundImageClass = ClassNames({
    "horizontally-fit": isWide,
    "vertically-fit": !isWide
  });

  const photoPath = `${process.env.PUBLIC_URL}/photo/background/${photoNames[currentPhoto]}.jpg`;
  window.addEventListener("resize", () => setIsWide(CheckWidthHeight()));

  return <BackgroundPhoto url={photoPath} />;
};

const BackgroundPhoto = styled(defaultBackgroundPhoto)`
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
`;

export default AnimationBackgroundPhoto;

// export default animationBackgroundPhoto;
