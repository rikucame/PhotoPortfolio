import React from "react";
import defaultMultiLevelMenu from "../organisms/MultiLebelMenu";
import styled from "styled-components";

export default () => {
  window.addEventListener("scroll", () => console.log("hoge"));
  return (
    <div className="photos">
      <p>PHOTOSです</p>
      <MultiLebelMenu />
    </div>
  );
};

const MultiLebelMenu = styled(defaultMultiLevelMenu)``;
