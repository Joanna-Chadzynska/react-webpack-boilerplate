/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Header } from 'components';
import * as ROUTES from 'constants/routes';
import { useOnClickOutside } from 'hooks';
import React from 'react';
import { useLocation } from 'react-router-dom';

const NavContainer = () => {
    const location = useLocation();

    const { ref, isOpen } = useOnClickOutside();
    // const isActivePath = !!matchPath(location.pathname, {
    //     path: location.pathname,
    //     exact: true,
    // });

    return (
        <Header.NavigationWrapper navRef={ref}>
            <Header.NavToggleInput />
            <Header.Navigation>
                <ul ref={ref}>
                    <li>
                        <Header.TextLink exact to={ROUTES.HOME}>
                            Home
                        </Header.TextLink>
                    </li>
                    <li>
                        <Header.TextLink to={ROUTES.ABOUT}>
                            About
                        </Header.TextLink>
                    </li>
                    <li>
                        <Header.TextLink to={ROUTES.CONTACT}>
                            Contact
                        </Header.TextLink>
                    </li>
                    <li>
                        <Header.TextLink to={ROUTES.SIGN_UP}>
                            Sign up
                        </Header.TextLink>
                    </li>
                    <li>
                        <Header.ButtonLink to={ROUTES.SIGN_IN}>
                            Sign in
                        </Header.ButtonLink>
                    </li>
                </ul>
            </Header.Navigation>
            <Header.NavToggleLabel />
        </Header.NavigationWrapper>
    );
};

export default NavContainer;
