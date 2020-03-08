import * as React from 'react';
import '../../scss/components/atoms/Photo.scss'

interface photo {
    src: String
    className?: String
}

const Photo = (props: photo) => {
    return <img className={`photo ${props.className}`} src={`${props.src}`} />
}

export default Photo;