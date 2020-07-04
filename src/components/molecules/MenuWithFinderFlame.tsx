import * as React from "react"
import styled from "styled-components"
import defaultLinkText from "../atoms/LinkText"
import defaultFinderFlame from "../atoms/FinderFlame"
import { PATHLIST } from "../../router/PageLinks"
import { SP } from "../theme/MediaQuery"

interface propsInterface {
  className?: string
}

const menuWithFinderFlame = (props: propsInterface) => {
  return (
    <MenuWithFinderFlame className={props.className}>
      <MenuList>
        {PATHLIST.map((path) => {
          if (path.title !== "TOP") {
            return <LinkText title={path.title} link={path.link} />
          }
        })}
      </MenuList>
      <FinderFlame />
    </MenuWithFinderFlame>
  )
}

const MenuWithFinderFlame = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-bottom: 17vh;
`

const LinkText = styled(defaultLinkText)`
  @media ${SP} {
    font-size: 40px;
  }
  text-align: left;
  padding-left: 5px;
  font-size: 55px;
  line-height: 1;
  z-index: 100;
`
const FinderFlame = styled(defaultFinderFlame)`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default menuWithFinderFlame
