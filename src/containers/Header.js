import logo from 'assets/images/logo.svg';
import { Header } from 'components';
import React from 'react';

const HeaderContainer = ({ children }) => (
    <Header>
        <Header.Logo src={logo} />
        {children}
    </Header>
);

export default HeaderContainer;
