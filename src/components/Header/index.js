import { Wrapper } from 'components';
import React from 'react';
import {
    ButtonLink,
    Container,
    Inner,
    Logo,
    Navigation,
    NavToggleInput,
    NavToggleLabel,
    Text,
    TextLink,
} from './styles/Header';

const Header = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Wrapper>
                <Inner>{children}</Inner>
            </Wrapper>
        </Container>
    );
};

Header.Navigation = function HeaderNavigation({
    children,
    ...restProps
}) {
    return <Navigation {...restProps}>{children}</Navigation>;
};

Header.Logo = function HeaderLogo({ to, src, ...restProps }) {
    return <Logo {...restProps} src={src} />;
};

Header.ButtonLink = function HeaderButtonLink({
    children,
    to,
    ...restProps
}) {
    return (
        <ButtonLink to={to} {...restProps}>
            {children}
        </ButtonLink>
    );
};

Header.TextLink = function HeaderTextLink({
    children,
    to,
    ...restProps
}) {
    return (
        <TextLink to={to} {...restProps}>
            {children}
        </TextLink>
    );
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.NavToggleInput = function HeaderNavToggleInput({
    ...restProps
}) {
    return (
        <NavToggleInput
            type="checkbox"
            id="nav-toggle"
            {...restProps}
        />
    );
};

Header.NavToggleLabel = function HeaderNavToggleLabel({
    ...restProps
}) {
    return (
        <NavToggleLabel htmlFor="nav-toggle" {...restProps}>
            <span />
        </NavToggleLabel>
    );
};

export default Header;
