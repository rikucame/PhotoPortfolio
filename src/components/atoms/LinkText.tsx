import * as React from "react";
import styled from "styled-components";

interface propsInterface {
  src: string;
  title: string;
  className?: string;
}

const linkText = (props: propsInterface) => {
  return (
    <LinkText className={props.className} href={props.src}>
      {props.title}
    </LinkText>
  );
};

const LinkText = styled.a`
  text-decoration: none;
  color: #000;
  font-family: "IBM Plex Mono", monospace, sans-serif;
  font-weight: 100;
`;

export default linkText;
