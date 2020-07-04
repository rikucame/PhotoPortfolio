import React, { useState, useEffect } from "react"
import defaultThoumbnails from "../molecules/Thumbnails"
import styled from "styled-components"
import defaultPhoto from "../atoms/Photo"
import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import { pageWrap, pageMain } from "../theme/Components"
import { getAspectRatio } from "../theme/Functions"
import {
  mediaPCL,
  mediaPC,
  mediaTB,
  SP,
  breakPointTB,
} from "../theme/MediaQuery"

export default () => {
  console.log(mediaPCL)
  const [selectedPhoto, setSelectedPhoto] = useState("0.JPG")
  const [horizontal, setHorizontal] = useState(true)
  const [photoAspectRatio, setPhotoAspectRatio] = useState({
    width: 1,
    height: 1,
  })
  console.log(photoAspectRatio)
  useEffect(() => {
    const photo = new Image()
    photo.src = `${process.env.PUBLIC_URL}/photo/portraits/0${selectedPhoto}`
    // setPhotoAspectRatio(getAspectRatio(photo.width, photo.height))
    setPhotoAspectRatio({
      width: photo.width / 1000,
      height: photo.height / 1000,
    })
    photo.width >= photo.height ? setHorizontal(true) : setHorizontal(false)
  }, [selectedPhoto])
  return (
    <Photos>
      <Header />
      <Main>
        <PhotoWrap>
          <Photo
            src={`${process.env.PUBLIC_URL}/photo/portraits/0${selectedPhoto}`}
            horizontal={horizontal}
          />
        </PhotoWrap>
        <ThoumbnailsWrap>
          <Thoumbnails setStateFunction={setSelectedPhoto} />
        </ThoumbnailsWrap>
      </Main>
      <Footer />
    </Photos>
  )
}

interface aspectRatioInterface {
  width: number
  height: number
}

const Photos = styled(pageWrap)`
  max-width: 1400px;
  max-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`

const Main = styled(pageMain)`
  justify-content: space-between;
  align-items: center;
  @media ${breakPointTB} {
    justify-content: center;
  }
`

const PhotoWrap = styled.div`
  @media ${breakPointTB} {
    width: 95%;
    height: calc(100% - 150px);
  }
  width: calc(100% - 330px);
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Photo = styled(defaultPhoto)<{ horizontal: boolean }>`
  padding: 15px;
  border: 6px solid #90623d;
  background-color: ${(props) => props.theme.colors.white};
  background-size: 90%;
  width: ${(props) => (props.horizontal ? "calc(95% - 42px)" : "auto")};
  height: ${(props) => (props.horizontal ? "auto" : "calc(90% - 42px)")};
  object-fit: contain;
  box-shadow: 15px 12px 18px #939393, 0px -18px 25px #ffffff,
    -3px 3px 13px #939393;
`

const ThoumbnailsWrap = styled.div`
  @media ${breakPointTB} {
    width: 97%;
    height: 90px;
    padding: 15px;
  }
  width: 220px;
  height: calc(95% - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset -2px -5px 15px ${(props) => props.theme.colors.shadow},
    inset 5px 5px 15px ${(props) => props.theme.colors.highlignt};
`

const Thoumbnails = styled(defaultThoumbnails)`
  @media ${breakPointTB} {
    overflow-x: scroll;
    flex-wrap: nowrap;
    height: 90px;
  }
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
