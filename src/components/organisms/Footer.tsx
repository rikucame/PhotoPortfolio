import * as React from "react"
import styled from "styled-components"
import { breakPointTB } from "../theme/MediaQuery"
import defaultText from "../atoms/Text"

interface propsInterface {
  className?: string
}

const footer = (props: propsInterface) => {
  return (
    <Footer className={props.className}>
      <Text>©︎Rikuto Ishikura</Text>
    </Footer>
  )
}

const Footer = styled.footer`
  width: 100%;
  margin-top: 7px;
  margin-bottom: 5px;
  height: 13px;
  display: flex;
  justify-content: center;
  @media ${breakPointTB} {
    margin-top: 12px;
    height: 13px;
  }
`

const Text = styled(defaultText)`
  width: calc(100% - 105px);
  max-width: 1100px;
  font-size: 9px;
  text-align: right;
  @media ${breakPointTB} {
    width: calc(100% - 45px);
  }
`

export default footer
