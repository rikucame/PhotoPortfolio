import * as React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

interface propsInterface {
  title: string
  link: string
  className?: string
}

const linkText = (props: propsInterface) => {
  return (
    <LinkText className={props.className} to={props.link}>
      {props.title}
    </LinkText>
  )
}

const LinkText = styled(Link)`
  text-decoration: none;
  color: #000;
  font-family: "IBM Plex Mono", monospace, sans-serif;
  font-weight: 100;
`

export default linkText
