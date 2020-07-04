import styled from "styled-components"
import { breakPointTB } from "../theme/MediaQuery"

export const pageWrap = styled.div`
  width: 100%;
  height: 100%;
`

export const pageMain = styled.main`
  width: calc(100% - 100px);
  max-width: 1100px;
  height: calc(100% - 220px - 25px);
  display: flex;
  flex-wrap: wrap;
  @media ${breakPointTB} {
    width: calc(100% - 40px);
    height: calc(100% - 95px - 30px);
  }
`
