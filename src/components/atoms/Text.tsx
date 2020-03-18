import * as React from 'react';
import styled from 'styled-components';

interface propsInterface {
    className?: string
}

const text = (props: propsInterface) => {
    return <Text className={props.className} />
}

const Text = styled.p``

export default Text;