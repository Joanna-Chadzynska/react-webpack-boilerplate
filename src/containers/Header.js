import logo from 'assets/images/logo.svg';
import { Header } from 'components';
import React from 'react';

const HeaderContainer = ({ children }) => (
    <Header>
        <Header.Logo src={logo} />
        <Header.NavToggleInput />
        {children}
        <Header.NavToggleLabel />
    </Header>
);

export default HeaderContainer;
