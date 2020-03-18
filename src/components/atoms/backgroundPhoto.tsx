import * as React from 'react';
import styled from 'styled-components';

interface propsInterface {
    className?: string
    url: string
}

const backgroundPhoto = (props: propsInterface) => {
    console.log(props.url)
    console.log(props.className)
       
    return <BackgroundPhoto className={props.className} url={props.url} />
}

const BackgroundPhoto = styled.div<{url: string}>`
    content: '';
    background-image: url(${props => props.url});
    width: 100%;
    height: 100%;
`

export default backgroundPhoto;