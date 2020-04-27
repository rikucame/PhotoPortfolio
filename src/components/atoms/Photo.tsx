import * as React from "react";
import styled from "styled-components";

interface propsInterface {
  src: string;
  className?: string;
}

const photo = (props: propsInterface) => {
  return <Photo className={`photo ${props.className}`} src={props.src} />;
};

const Photo = styled.img``;

export default photo;
