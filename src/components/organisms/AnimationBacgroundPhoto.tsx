import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"

const AnimationBackgroundPhoto = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const transitions = useTransition(currentPhoto, (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(
    () =>
      void setInterval(
        () => setCurrentPhoto((currentPhoto) => (currentPhoto + 1) % 4),
        5000
      ),
    []
  )

  return (
    <React.Fragment>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            ...props,
            backgroundImage: `url(${process.env.PUBLIC_URL}/photo/background/${item}.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "50%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ))}
    </React.Fragment>
  )
}

export default AnimationBackgroundPhoto
