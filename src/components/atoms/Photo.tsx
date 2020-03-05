import * as React from 'react';
import '../../scss/components/atoms/Photo.scss'

interface photo {
    fileName: String
    className: String
}

const Photo = (props: photo) => {
    console.log(props.fileName);
    const photoSrc = `${process.env.PUBLIC_URL}/photos/${props.fileName}.jpg`;
    return <img className={`photo ${props.className}`} src={photoSrc} />
}

export default Photo;