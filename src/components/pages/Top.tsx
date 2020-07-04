import React from "react"
import defaultAnimationBackgroundPhoto from "../organisms/AnimationBacgroundPhoto"
import defaultMenuWithFinderFlame from "../molecules/MenuWithFinderFlame"
import styled from "styled-components"
import { pageWrap } from "../theme/Components"

export default () => {
  return (
    <Top>
      <AnimationBackgroundPhoto />
      <MenuWithFinderFlame />
    </Top>
  )
}

const Top = styled(pageWrap)`
  text-align: center;
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

const MenuWithFinderFlame = styled(defaultMenuWithFinderFlame)`
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
