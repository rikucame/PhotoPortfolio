import * as React from "react"
import styled from "styled-components"

interface propsInterface {
  className?: string
  children: string
}

const text = (props: propsInterface) => {
  return <Text className={props.className}>{props.children}</Text>
}

const Text = styled.p`
  color: #000;
  font-family: "IBM Plex Mono", monospace, sans-serif;
  font-weight: 100;
  padding: 0 10px;
`

export default text
