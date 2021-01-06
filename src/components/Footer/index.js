import { Wrapper } from 'components';
import React from 'react';
import { Container, Inner, Link, Text } from './styles/Footer';

const Footer = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Wrapper>
                <Inner>{children}</Inner>
            </Wrapper>
        </Container>
    );
};

Footer.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Footer.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

export default Footer;
