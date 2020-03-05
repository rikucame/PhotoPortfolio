import * as React from 'react';
import '../../scss/components/atoms/FinderFlame.scss'

interface linkLabel {
    src: String
}

const LinkLabel = (props: linkLabel) => {
    return (
        <a href={`${props.src}`}>
        </a>
    )
}

export default LinkLabel
;