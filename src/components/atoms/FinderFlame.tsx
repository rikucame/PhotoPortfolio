import * as React from "react"
import styled from "styled-components"

interface propsInterface {
  className?: string
}

const finderFlame = (props: propsInterface) => {
  return (
    <FinderFlameWrap className={props.className}>
      <FinderFlameTop />
      <FinderFlameBottom />
    </FinderFlameWrap>
  )
}

const borderParam = "2px solid #111"

const FinderFlameWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const finderFlameCommon = styled.div`
  width: 100%;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 12vw;
    min-width: 60px;
    height: 10vh;
    min-height: 90px;
  }
  &::before {
    left: 0;
    border-left: ${borderParam};
  }
  &::after {
    right: 0;
    border-right: ${borderParam};
  }
`

const FinderFlameTop = styled(finderFlameCommon)`
  &::before,
  &::after {
    top: 0;
    border-top: ${borderParam};
  }
`
const FinderFlameBottom = styled(finderFlameCommon)`
  &::before,
  &::after {
    bottom: 0;
    border-bottom: ${borderParam};
  }
`

export default finderFlame
