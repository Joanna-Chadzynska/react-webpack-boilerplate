import { Header } from 'components';
import * as ROUTES from 'constants/routes';
import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const NavContainer = () => {
    const location = useLocation();

    const isActivePath = !!matchPath(location.pathname, {
        path: location.pathname,
        exact: true,
    });

    return (
        <>
            <Header.NavToggleInput isActive={isActivePath} />
            <Header.Navigation>
                <ul>
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
        </>
    );
};

export default NavContainer;
