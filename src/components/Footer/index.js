import { Wrapper } from 'components';
import React from 'react';
import { Container, Group, Inner, Link, Text } from './styles/Footer';

const Footer = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Wrapper>
                <Inner>{children}</Inner>
            </Wrapper>
        </Container>
    );
};

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Footer.Group = function FooterGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Footer.Link = function FooterLink({ children, src, ...restProps }) {
    return (
        <Link href={src} target="_blank" {...restProps}>
            {children}
        </Link>
    );
};

export default Footer;
