import { Header } from 'components';
import * as ROUTES from 'constants/routes';
import React from 'react';

const NavContainer = () => (
    <Header.Navigation>
        <ul>
            <li>
                <Header.TextLink to={ROUTES.HOME}>
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
);

export default NavContainer;
