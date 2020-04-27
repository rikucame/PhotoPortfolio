import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"
interface propsInterface {
  className?: string
}

const compareLength = () =>
  window.outerWidth <= window.outerHeight ? "horizontal" : "vertical"

const AnimationBackgroundPhoto = (props: propsInterface) => {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [direction, setDirection] = useState(compareLength())
  const className = props.className
  const transitions = useTransition(currentPhoto, (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(
    () =>
      void setInterval(() => {
        setDirection(compareLength())
        setCurrentPhoto((currentPhoto) => (currentPhoto + 1) % 4)
      }, 5000),
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
            backgroundImage: `url(${process.env.PUBLIC_URL}/photo/background/${direction}/${item}.jpg)`,
          }}
        />
      ))}
    </React.Fragment>
  )
}

export default AnimationBackgroundPhoto
