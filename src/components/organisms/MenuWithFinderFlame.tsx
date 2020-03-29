import * as React from "react";
import styled from "styled-components";
import defaultLinkList from "../molecules/LinkList";
import defaultFinderFlame from "../atoms/FinderFlame";
import { ABOUT, PHOTOS, CONTACT } from "../../Router/PagePath";

const menuWithFinderFlame = () => {
  const links = [
    { title: "PHOTOS", src: PHOTOS },
    { title: "ABOUT", src: ABOUT },
    { title: "CONTACT", src: CONTACT }
  ];
  return (
    <MenuWithFinderFlame>
      <LinkList links={links} />
      <FinderFlame />
    </MenuWithFinderFlame>
  );
};

const MenuWithFinderFlame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const LinkList = styled(defaultLinkList)`
  && {
    font-size: 4.5vh;
    margin-left: calc(10% + 1px);
    transform: translateY(60%);
    padding-left: 1px;
    border-left: solid 1px #222;
    z-index: 100;
  }
`;
const FinderFlame = styled(defaultFinderFlame)`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default menuWithFinderFlame;
