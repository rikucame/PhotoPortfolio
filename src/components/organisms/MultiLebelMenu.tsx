import * as React from "react";
import styled from "styled-components";
import defaultLinkText from "../atoms/LinkText";
import defaultLinkList from "../molecules/LinkList";
import { ABOUT, PHOTOS, BLOG } from "../../Router/PagePath";

const multiLabelMenu = () => {
  const menusArray = [
    {
      title: "POTOS",
      src: PHOTOS,
      secondMenu: [
        { title: "ALL", src: `${PHOTOS}/ALL` },
        { title: "2020", src: "/#" },
        { title: "2019", src: "/#" }
      ]
    },
    {
      title: "ABOUT",
      src: ABOUT,
      secondMenu: [
        { title: "INTORODUCE", src: "/#" },
        { title: "CONTACT", src: "/#" }
      ]
    },
    {
      title: "BLOG",
      src: BLOG,
      secondMenu: []
    }
  ];

  return (
    <FirstLinkList>
      {menusArray.map(menu => {
        return (
          <FirstLinkItem>
            <FirstLinkTitle title={menu.title} src={menu.src} />
            <SecondLinkList links={menu.secondMenu} />
          </FirstLinkItem>
        );
      })}
    </FirstLinkList>
  );
};

const FirstLinkList = styled.ul``;

const FirstLinkItem = styled.li``;

const FirstLinkTitle = styled(defaultLinkText)`
  font-size: 4.5vh;
`;

const SecondLinkList = styled(defaultLinkList)`
  font-size: 2vh;
`;

export default multiLabelMenu;
