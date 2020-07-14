import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"
import { horizontalPhotos, verticalPhotos } from "../theme/ImagePath"
interface propsInterface {
  className?: string
}

const compareLength = () =>
  window.outerWidth <= window.outerHeight ? horizontalPhotos : verticalPhotos

const AnimationBackgroundPhoto = (props: propsInterface) => {
  const className = props.className
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [directionPhotos, setDirectionPhotos] = useState(compareLength())
  const transitions = useTransition(
    directionPhotos[currentPhoto],
    (item) => item,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  )

  useEffect(
    () =>
      void setInterval(() => {
        setDirectionPhotos(compareLength())
        setCurrentPhoto(
          (currentPhoto) => (currentPhoto + 1) % horizontalPhotos.length
        )
      }, 4000),
    []
  )

  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          className={className}
          key={key}
          style={{
            ...props,
            backgroundImage: `url(${item})`,
          }}
        />
      ))}
    </React.Fragment>
  )
}

export default AnimationBackgroundPhoto
