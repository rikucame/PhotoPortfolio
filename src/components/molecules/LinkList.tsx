import * as React from "react";
import styled from "styled-components";
import defaultLinkText from "../atoms/LinkText";

interface propsInterface {
  className?: string;
  links: linksInterface[];
}

interface linksInterface {
  title: string;
  src: string;
}

const linkList = (props: propsInterface) => {
  // const links = [
  //   { title: "POHOTOS", src: "/photos" },
  //   { title: "ABOUT", src: "/about" },
  //   { title: "CONTACT", src: "/contact" }
  // ];
  return (
    <LinkList className={props.className}>
      {props.links.map(link => {
        return (
          <LinkItem>
            <LinkText src={link.src} title={link.title} />
          </LinkItem>
        );
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

const LinkItem = styled.li`
  list-style: none;
`;

export default linkList;
