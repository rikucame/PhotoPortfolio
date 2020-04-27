import React from "react"
import defaultAnimationBackgroundPhoto from "../organisms/AnimationBacgroundPhoto"
import defaultFinderFlame from "../organisms/MenuWithFinderFlame"
import styled from "styled-components"

export default () => {
  return (
    <Top>
      <AnimationBackgroundPhoto />
      <FinderFlame />
    </Top>
  )
}

const Top = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const AnimationBackgroundPhoto = styled(defaultAnimationBackgroundPhoto)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const FinderFlame = styled(defaultFinderFlame)`
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
