import * as React from "react"
import styled from "styled-components"
import defaultLinkText from "../atoms/LinkText"
import { PATHLIST } from "../../router/PageLinks"
import { breakPointTB } from "../theme/MediaQuery"

interface propsInterface {
  className?: string
}

const navigation = (props: propsInterface) => {
  return (
    <Navigation className={props.className}>
      {PATHLIST.map((path) => {
        return (
          <LinkItem>
            <LinkTitle title={path.title} link={path.link} />
            <SubLinkList>
              {path.secondLevel.map((secondLevel) => {
                return (
                  <SubLinkItem>
                    <SubLinkTitle
                      title={secondLevel.title}
                      link={secondLevel.link}
                    />
                  </SubLinkItem>
                )
              })}
            </SubLinkList>
          </LinkItem>
        )
      })}
    </Navigation>
  )
}

const commonList = styled.ul``

const commonListItem = styled.li`
  list-style: none;
`

const Navigation = styled(commonList)`
  display: flex;
  flex-direction: column;
  @media ${breakPointTB} {
    flex-direction: unset;
    justify-content: space-around;
  }
`

const LinkItem = styled(commonListItem)`
  margin: 4px 0;
`

const LinkTitle = styled(defaultLinkText)`
  font-size: 22px;
  @media ${breakPointTB} {
    font-size: 20px;
  }
`

const SubLinkList = styled(commonList)``

const SubLinkItem = styled(commonListItem)`
  margin: 2px 0;
`

const SubLinkTitle = styled(defaultLinkText)`
  font-size: 18px;
  @media ${breakPointTB} {
    font-size: 12px;
  }
`

export default navigation
