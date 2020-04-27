import * as React from "react"
import styled from "styled-components"
import defaultLinkText from "../atoms/LinkText"
import defaultFinderFlame from "../atoms/FinderFlame"
import { ABOUT, PHOTOS, BLOG } from "../../Router/PagePath"
import { mediaSP, mediaTB } from "../theme/mediaQuery"

interface propsInterface {
  className?: string
}

const menuWithFinderFlame = (props: propsInterface) => {
  const links = [
    { title: "PHOTOS", src: PHOTOS },
    { title: "ABOUT", src: ABOUT },
    { title: "BLOG", src: BLOG },
  ]
  return (
    <MenuWithFinderFlame className={props.className}>
      <MenuList>
        {links.map((link) => {
          return <LinkText title={link.title} src={link.src} />
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

const MenuList = styled.menu`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin-bottom: 17vh;
  ${mediaTB`
    margin-bottom: calc(130px);
  `};
`

const LinkText = styled(defaultLinkText)`
  text-align: left;
  padding-left: 5px;
  font-size: 65px;
  line-height: 1;
  z-index: 100;
  ${mediaSP`
    font-size: 45px;
  `};
`
const FinderFlame = styled(defaultFinderFlame)`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default menuWithFinderFlame
