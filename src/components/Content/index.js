import { Wrapper } from 'components';
import React from 'react';
import { Container } from './styles/Content';

const Content = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Wrapper>{children}</Wrapper>
        </Container>
    );
};

export default Content;
