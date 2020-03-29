import * as React from "react";
import styled from "styled-components";

interface propsInterface {
  className?: string;
}

const finderFlame = (props: propsInterface) => {
  return (
    <FinderFlameWrap className={props.className}>
      <FinderFlameTop />
      <FinderFlameBottom />
    </FinderFlameWrap>
  );
};

const boxStyle = {
  length: "9vw",
  minLength: "40px",
  maxLength: "80px",
  borderParam: "1px solid #222"
};

const FinderFlameWrap = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FinderFlameTop = styled.div`
  width: 100%;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: ${boxStyle.length};
    height: ${boxStyle.length};
    min-width: ${boxStyle.minLength};
    min-height: ${boxStyle.minLength};
    max-width: ${boxStyle.maxLength};
    max-height: ${boxStyle.maxLength};
    border-top: ${boxStyle.borderParam};
  }
  &::before {
    left: 0;
    border-left: ${boxStyle.borderParam};
  }
  &::after {
    right: 0;
    border-right: ${boxStyle.borderParam};
  }
`;
const FinderFlameBottom = styled.div`
  width: 100%;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${boxStyle.length};
    height: ${boxStyle.length};
    min-width: ${boxStyle.minLength};
    min-height: ${boxStyle.minLength};
    max-width: ${boxStyle.maxLength};
    max-height: ${boxStyle.maxLength};
    border-bottom: ${boxStyle.borderParam};
  }
  &::before {
    left: 0;
    border-left: ${boxStyle.borderParam};
  }
  &::after {
    right: 0;
    border-right: ${boxStyle.borderParam};
  }
`;

export default finderFlame;
