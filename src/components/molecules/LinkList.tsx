import * as React from "react";
import styled from "styled-components";
import defaultLinkText from "../atoms/LinkText";
import { prependOnceListener } from "cluster";

interface propsInterface {
  className?: string;
}

const linkList = (props: propsInterface) => {
  const links = [
    { title: "POHOTOS", src: "/photos" },
    { title: "ABOUT", src: "/about" },
    { title: "CONTACT", src: "/contact" }
  ];
  return (
    <LinkList className={props.className}>
      {links.map(link => {
        return <LinkText src={link.src} title={link.title} />;
      })}
    </LinkList>
  );
};

const LinkText = styled(defaultLinkText)`
  font-size: 4.5vh;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default linkList;
