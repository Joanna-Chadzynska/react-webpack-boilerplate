import { Header } from 'components';
import React from 'react';

const NavContainer = () => {
    return (
        <Header.Navigation>
            <ul>
                <li>
                    <Header.ButtonLink to="/">Home</Header.ButtonLink>
                </li>
                <li>
                    <Header.ButtonLink to="/about">
                        About
                    </Header.ButtonLink>
                </li>
            </ul>
        </Header.Navigation>
    );
};

export default NavContainer;
