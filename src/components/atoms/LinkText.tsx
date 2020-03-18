import * as React from 'react';
import styled from  'styled-components';

interface propsInterface {
    src: string
    title: string
    className?: string
}


const linkText = (props: propsInterface) => {
    return (
        <LinkText className={props.className} href={props.src}>
            {props.title}
        </LinkText>
    )
}

const LinkText = styled.a`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,300,400|Major+Mono+Display&display=swap');
    text-decoration: none;
    color: inherit;
    font-family:'IBM Plex Mono', monospace, sans-serif;
    font-weight: 100;
`

export default linkText;
