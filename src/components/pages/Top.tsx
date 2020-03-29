import React from "react";
import AnimationBackgroundPhoto from "../organisms/AnimationBacgroundPhoto";
import MenuWithFinderFlame from "../organisms/MenuWithFinderFlame";
import styled from "styled-components";

export default () => {
  return (
    <Top>
      <AnimationBackgroundPhoto />
      <MenuWithFinderFlame />
    </Top>
  );
};

const Top = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
