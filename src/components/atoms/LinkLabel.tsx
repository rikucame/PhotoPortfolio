import * as React from 'react';
import '../../scss/components/atoms/LinkLabel.scss'

interface LinkWord {
    src: String
    title: String
}

const LinkWord = (props: LinkWord) => {
    return (
        <a className={'link-label'} href={`${props.src}`}>
            {props.title}
        </a>
    )
}

export default LinkWord
;