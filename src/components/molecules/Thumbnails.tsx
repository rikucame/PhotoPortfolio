import * as React from "react"
import styled from "styled-components"
import { breakPointTB } from "../theme/MediaQuery"

interface propsInterface {
  className?: string
  setStateFunction: Function
}

const thumbnails = (props: propsInterface) => {
  const photoFileNames = [...Array(40)].map((_, i) => `${i}.JPG`)
  const selectPhoto = (photoFileName: string) => {
    props.setStateFunction(photoFileName)
  }

  return (
    <ThumbnailPhotos className={props.className}>
      {photoFileNames.map((photoFileName) => {
        const backgroundImageUrl = `${process.env.PUBLIC_URL}/photo/portraits/0${photoFileName}`
        return (
          <ThumbnailPhoto
            onClick={() => selectPhoto(photoFileName)}
            backgroundImageUrl={backgroundImageUrl}
          >
            hogeogheohgeohgeohgeogheoghe
          </ThumbnailPhoto>
        )
      })}
    </ThumbnailPhotos>
  )
}

const ThumbnailPhotos = styled.ul`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  height: 100%;
`

const ThumbnailPhoto = styled.li<{ backgroundImageUrl: string }>`
  @media ${breakPointTB} {
    margin: 0 3px;
    width: 125px;
    height: 90px;
  }
  list-style: none;
  color: transparent;
  background-image: url(${(props) => props.backgroundImageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 105px;
  height: 100%;
  max-height: 90px;
  /* background-color: #000; */
`

export default thumbnails
