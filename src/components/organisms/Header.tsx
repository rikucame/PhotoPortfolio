import * as React from "react"
import styled from "styled-components"
import defaultNavigation from "../molecules/Navigation"
import { breakPointTB } from "../theme/MediaQuery"

interface propsInterface {
  className?: string
}

const header = (props: propsInterface) => {
  return (
    <Header className={props.className}>
      <Navigation />
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  height: 185px;
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  @media ${breakPointTB} {
    margin-top: 25px;
    margin-bottom: 0px;
    height: 70px;
  }
`

const Navigation = styled(defaultNavigation)`
  width: calc(100% - 100px);
  max-width: 1100px;
  @media ${breakPointTB} {
    width: calc(100% - 40px);
  }
`

export default header
