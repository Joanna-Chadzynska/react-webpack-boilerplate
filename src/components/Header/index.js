import { Wrapper } from 'components';
import React from 'react';
import {
    ButtonLink,
    Container,
    Inner,
    Logo,
    Navigation,
    NavigationWrapper,
    NavToggleInput,
    NavToggleLabel,
    SwitchTheme,
    SwitchThemeInner,
    SwitchThemeInput,
    SwitchThemeLabel,
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

Header.NavigationWrapper = function HeaderNavigationWrapper({
    children,
    navRef,
    ...restProps
}) {
    return (
        <NavigationWrapper ref={navRef} {...restProps}>
            {children}
        </NavigationWrapper>
    );
};

Header.Navigation = function HeaderNavigation({
    children,
    isNavOpen,
    ...restProps
}) {
    return (
        <Navigation className={isNavOpen} {...restProps}>
            {children}
        </Navigation>
    );
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
        <ButtonLink data-path={to} to={to} {...restProps}>
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
        <TextLink
            data-path={to}
            activeClassName="active"
            to={to}
            {...restProps}
        >
            {children}
        </TextLink>
    );
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.SwitchTheme = function HeaderSwitchTheme({
    children,
    toggleTheme,
    ...restProps
}) {
    return (
        <SwitchTheme {...restProps}>
            <SwitchThemeInner>
                <SwitchThemeInput
                    onChange={toggleTheme}
                    type="checkbox"
                    id="switch-1"
                />
                <SwitchThemeLabel htmlFor="switch-1">
                    Switch
                </SwitchThemeLabel>
            </SwitchThemeInner>
        </SwitchTheme>
    );
};

Header.NavToggleInput = function HeaderNavToggleInput({
    isActive,
    toggleMenu,
    ...restProps
}) {
    return (
        <NavToggleInput
            type="checkbox"
            id="nav-toggle"
            $isActive={isActive}
            onChange={toggleMenu}
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
