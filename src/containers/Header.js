import logo from 'assets/images/logo.svg';
import { Header } from 'components';
import React from 'react';

const HeaderContainer = ({ children, toggleTheme }) => {
    return (
        <Header>
            <Header.Logo src={logo} />
            <Header.SwitchTheme toggleTheme={toggleTheme} />
            {children}
        </Header>
    );
};

export default HeaderContainer;
